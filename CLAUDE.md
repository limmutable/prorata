# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern static website built with Next.js and powered by Sanity CMS, designed for deployment on GitHub Pages. The project uses TypeScript for type safety and includes automated deployment workflows.

## Development Commands

### Setup
```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local to set your Sanity project credentials
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Export static files for GitHub Pages
npm run export

# Lint code
npm run lint
```

### Sanity CMS Commands
```bash
# Start Sanity Studio locally
npm run sanity:dev

# Build Sanity Studio
npm run sanity:build

# Deploy Sanity Studio to Sanity's hosting
npm run sanity:deploy
```

### Sanity CMS Setup
See `SANITY_SETUP.md` for detailed instructions on setting up Sanity CMS.

## Architecture

### Technology Stack
- **Next.js 14**: React framework with static site generation
- **TypeScript**: Type-safe JavaScript development
- **Sanity CMS**: Headless content management system
- **GitHub Pages**: Static site hosting
- **GitHub Actions**: Automated deployment

### Directory Structure
- `pages/`: Next.js pages and routing
  - `index.tsx`: Homepage with posts from Sanity
  - `about.tsx`: Static about page
  - `posts/[slug].tsx`: Dynamic post pages
- `lib/`: Utility functions and API integrations
  - `sanity.ts`: Sanity API client and helper functions
- `sanity/`: Sanity CMS schema and configuration
  - `schema.ts`: Content type definitions (posts, authors, pages)
- `sanity.config.ts`: Sanity Studio configuration (root level, required by CLI)
- `sanity.cli.ts`: Sanity CLI configuration
- `styles/`: CSS stylesheets
- `components/`: Reusable React components (add as needed)
- `public/`: Static assets

### Key Features
- Static site generation (SSG) for optimal performance
- Dynamic content fetching from Sanity CMS
- Responsive design with mobile-first approach
- SEO optimized with Next.js Head component
- Automated deployment to GitHub Pages
- Rich text content with PortableText
- Image optimization with Sanity

### Content Management
- Posts and pages managed through Sanity Studio
- Content is fetched at build time for static generation
- Real-time content editing with Sanity Studio
- Pages rebuild automatically when deployed
- Fallback handling for missing Sanity connection

### Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The GitHub Actions workflow builds the Next.js app and deploys the static files.

### Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID (required)
- `NEXT_PUBLIC_SANITY_DATASET`: Dataset name (default: production)
- `SANITY_API_TOKEN`: API token for write operations (optional, for Studio only)

Set these in GitHub repository secrets for production deployment.