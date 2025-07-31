import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-12-01',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// GROQ queries for content
export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "author": author->name,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  "author": author->name,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`

export const pagesQuery = `*[_type == "page" && defined(slug.current)] {
  _id,
  title,
  slug,
  content
}`

export const pageQuery = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content
}`

// Helper functions
export const fetchPosts = async () => {
  try {
    return await client.fetch(postsQuery)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export const fetchPost = async (slug: string) => {
  try {
    return await client.fetch(postQuery, { slug })
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export const fetchPages = async () => {
  try {
    return await client.fetch(pagesQuery)
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

export const fetchPage = async (slug: string) => {
  try {
    return await client.fetch(pageQuery, { slug })
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}