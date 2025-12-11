import { ExternalLink, Play } from 'lucide-react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useInView } from '../../hooks/useInView';

const showcaseProjects = [
  {
    title: 'EaseHealth AI',
    description: 'AI-powered healthcare management platform designed for Indian healthcare workflows. Features OCR for medical documents, AI-generated summaries, multilingual support, and comprehensive appointment management.',
    image: '/images/image copy copy.png',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'n8n', 'Tailwind CSS'],
    liveLink: 'https://easehealthai.netlify.app',
    videoDemo: '/media/easehealth-demo.mp4',
    highlight: 'AI auto-fills forms, checks eligibility—cut time 40%',
    status: 'Live MVP',
  },
  {
    title: 'Discovery Bionics',
    description: 'Professional corporate website for a leading biotech distribution company serving premier research institutions across India with 200+ product SKUs and partnerships with 8+ global brands.',
    image: '/images/discovery-bionics.jpg',
    technologies: ['WordPress', 'Web Design', 'Corporate', 'Biotech'],
    liveLink: 'https://discoverybionics.com/',
    highlight: 'Serving premier research institutions across India',
    status: 'Live',
  },
  {
    title: 'Sampoorna Nutrition',
    description: 'Comprehensive nutrition tracking application that enables users to monitor and analyze their daily dietary intake. Features detailed micronutrient and macronutrient tracking for health optimization and wellness management.',
    image: '/images/image copy.png',
    technologies: ['React', 'Nutrition Tracking', 'Health Tech', 'Web Application'],
    liveLink: 'https://sampoornanutrition.com/',
    highlight: 'Systematic nutritional insights for health-conscious individuals',
    status: 'Live',
  },
  {
    title: 'FinanceFlow',
    description: 'Personal finance management tool with AI-powered expense categorization and budget recommendations. Secure banking integration and investment tracking.',
    image: '/images/easehealth/05_ai_summary_1280.webp',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    liveLink: '#',
    highlight: 'Smart budgeting that saves clients 20% on average',
    status: 'Coming Soon',
  },
];

export default function Work() {
  const { ref, isInView } = useInView();

  return (
    <Section id="work">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader eyebrow="Portfolio" title="My Work" />

        <div className="space-y-12">
          {showcaseProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-[40%_60%] gap-0">
                <div className="relative bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${index === 0 || index === 2 ? 'object-contain' : 'object-cover'}`}
                  />
                  {project.status && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white px-3 py-1">
                        {project.status}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="bg-primary/10 border-l-4 border-primary px-4 py-3 mb-4">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {project.highlight}
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.liveLink !== '#' && (
                      <Button
                        variant="primary"
                        icon={ExternalLink}
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        View Live
                      </Button>
                    )}
                    {project.videoDemo && (
                      <Button variant="secondary" icon={Play}>
                        Watch Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
