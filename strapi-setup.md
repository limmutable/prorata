# Strapi CMS Setup Guide

This guide will help you set up Strapi Cloud CMS to work with your Next.js frontend.

## Strapi Cloud Setup

### 1. Create Strapi Cloud Project

1. Visit [Strapi Cloud](https://cloud.strapi.io/)
2. Sign up or log in with your GitHub account
3. Click "Create Project"
4. Connect your GitHub repository: `limmutable/prorata-cms`
5. Choose the free tier
6. Deploy your Strapi instance

### 2. Get Your Strapi Cloud URL

After deployment, you'll get a URL like:
```
https://your-project-name.strapiapp.com
```

### 3. Update Environment Variables

Copy `.env.local.example` to `.env.local` in your Next.js project:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your Strapi Cloud URL:
```env
STRAPI_API_URL=https://your-project-name.strapiapp.com
```

### 4. Configure GitHub Repository Secret

For production deployment, add your Strapi URL to GitHub repository secrets:

1. Go to your GitHub repository: `limmutable/prorata`
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `STRAPI_API_URL`
5. Value: `https://your-project-name.strapiapp.com`

## Content Types Configuration

After your Strapi Cloud instance is deployed, configure the content types:

### 1. Access Strapi Admin

Go to your Strapi Cloud admin panel:
```
https://your-project-name.strapiapp.com/admin
```

### 2. Create Content Types

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

Create a few posts and pages to test the integration with your Next.js frontend.

## Testing the Integration

### 1. Local Development

1. Copy environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your Strapi Cloud URL:
   ```env
   STRAPI_API_URL=https://your-project-name.strapiapp.com
   ```

3. Start your Next.js development server:
   ```bash
   npm run dev
   ```

4. Visit http://localhost:3000 to see your content

### 2. Production Deployment

Your GitHub Actions workflow will automatically use the `STRAPI_API_URL` secret you configured to fetch content during the build process.

## API Endpoints

Once set up, your Strapi instance will provide these endpoints:

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a specific post
- `GET /api/posts?filters[slug][$eq]=:slug` - Get post by slug
- `GET /api/pages` - Get all pages
- `GET /api/pages?filters[slug][$eq]=:slug` - Get page by slug

## Repository Structure

Your projects are now organized as:

```
GitHub Repositories:
├── limmutable/prorata           (Next.js frontend)
└── limmutable/prorata-cms       (Strapi CMS - managed by Strapi Cloud)

Deployment:
├── GitHub Pages                 (Frontend hosting)
└── Strapi Cloud                 (CMS hosting)
```