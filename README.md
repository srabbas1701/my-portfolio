# Portfolio Website

A modern portfolio website built with React and TypeScript. Features a responsive design with dark mode support, project showcases, and contact form integration.

## Features

### Core Features
- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Dark Mode**: System-aware theme with manual toggle support
- **Interactive UI**: Smooth animations, transitions, and micro-interactions
- **SEO Optimized**: Semantic HTML and meta tags for better search visibility

### Sections
- **Hero Section**: Eye-catching introduction with call-to-action
- **About**: Personal introduction and professional background
- **Skills**: Technical expertise organized by category (Languages, Frontend, Backend, Tools)
- **Experience**: Professional work history with detailed descriptions
- **Featured Project**: Spotlight on primary project with media carousel
- **Portfolio**: Additional projects with filterable categories
- **LinkedIn Posts**: Curated professional content
- **Blog**: Technical articles and insights
- **Contact Form**: Web3Forms integration for inquiry submissions

### Technical Highlights
- **Type-Safe**: Full TypeScript implementation
- **Component Architecture**: Modular, reusable React components
- **Static Content**: JSON-based data management for optimal performance
- **Form Handling**: Web3Forms API for reliable contact form submissions
- **Image Optimization**: WebP format with responsive loading
- **Custom Hooks**: useInView for scroll-triggered animations

## Tech Stack

### Frontend
- **React 18.3.1**: Modern React with hooks
- **TypeScript 5.5.3**: Type-safe development
- **Vite 5.4.2**: Lightning-fast build tool
- **React Router DOM 7.9.6**: Client-side routing
- **Tailwind CSS 3.4.1**: Utility-first styling
- **Lucide React 0.344.0**: Beautiful icon library

### Data Management
- **Static JSON Files**: Fast, efficient content delivery without database overhead

### Development Tools
- **ESLint 9.9.1**: Code linting
- **PostCSS 8.4.35**: CSS processing
- **Autoprefixer 10.4.18**: Browser compatibility
- **Sharp 0.34.5**: Image optimization

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Web3Forms account (for contact form - optional)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd project
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Web3Forms (Optional)**

The contact form is configured with Web3Forms. The access key is already set in the Contact component. To use your own:
- Sign up at [Web3Forms](https://web3forms.com)
- Replace the access key in `/src/components/sections/Contact.tsx`

4. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

## Data Management

All content is managed through static JSON files in the `src/data/` directory:
- `projects.ts` - Portfolio projects
- `experience.ts` - Work experience
- `blog-posts.ts` - Blog content
- `linkedin-posts.ts` - LinkedIn posts
- `skills.ts` - Technical skills

Project slides are stored in `public/project_slides.json` for optimal loading performance.

## Project Structure

```
project/
├── public/
│   ├── images/              # Static images
│   │   └── easehealth/      # Project-specific images
│   ├── cases/               # Case study PDFs
│   ├── media/               # Videos and media files
│   └── project_slides.json  # Slide data
├── src/
│   ├── components/
│   │   ├── common/          # Shared components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Page sections
│   │   └── ui/              # UI primitives
│   ├── context/             # React context providers
│   ├── data/                # Static data files
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── pages/               # Route pages
│   ├── types/               # TypeScript types
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── Scripts/                 # Build scripts
└── [config files]           # Various config files
```

## Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run typecheck       # TypeScript type checking
```

## Customization Guide

### Adding New Projects

1. **Add images** to `public/images/`
2. **Update data** in `src/data/projects.ts`
3. **Create slides** (optional) in `public/project_slides.json`

### Modifying Content

Edit files in `src/data/`:
- `blog-posts.ts` - Blog articles
- `experience.ts` - Work history
- `linkedin-posts.ts` - LinkedIn content
- `projects.ts` - Portfolio projects
- `skills.ts` - Technical skills

### Styling

- **Colors**: Modify `tailwind.config.js`
- **Theme**: Edit `src/context/ThemeContext.tsx`
- **Global Styles**: Update `src/index.css`

### Contact Form

The contact form uses Web3Forms API. To customize:

1. **Update access key** in `src/components/sections/Contact.tsx`
2. **Modify fields** by editing the form structure
3. **Change success/error messages** in the same file

## Deployment

### Build Production Files
```bash
npm run build
```

The `dist/` folder contains production-ready files.

### Deployment Platforms

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Other Platforms**
Upload the `dist/` folder to any static hosting service.

### Environment Variables

No environment variables are required for basic deployment. Optionally set:
- `VITE_WEB3FORMS_KEY` - If using a custom Web3Forms account

## Performance Optimizations

- **Image Optimization**: WebP format with responsive sizes
- **Code Splitting**: Dynamic imports for routes
- **Tree Shaking**: Unused code elimination
- **CSS Purging**: Tailwind removes unused styles
- **Lazy Loading**: Images and components load on demand
- **Minification**: Production builds are minified

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Security

- **Environment Variables**: Never commit `.env` files
- **API Keys**: Use environment variables only
- **Form Validation**: Client-side validation for contact forms
- **HTTPS**: Always use HTTPS in production

## Contributing

This is a personal portfolio project. However, suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is private and proprietary. All rights reserved.

## Contact

For inquiries, use the contact form on the website or email directly at raza@razaabbas.dev.

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons provided by [Lucide](https://lucide.dev)
- Form handling by [Web3Forms](https://web3forms.com)
- Stock photos from [Pexels](https://pexels.com)

---

**Built with ❤️ using React and TypeScript**
