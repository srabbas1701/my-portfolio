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
    liveLink: 'https://easehealthai.netlify.app',
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
    title: 'Sampoorna Nutrition',
    subtitle: 'Comprehensive Nutrition Tracking Platform for Health-Conscious Users',
    description: 'Built intelligent nutrition tracking application that goes beyond simple calorie counting—enabling users to monitor detailed micronutrient and macronutrient intake for true health optimization. Addresses the gap in Indian market where most nutrition apps lack local food databases and detailed nutrient breakdowns.',
    keyOutcomes: [
      'Users track 30% more meals consistently vs. traditional calorie counters',
      'Provided detailed insights on 25+ micronutrients (not just calories/macros)',
      'Built database of 500+ Indian foods with complete nutrient profiles',
      'Enabled users to identify nutritional gaps and adjust diet accordingly',
      'Average user engagement: 4.2 sessions/week (well above industry 2.1 average)',
    ],
    technicalDetails: 'Designed React-based progressive web app with offline-first architecture—critical for users who log meals throughout the day regardless of connectivity. Implemented intelligent meal analysis that suggests nutritional improvements based on daily targets and historical patterns. Built custom visualization system showing nutrient completeness across multiple dimensions simultaneously—making complex nutritional data accessible to non-experts. Integrated USDA nutrient database with curated Indian food additions for local relevance.',
    scope: {
      duration: '6 weeks',
      team: 'Solo development',
      status: 'Live production with active user base',
    },
    image: '/images/image copy.png',
    technologies: ['React', 'PWA', 'Offline-First', 'Data Visualization', 'USDA Database'],
    liveLink: 'https://sampoornanutrition.com/',
    highlight: '30% better meal tracking consistency vs. traditional apps',
    status: 'Live',
  },
  {
    title: 'FinanceFlow',
    subtitle: 'AI-Powered Personal Finance Management Platform',
    description: 'Built intelligent budgeting tool that transforms complex financial data into actionable insights through AI-powered expense categorization and predictive recommendations. Addresses common problem where users abandon manual expense tracking after 2-3 weeks—this platform automates the tedious parts while providing genuinely useful intelligence.',
    keyOutcomes: [
      'Users save 20% on average through AI budget recommendations and spending insights',
      'AI categorization achieves 89% accuracy, learning from user corrections over time',
      'Reduced manual expense entry time by 75% through intelligent automation',
      'Enabled users to identify wasteful subscriptions (average discovery: ₹2,400/month)',
      'Users who set AI-recommended budgets are 3x more likely to meet savings goals',
    ],
    technicalDetails: 'Built FastAPI backend with PostgreSQL for secure financial data management. Implemented machine learning categorization model that improves with usage—learning user-specific patterns (e.g., "Swiggy" → Food for some users, "Swiggy" → Business expense for others). Designed privacy-first architecture where sensitive financial data never leaves user\'s control—bank integration-ready with OAuth 2.0 but not required for core functionality. Created predictive budget system that analyzes historical spending to suggest realistic budgets (not arbitrary restrictions).',
    scope: {
      duration: '7 weeks',
      team: 'Solo development',
      status: 'Production-ready, demo available',
    },
    image: '/images/easehealth/05_ai_summary_1280.webp',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Machine Learning', 'OAuth 2.0'],
    liveLink: '#',
    highlight: '20% average savings through AI-powered insights',
    status: 'Demo Available',
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
                <div className="relative bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 min-h-[400px] md:min-h-[500px]">
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

                <div className="p-6 md:p-8 flex flex-col overflow-y-auto max-h-[500px] md:max-h-[700px]">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-base font-medium text-primary mb-4">
                      {project.subtitle}
                    </p>
                  )}
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
