import { Bot, Briefcase, Target, BarChart, CheckCircle2, Sparkles } from 'lucide-react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useInView } from '../../hooks/useInView';

interface ServicePackage {
  icon: any;
  title: string;
  description: string;
  whatYouGet: string[];
  techStack: string;
  investment: string;
  timeline: string;
  idealFor: string;
}

function ServicePackageCard({ icon: Icon, title, description, whatYouGet, techStack, investment, timeline, idealFor }: ServicePackage) {
  return (
    <Card className="p-8 hover:shadow-2xl transition-all hover:scale-[1.02]">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{description}</p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">What You Get:</h4>
        <ul className="space-y-2">
          {whatYouGet.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Tech Stack:</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{techStack}</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Investment:</span>
          <span className="text-lg font-bold text-primary">{investment}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Timeline:</span>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{timeline}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Ideal For:</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{idealFor}</p>
      </div>
    </Card>
  );
}

const services: ServicePackage[] = [
  {
    icon: Bot,
    title: 'LLM Integration & RAG Architecture',
    description: 'Production-ready systems that turn your data into competitive advantage',
    whatYouGet: [
      'Custom RAG pipelines with semantic search and retrieval',
      'LLM-powered chatbots and intelligent assistants',
      'Document processing with OCR and AI summarization',
      'Context-aware recommendation engines',
    ],
    techStack: 'LangChain, LlamaIndex, Pinecone, OpenAI, Anthropic Claude',
    investment: '$15K-$75K',
    timeline: '4-10 weeks',
    idealFor: 'Startup, Companies with document repositories, customer support needs, or knowledge management challenges',
  },
  {
    icon: Briefcase,
    title: 'AI-Powered Enterprise Platforms',
    description: 'Full-stack intelligent applications for healthcare, fintech, and operations',
    whatYouGet: [
      'Patient management and clinical workflow automation',
      'Financial planning tools with predictive analytics',
      'Admin dashboards with AI-generated insights',
      'Custom integrations with existing enterprise systems',
    ],
    techStack: 'React, TypeScript, Python, FastAPI, PostgreSQL, Supabase, AWS',
    investment: '$10K-$60K',
    timeline: '6-12 weeks',
    idealFor: 'Healthcare providers, fintech startups, operations teams needing custom AI-powered solutions',
  },
  {
    icon: Target,
    title: 'Multi-Agent AI Systems',
    description: 'Autonomous agents that handle complex workflows',
    whatYouGet: [
      'Multi-agent orchestration for business process automation',
      'Tool-using agents for data analysis and reporting',
      'Custom agent frameworks tailored to your operations',
      'Intelligent workflow automation with decision-making',
    ],
    techStack: 'LangChain, CrewAI, AutoGen, GPT-4, Claude',
    investment: '$25K-$150K',
    timeline: '8-16 weeks',
    idealFor: 'Multi-step processes requiring intelligent automation and coordination',
  },
  {
    icon: BarChart,
    title: 'Fractional CTO & AI Strategy Advisory',
    description: 'Senior technical leadership for AI initiatives',
    whatYouGet: [
      'AI roadmap development and feasibility assessment',
      'Architecture review and technical due diligence',
      'Team mentorship and best practices implementation',
      'Ongoing strategic guidance and project oversight',
    ],
    techStack: 'Engagement Model: Monthly retainer with defined scope',
    investment: '$8K-$15K/mo',
    timeline: 'Ongoing',
    idealFor: 'Startups and mid-size companies navigating AI adoption without a full-time technical executive',
  },
];

const pricingIncludes = [
  'Discovery phase with detailed scoping',
  'Production-ready code (not prototypes)',
  'Enterprise-grade security and compliance',
  'Comprehensive documentation',
  'Post-launch support (30 days)',
];

const pricingFactors = [
  'Complexity and scope',
  'Integration requirements',
  'Timeline constraints',
  'Ongoing support needs',
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <Section id="skills">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader eyebrow="What I Offer" title="Services & Expertise" />

        {/* Domain Focus Section */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            I specialize in <strong className="text-gray-900 dark:text-white">healthcare and financial services</strong>—industries where I understand the regulatory complexity, data sensitivity, and workflow challenges that make AI implementation both critical and complex.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I also work with organizations in education, operations management, and productivity automation where intelligent systems can transform workflows. If your challenge involves complex data, regulatory requirements, or process automation, let's talk.
          </p>
        </div>

        {/* Service Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                animation: isInView ? `fade-in-up 0.6s ease-out ${index * 100}ms forwards` : 'none',
                opacity: isInView ? 1 : 0,
              }}
            >
              <ServicePackageCard {...service} />
            </div>
          ))}
        </div>

        {/* Why These Pricing Ranges */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Why These Pricing Ranges?</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">All projects include:</h4>
              <ul className="space-y-2">
                {pricingIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Pricing varies based on:</h4>
              <ul className="space-y-2">
                {pricingFactors.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border-2 border-primary/20">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">FOUNDING CLIENT OPPORTUNITY</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-primary">15% discount</strong> on first 3 projects <span className="text-sm text-gray-600 dark:text-gray-400">(2 spots remaining)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="primary" size="lg" className="text-lg px-8" onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Schedule Free Strategy Call
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => {
            const workSection = document.getElementById('work');
            workSection?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Case Studies
          </Button>
        </div>
      </div>
    </Section>
  );
}
