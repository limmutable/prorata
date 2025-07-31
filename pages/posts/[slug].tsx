import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { fetchPost, fetchPosts, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  body: any
  author?: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
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
        <title>{post.title} - ProRata</title>
        <meta name="description" content={post.excerpt || `Read ${post.title} on ProRata`} />
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
          
          {post.mainImage && (
            <div className="post-hero-image">
              <Image
                src={urlFor(post.mainImage).width(800).height(400).url()}
                alt={post.mainImage.alt || post.title}
                width={800}
                height={400}
                priority
              />
            </div>
          )}
          
          <h1>{post.title}</h1>
          
          <div className="post-date">
            Published on {new Date(post.publishedAt).toLocaleDateString()}
            {post.author && <span> • by {post.author}</span>}
          </div>
          
          <div className="post-content">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p>No content available.</p>
            )}
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
    const paths = posts?.map((post: Post) => ({
      params: { slug: post.slug.current }
    })) || []

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug as string
    const post = await fetchPost(slug)

    if (!post) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        post
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}