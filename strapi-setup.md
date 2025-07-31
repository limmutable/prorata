# Strapi CMS Setup Guide

This guide will help you set up Strapi CMS to work with your Next.js frontend.

## Quick Setup with Strapi Cloud

1. Visit [Strapi Cloud](https://cloud.strapi.io/)
2. Create a new project
3. Choose the free tier
4. Deploy your Strapi instance
5. Update your `STRAPI_API_URL` environment variable

## Local Strapi Setup

### 1. Create a new Strapi project

```bash
npx create-strapi-app@latest strapi-cms --quickstart
cd strapi-cms
```

### 2. Create Content Types

After Strapi starts, go to http://localhost:1337/admin and create:

#### Posts Collection Type
- **Name**: Post
- **Fields**:
  - `title` (Text) - Required
  - `content` (Rich Text) - Required
  - `slug` (Text) - Required, Unique
  - `publishedAt` (DateTime) - Default: now

#### Pages Collection Type (Optional)
- **Name**: Page
- **Fields**:
  - `title` (Text) - Required
  - `content` (Rich Text) - Required
  - `slug` (Text) - Required, Unique

### 3. Configure API Permissions

1. Go to Settings → Users & Permissions Plugin → Roles
2. Click on "Public"
3. Enable the following permissions:
   - **Post**: `find`, `findOne`
   - **Page**: `find`, `findOne`
4. Save

### 4. Add Sample Content

Create a few posts and pages to test the integration.

### 5. Environment Variables

Copy `.env.local.example` to `.env.local` and update:

```env
STRAPI_API_URL=http://localhost:1337
```

For production deployment, update this to your Strapi instance URL.

## Deployment Options

### Strapi Cloud (Recommended)
- Free tier available
- Easy deployment
- Automatic backups

### Heroku
1. Create a new Heroku app
2. Add PostgreSQL addon
3. Deploy your Strapi project
4. Update environment variables

### Railway
1. Connect your Strapi repository
2. Add PostgreSQL service
3. Deploy

### DigitalOcean App Platform
1. Create a new app
2. Connect your repository
3. Add managed database
4. Configure environment variables

## API Endpoints

Once set up, your Strapi instance will provide these endpoints:

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a specific post
- `GET /api/posts?filters[slug][$eq]=:slug` - Get post by slug
- `GET /api/pages` - Get all pages
- `GET /api/pages?filters[slug][$eq]=:slug` - Get page by slug

## Testing the Integration

1. Start your Strapi CMS
2. Add some content
3. Run your Next.js development server: `npm run dev`
4. Visit http://localhost:3000 to see your content