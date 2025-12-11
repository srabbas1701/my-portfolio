# Portfolio Website

A modern, full-stack portfolio website built with React, TypeScript, and Supabase. Features a responsive design with dark mode support, project showcases, contact form integration, and dynamic content management.

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
- **Database Integration**: Supabase for data persistence and content management
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

### Backend & Database
- **Supabase**: PostgreSQL database with Row Level Security
- **Supabase JS Client 2.57.4**: Database queries and real-time subscriptions

### Development Tools
- **ESLint 9.9.1**: Code linting
- **PostCSS 8.4.35**: CSS processing
- **Autoprefixer 10.4.18**: Browser compatibility
- **Sharp 0.34.5**: Image optimization

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account (for database)
- Web3Forms account (for contact form)

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

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Set up the database**

The project includes migration files in `supabase/migrations/`:
- `20251129200535_create_portfolio_tables.sql` - Creates core portfolio tables
- `20251130072446_create_project_slides_table.sql` - Creates project slides table

Apply migrations through Supabase Dashboard or CLI.

5. **Configure Web3Forms**

The contact form is configured with Web3Forms. The access key is already set in the Contact component. To use your own:
- Sign up at [Web3Forms](https://web3forms.com)
- Replace the access key in `/src/components/sections/Contact.tsx`

6. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## Database Schema

### Tables

**portfolio_projects**
- `id`: UUID primary key
- `title`: Project name
- `description`: Project overview
- `long_description`: Detailed description
- `image_url`: Main project image
- `technologies`: Array of tech stack
- `category`: Project category
- `featured`: Boolean flag
- `demo_url`, `github_url`, `case_study_url`: Project links
- `created_at`: Timestamp

**project_slides**
- `id`: UUID primary key
- `project_id`: Foreign key to portfolio_projects
- `title`: Slide title
- `description`: Slide content
- `image_url`: Slide image
- `order_index`: Display order
- `created_at`: Timestamp

**blog_posts**
- `id`: UUID primary key
- `title`: Post title
- `excerpt`: Short description
- `content`: Full content
- `cover_image_url`: Featured image
- `category`, `tags`: Organization
- `published_at`, `created_at`: Timestamps

**linkedin_posts**
- `id`: UUID primary key
- `content`: Post text
- `likes`, `comments`, `shares`: Engagement metrics
- `post_url`: LinkedIn link
- `created_at`, `published_at`: Timestamps

**experience**
- `id`: UUID primary key
- `company`, `position`: Job details
- `location`: Work location
- `description`: Role description
- `technologies`: Array of tech used
- `start_date`, `end_date`: Employment period
- `order_index`: Display order

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
├── supabase/
│   └── migrations/          # Database migrations
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
2. **Update data** in `src/data/projects.ts` or add to Supabase
3. **Create slides** (optional) in `public/project_slides.json`

### Modifying Content

**Static Content**: Edit files in `src/data/`
- `blog-posts.ts` - Blog articles
- `experience.ts` - Work history
- `linkedin-posts.ts` - LinkedIn content
- `projects.ts` - Portfolio projects
- `skills.ts` - Technical skills

**Dynamic Content**: Update Supabase database tables

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

Remember to set environment variables on your hosting platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

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
- **Database**: Row Level Security enabled on all tables
- **Form Validation**: Client and server-side validation
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

For inquiries, use the contact form on the website or email directly at sr_abbas@yahoo.com.

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons provided by [Lucide](https://lucide.dev)
- Form handling by [Web3Forms](https://web3forms.com)
- Database and backend by [Supabase](https://supabase.com)
- Stock photos from [Pexels](https://pexels.com)

---

**Built with ❤️ using React, TypeScript, and Supabase**
