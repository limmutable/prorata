# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS with your Next.js project. Sanity is completely free for your use case and requires no server hosting!

## Why Sanity + GitHub Pages is Perfect

✅ **Completely Free Setup:**
- Sanity: Free tier (3 users, 10GB bandwidth, 500k API requests/month)
- GitHub Pages: Free static hosting
- No server costs, no database hosting fees

✅ **No Server Management:**
- Sanity is fully cloud-hosted
- Your Next.js site is static (GitHub Pages)
- Zero infrastructure management

## Step 1: Create Sanity Project

### 1.1 Sign up for Sanity
1. Go to [sanity.io](https://sanity.io)
2. Sign up with your GitHub account (recommended)
3. Verify your email if needed

### 1.2 Create New Project
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click "Create new project"
3. Choose:
   - **Project name**: `ProRata CMS` (or your preferred name)
   - **Dataset**: `production`
   - **Template**: Skip template (we have our own schema)

### 1.3 Get Your Project Credentials
After creating the project, note down:
- **Project ID**: Found in project settings (e.g., `abc123de`)
- **Dataset**: `production` (default)

## Step 2: Configure Your Next.js Project

### 2.1 Set Environment Variables
```bash
# Copy the example file
cp .env.local.example .env.local
```

Update `.env.local` with your actual Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123de
NEXT_PUBLIC_SANITY_DATASET=production
```

### 2.2 Install Dependencies
```bash
npm install
```

## Step 3: Set Up Sanity Studio

### 3.1 Start Sanity Studio Locally
```bash
# This will run Sanity Studio on http://localhost:3333
npm run sanity:dev
```

### 3.2 Create Your First Content
1. Open http://localhost:3333
2. Sign in with your Sanity account
3. Create an **Author** first:
   - Go to "Author" section
   - Add your name and bio
4. Create a **Post**:
   - Go to "Post" section
   - Add title, content, select author
   - Publish the post

### 3.3 Deploy Sanity Studio (Optional but Recommended)
```bash
# Deploy Studio to Sanity's hosting (free)
npm run sanity:deploy
```

Choose a subdomain name (e.g., `prorata-cms`) - you'll get:
`https://prorata-cms.sanity.studio`

## Step 4: Configure GitHub Secrets

For your site to build properly on GitHub Pages:

1. Go to your GitHub repository: `limmutable/prorata`
2. Settings → Secrets and variables → Actions
3. Add these repository secrets:
   - **Name**: `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - **Value**: Your actual project ID (e.g., `abc123de`)
   
   - **Name**: `NEXT_PUBLIC_SANITY_DATASET`
   - **Value**: `production`

## Step 5: Test Everything

### 5.1 Local Testing
```bash
# Start your Next.js development server
npm run dev
```

Visit http://localhost:3000 - you should see your posts from Sanity!

### 5.2 Production Deployment
Push your changes to GitHub - your site will automatically deploy to GitHub Pages with content from Sanity.

## Content Management Workflow

### Daily Content Management
1. **Option A**: Use deployed Studio
   - Go to `https://your-subdomain.sanity.studio`
   - Login and edit content
   
2. **Option B**: Use local Studio
   - Run `npm run sanity:dev`
   - Edit at http://localhost:3333

### Content Publishing
- Content changes are **immediately available** via Sanity's API
- Your static site rebuilds automatically when you push code changes
- For immediate content updates on production, you can manually trigger a GitHub Actions rebuild

## Content Types Available

### Posts
- Title, slug, excerpt
- Rich text content with images
- Author reference
- Featured image
- Publication date

### Authors  
- Name, bio, profile image
- Slug for author pages

### Pages
- For static pages like "About"
- Rich text content

## Cost Summary

- **Sanity CMS**: FREE (generous limits)
- **GitHub Pages**: FREE
- **Total Monthly Cost**: $0

## Sanity Studio Features

- ✅ Real-time collaborative editing
- ✅ Rich text editor with custom blocks
- ✅ Image upload and optimization
- ✅ Content versioning
- ✅ Custom validation rules
- ✅ Role-based access control

## Need Help?

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)
- Check your browser console for any API errors