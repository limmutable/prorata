import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { fetchPost, fetchPosts } from '@/lib/strapi'

interface Post {
  id: number
  attributes: {
    title: string
    content: string
    publishedAt: string
    slug: string
  }
}

interface PostProps {
  post: Post
}

export default function Post({ post }: PostProps) {
  if (!post) {
    return (
      <div className="container">
        <p>Post not found</p>
        <Link href="/">← Back to Home</Link>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{post.attributes.title} - ProRata</title>
        <meta name="description" content={post.attributes.content.substring(0, 160)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="container">
        <header className="header">
          <h1>ProRata</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <article className="post">
          <div className="post-meta">
            <Link href="/">← Back to Home</Link>
          </div>
          
          <h1>{post.attributes.title}</h1>
          
          <div className="post-date">
            Published on {new Date(post.attributes.publishedAt).toLocaleDateString()}
          </div>
          
          <div className="post-content">
            <p>{post.attributes.content}</p>
          </div>
        </article>
      </main>

      <style jsx>{`
        .post {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .post-meta {
          margin-bottom: 20px;
        }
        
        .post h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #333;
        }
        
        .post-date {
          color: #666;
          margin-bottom: 30px;
          font-size: 0.9rem;
        }
        
        .post-content {
          line-height: 1.8;
          font-size: 1.1rem;
        }
        
        .post-content p {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await fetchPosts()
    const paths = posts.data?.map((post: Post) => ({
      params: { slug: post.attributes.slug }
    })) || []

    return {
      paths,
      fallback: 'blocking'
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug as string
    const response = await fetchPost(slug)
    const post = response.data?.[0]

    if (!post) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        post
      },
      revalidate: 60
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}