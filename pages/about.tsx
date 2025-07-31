import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About - ProRata</title>
        <meta name="description" content="Learn more about ProRata" />
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

        <section className="content">
          <h2>About ProRata</h2>
          
          <p>
            ProRata is a modern static website built with cutting-edge technologies 
            to deliver fast, scalable, and maintainable web experiences.
          </p>

          <h3>Technology Stack</h3>
          <ul>
            <li><strong>Next.js</strong> - React framework for static site generation</li>
            <li><strong>Strapi CMS</strong> - Headless content management system</li>
            <li><strong>GitHub Pages</strong> - Static site hosting</li>
            <li><strong>TypeScript</strong> - Type-safe JavaScript development</li>
          </ul>

          <h3>Features</h3>
          <ul>
            <li>Static site generation for optimal performance</li>
            <li>Headless CMS integration for easy content management</li>
            <li>Responsive design for all devices</li>
            <li>SEO optimized</li>
            <li>Automated deployment with GitHub Actions</li>
          </ul>

          <h3>Getting Started</h3>
          <p>
            This project is designed to work with a Strapi CMS backend. 
            Configure your Strapi API URL in the environment variables to start 
            fetching content dynamically.
          </p>
        </section>
      </main>
    </>
  )
}