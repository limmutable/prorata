import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { fetchPosts, urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  author?: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
}

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>ProRata - Next.js with Strapi CMS</title>
        <meta name="description" content="A static website built with Next.js and Strapi CMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="container">
        <header className="header">
          <h1>ProRata</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <section className="hero">
          <h2>Welcome to ProRata</h2>
          <p>A modern static website built with Next.js and powered by Sanity CMS</p>
        </section>

        <section className="posts">
          <h3>Latest Posts</h3>
          {posts && posts.length > 0 ? (
            <div className="posts-grid">
              {posts.map((post) => (
                <article key={post._id} className="post-card">
                  {post.mainImage && (
                    <div className="post-image">
                      <Image
                        src={urlFor(post.mainImage).width(400).height(200).url()}
                        alt={post.mainImage.alt || post.title}
                        width={400}
                        height={200}
                      />
                    </div>
                  )}
                  <div className="post-content">
                    <h4>
                      <Link href={`/posts/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h4>
                    {post.excerpt && <p className="excerpt">{post.excerpt}</p>}
                    <div className="post-meta">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      {post.author && <span> • by {post.author}</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p>No posts available. Connect to Sanity CMS to see content.</p>
          )}
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await fetchPosts()
    return {
      props: {
        posts: posts || []
      }
    }
  } catch (error) {
    console.log('Failed to fetch posts:', error)
    return {
      props: {
        posts: []
      }
    }
  }
}