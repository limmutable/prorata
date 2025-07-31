# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern static website built with Next.js and powered by Strapi CMS, designed for deployment on GitHub Pages. The project uses TypeScript for type safety and includes automated deployment workflows.

## Development Commands

### Setup
```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local to set your STRAPI_API_URL
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

### Strapi CMS Setup
See `strapi-setup.md` for detailed instructions on setting up Strapi CMS.

## Architecture

### Technology Stack
- **Next.js 14**: React framework with static site generation
- **TypeScript**: Type-safe JavaScript development
- **Strapi CMS**: Headless content management system
- **GitHub Pages**: Static site hosting
- **GitHub Actions**: Automated deployment

### Directory Structure
- `pages/`: Next.js pages and routing
  - `index.tsx`: Homepage with posts from Strapi
  - `about.tsx`: Static about page
  - `posts/[slug].tsx`: Dynamic post pages
- `lib/`: Utility functions and API integrations
  - `strapi.ts`: Strapi API client and helper functions
- `styles/`: CSS stylesheets
- `components/`: Reusable React components (add as needed)
- `public/`: Static assets

### Key Features
- Static site generation (SSG) for optimal performance
- Dynamic content fetching from Strapi CMS
- Responsive design with mobile-first approach
- SEO optimized with Next.js Head component
- Automated deployment to GitHub Pages

### Content Management
- Posts are managed through Strapi CMS
- Content is fetched at build time for static generation
- Pages rebuild automatically when deployed
- Fallback handling for missing Strapi connection

### Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The GitHub Actions workflow builds the Next.js app and deploys the static files.

### Environment Variables
- `STRAPI_API_URL`: URL of your Strapi CMS instance (default: http://localhost:1337)

Set this in GitHub repository secrets for production deployment.