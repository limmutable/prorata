import axios from 'axios'

const STRAPI_API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337'

const strapiApi = axios.create({
  baseURL: STRAPI_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchFromStrapi = async (endpoint: string) => {
  try {
    const response = await strapiApi.get(endpoint)
    return response.data
  } catch (error) {
    console.error('Error fetching from Strapi:', error)
    throw error
  }
}

export const fetchPosts = async () => {
  return fetchFromStrapi('/api/posts?populate=*')
}

export const fetchPost = async (slug: string) => {
  return fetchFromStrapi(`/api/posts?filters[slug][$eq]=${slug}&populate=*`)
}

export const fetchPages = async () => {
  return fetchFromStrapi('/api/pages?populate=*')
}

export const fetchPage = async (slug: string) => {
  return fetchFromStrapi(`/api/pages?filters[slug][$eq]=${slug}&populate=*`)
}

export default strapiApi