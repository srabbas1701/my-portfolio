import { ExternalLink, Play } from 'lucide-react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useInView } from '../../hooks/useInView';

interface ShowcaseProject {
  title: string;
  subtitle?: string;
  description: string;
  keyOutcomes?: string[];
  technicalDetails?: string;
  challenge?: string;
  scope?: {
    duration: string;
    team: string;
    status: string;
  };
  image: string;
  technologies: string[];
  liveLink: string;
  videoDemo?: string;
  highlight?: string;
  status?: string;
}

const showcaseProjects: ShowcaseProject[] = [
  {
    title: 'EaseHealth AI',
    description: 'AI-powered healthcare management platform designed for Indian healthcare workflows. Features OCR for medical documents, AI-generated summaries, multilingual support, and comprehensive appointment management.',
    image: '/images/image copy copy.png',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'n8n', 'Tailwind CSS'],
    liveLink: 'https://www.easehealthai.com',
    videoDemo: '/media/easehealth-demo.mp4',
    highlight: 'AI auto-fills forms, checks eligibility—cut time 40%',
    status: 'Live MVP',
  },
  {
    title: 'Discovery Bionics',
    subtitle: 'Corporate Platform for Premier Biotech Distribution Network',
    description: 'Built scalable digital presence for India\'s leading biotech distribution company serving 200+ research institutions and premier laboratories. The challenge: present 200+ complex product SKUs from 8+ global brands in a way that helps scientists and procurement officers quickly find exactly what they need—from reagents to lab equipment.',
    keyOutcomes: [
      'Increased product inquiry conversion by 45% through intuitive catalog structure',
      'Reduced average time-to-quote from 3 days to same-day through digital workflows',
      'Achieved 92 PageSpeed score with image-heavy product catalog (300+ images)',
      'Enabled 24/7 product discovery for clients across 15+ Indian states',
      'Reduced sales team inquiry-handling time by 30% through self-service product information',
    ],
    technicalDetails: 'Architected fast, SEO-optimized WordPress solution with custom product taxonomy for complex biotech catalog. Implemented advanced filtering (brand, category, application, specification) enabling researchers to find specialized products quickly. Built responsive design that works on tablets in lab environments.',
    challenge: 'Balancing rich product information (datasheets, protocols, certifications) with page speed for India\'s variable bandwidth—solved through lazy loading, intelligent caching, and image optimization strategies.',
    scope: {
      duration: '6 weeks',
      team: 'Solo development + client product team collaboration',
      status: 'Live production serving 200+ institutions',
    },
    image: '/images/discovery-bionics.jpg',
    technologies: ['WordPress', 'SEO', 'Custom Taxonomy', 'Performance Optimization'],
    liveLink: 'https://discoverybionics.com/',
    highlight: '45% increase in product inquiry conversion',
    status: 'Live',
  },
  {
    title: 'LensOnWealth',
    subtitle: 'Investment Portfolio Intelligence Platform',
    description: 'Built for Indian retail investors struggling with fragmented broker statements, manual portfolio tracking, and lack of actionable insights. The Investment Portfolio platform transforms scattered financial data into a single source of truth, delivering real-time portfolio intelligence, performance analytics, and decision-grade insights through automation and AI-driven analysis.',
    keyOutcomes: [
      'Unified portfolio view across multiple brokers and asset classes',
      'Automated broker statement ingestion (PDF/Excel) with zero manual entry',
      'Accurate cost-basis, realized & unrealized P&L calculation',
      'Real-time portfolio performance and allocation insights',
      'Intelligent separation of Stocks vs ETFs from mixed broker statements',
      'Clean net-worth tracking with historical performance trends',
      'Scalable architecture supporting thousands of securities per user',
      'Secure, privacy-first design with user-isolated financial data',
    ],
    technicalDetails: 'Built using a modern full-stack architecture with React + TypeScript on the frontend and Supabase (PostgreSQL) on the backend. Designed a normalized financial data schema capable of handling complex broker variations while maintaining performance and accuracy. Implemented a statement processing pipeline that ingests raw broker documents, extracts structured transaction data, and maps it into a unified portfolio model. Special care was taken to handle real-world broker inconsistencies—mixed asset classes, varying column formats, missing metadata, and non-standard naming conventions. Architected the system with a clear separation between ingestion, normalization, analytics, and presentation layers—allowing independent evolution of each module.',
    challenge: 'Indian investors typically hold assets across multiple brokers, asset classes (stocks, ETFs, mutual funds), and formats—PDF statements, Excel files, emails, and screenshots. There is no standardized view of net worth, returns, or risk exposure. Manual tracking leads to errors, outdated insights, missed rebalancing opportunities, and poor investment decisions. Most tools either focus on a single asset class or require tedious manual data entry, making them unsuitable for serious long-term investors.',
    scope: {
      duration: '6–8 weeks',
      team: 'Solo product architect, full-stack developer, and system designer',
      status: 'Active MVP with real user portfolios and live data ingestion',
    },
    image: '/images/lens-on-wealth/image.png',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Financial Analytics'],
    liveLink: '#',
    highlight: 'Unified wealth tracking & AI-powered investment analytics',
    status: 'Active MVP',
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
                <div className="flex flex-col bg-gray-100 dark:bg-gray-900">
                  <div className="relative flex items-center justify-center p-4 min-h-[300px] md:min-h-[400px] flex-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                    />
                    {project.status && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-white px-3 py-1">
                          {project.status}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-3">
                      {project.liveLink !== '#' && (
                        <Button
                          variant="primary"
                          icon={ExternalLink}
                          onClick={() => window.open(project.liveLink, '_blank')}
                        >
                          View Live Demo
                        </Button>
                      )}
                      {project.videoDemo && (
                        <Button variant="secondary" icon={Play}>
                          Watch Video
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col max-h-[500px] md:max-h-[700px]">
                  <div className="flex-shrink-0">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-base font-medium text-primary mb-4">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex-1 overflow-y-auto pr-2">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="bg-primary/10 border-l-4 border-primary px-4 py-3 mb-4">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {project.highlight}
                      </p>
                    </div>
                  )}

                  {project.keyOutcomes && (
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">KEY OUTCOMES:</h4>
                      <ul className="space-y-1.5">
                        {project.keyOutcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <span className="text-primary mt-0.5">🎯</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technicalDetails && (
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">TECHNICAL IMPLEMENTATION:</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.technicalDetails}
                      </p>
                    </div>
                  )}

                  {project.challenge && (
                    <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r">
                      <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="font-semibold">Key Challenge:</span> {project.challenge}
                      </p>
                    </div>
                  )}

                  {project.scope && (
                    <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">PROJECT SCOPE:</h4>
                      <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                        <p><span className="font-medium">Duration:</span> {project.scope.duration}</p>
                        <p><span className="font-medium">Team:</span> {project.scope.team}</p>
                        <p><span className="font-medium">Status:</span> {project.scope.status}</p>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      TECH STACK:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
