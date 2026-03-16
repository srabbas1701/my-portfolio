# MyPortfolio - Claude Code Project Memory

## Overview
Personal skills and portfolio website showcasing Abbas's 25+ years of IT
experience, technical projects (WealthLensAI, EaseHealthAI), and capabilities
as a technology leader and AI application developer.

## Stack
Vite + React - fully static site
Deployed on Vercel (frontend only, no backend required)

## Development Info
- Framework      : Vite + React
- Local Port     : 5174 (recommended to avoid clash with EaseHealthAI on 5173)
- Dev Command    : npm run dev
- Built with     : Cursor + Claude (Anthropic)
- Original source: D:\my-portfolio\my-portfolio

---

## Local Development
- Start : npm run dev
- URL   : http://localhost:5174
- Needs : No .env.local required for static content

## Port Clash Fix
Both EaseHealthAI and MyPortfolio default to Vite port 5173.
To run both simultaneously, add this to vite.config.js in MyPortfolio:

  server: {
    port: 5174,
    strictPort: true,
  }

## Domain Focus
- Personal branding and professional skills showcase
- Project portfolio display (WealthLensAI, EaseHealthAI, other projects)
- 25+ years IT experience and technology leadership highlight
- AI application development capabilities
- Contact and professional social links

## Key Conventions - Vite + React
- React functional components with hooks
- Client-side rendering only (static site)
- Environment variables via import.meta.env (NOT process.env)
- Keep components small and focused
- Optimise all images (WebP format preferred)
- lucide-react icons available (excluded from optimizeDeps in vite.config.ts)

## SEO Checklist (Every Page)
- Title tag set uniquely per page
- Meta description written
- Open Graph tags: og:title, og:description, og:image
- Canonical URL set
- All images have descriptive alt text
- Proper heading hierarchy (one H1 per page)

## Deployment
- Local      : http://localhost:5174
- Production : Vercel (auto-deploy on main branch)

## Watch Out For
- No process.env available - use import.meta.env instead
- Keep build fully static for fast Vercel cold starts
- No backend or Supabase unless adding a contact form later
- Accessibility: check colour contrast, keyboard navigation

## Claude Code Instructions
- Keep the build static - avoid adding unnecessary dependencies
- Run code-review skill before every PR (includes SEO checklist)
- Run release skill before every production deploy
