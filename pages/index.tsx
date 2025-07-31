import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { fetchFromStrapi } from '@/lib/strapi'

interface Post {
  id: number
  attributes: {
    title: string
    content: string
    publishedAt: string
    slug: string
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
          <p>A modern static website built with Next.js and powered by Strapi CMS</p>
        </section>

        <section className="posts">
          <h3>Latest Posts</h3>
          {posts && posts.length > 0 ? (
            <div className="posts-grid">
              {posts.map((post) => (
                <article key={post.id} className="post-card">
                  <h4>
                    <Link href={`/posts/${post.attributes.slug}`}>
                      {post.attributes.title}
                    </Link>
                  </h4>
                  <p>{new Date(post.attributes.publishedAt).toLocaleDateString()}</p>
                </article>
              ))}
            </div>
          ) : (
            <p>No posts available. Connect to Strapi CMS to see content.</p>
          )}
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await fetchFromStrapi('/api/posts?populate=*')
    return {
      props: {
        posts: posts.data || []
      },
      revalidate: 60
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