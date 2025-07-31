# ProRata

A modern static website built with Next.js and powered by Sanity CMS, deployed on GitHub Pages.

## Features

- =€ **Next.js 14** with TypeScript
- =Ý **Sanity CMS** for content management
- <¨ **Responsive design** with modern CSS
- =ñ **Mobile-first** approach
- ¡ **Static site generation** for optimal performance
- < **GitHub Pages** deployment
- = **Secure environment variable handling**

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **CMS**: Sanity Studio
- **Styling**: CSS3 with responsive design
- **Deployment**: GitHub Actions ’ GitHub Pages
- **Content**: Rich text with PortableText

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/limmutable/prorata.git
   cd prorata
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Sanity credentials
   ```

4. **Start development**
   ```bash
   # Start Next.js (website)
   npm run dev
   
   # Start Sanity Studio (content management)
   npm run sanity:dev
   ```

5. **View your site**
   - Website: http://localhost:3000
   - Sanity Studio: http://localhost:3333

## Documentation

- **Setup Guide**: See `SANITY_SETUP.md` for detailed Sanity configuration
- **Development Guide**: See `CLAUDE.md` for development commands and architecture

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Live Site**: https://limmutable.github.io/prorata

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.