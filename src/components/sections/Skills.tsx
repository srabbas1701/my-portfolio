import { Bot, Briefcase, Target, BarChart, Calendar, FileText, Check } from 'lucide-react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
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

function ServiceCard({ icon: Icon, title, description, whatYouGet, techStack, investment, timeline, idealFor }: ServicePackage) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">What You Get:</h4>
        <ul className="space-y-1.5">
          {whatYouGet.map((item, idx) => (
            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Tech Stack:</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{techStack}</p>
      </div>

      <div className="flex gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Investment:</p>
          <p className="text-lg font-bold text-primary">{investment}</p>
        </div>
        <div className="border-l border-gray-200 dark:border-gray-700 pl-4">
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Timeline:</p>
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{timeline}</p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ideal For:</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{idealFor}</p>
      </div>
    </div>
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
    investment: '$20K-$75K',
    timeline: '4-10 weeks',
    idealFor: 'Companies with large document repositories, customer support needs, or knowledge management challenges',
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
    investment: '$15K-$60K',
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
    investment: '$40K-$150K',
    timeline: '8-16 weeks',
    idealFor: 'Enterprises with complex, multi-step processes requiring intelligent automation and coordination',
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

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <Section id="skills">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader eyebrow="What I Offer" title="Services & Expertise" />

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-8 mb-12 border border-blue-200 dark:border-blue-800">
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
            I specialize in <strong>healthcare and financial services</strong>—industries where I understand the regulatory complexity, data sensitivity, and workflow challenges that make AI implementation both critical and complex.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            I also work with organizations in education, operations management, and productivity automation where intelligent systems can transform workflows. If your challenge involves complex data, regulatory requirements, or process automation, let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                animation: isInView ? `fade-in-up 0.6s ease-out ${index * 100}ms forwards` : 'none',
                opacity: isInView ? 1 : 0,
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Why These Pricing Ranges?</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">All projects include:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Discovery phase with detailed scoping</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Production-ready code (not prototypes)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Enterprise-grade security and compliance</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Post-launch support (30 days)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Pricing varies based on:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary font-bold">•</span>
                  <span>Complexity and scope</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary font-bold">•</span>
                  <span>Integration requirements</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary font-bold">•</span>
                  <span>Timeline constraints</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary font-bold">•</span>
                  <span>Ongoing support needs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary rounded p-4 mt-6">
            <p className="text-gray-900 dark:text-gray-100 font-semibold flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              FOUNDING CLIENT OPPORTUNITY: 15% discount on first 3 projects (2 spots remaining)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            icon={Calendar}
            onClick={() => window.open('https://calendly.com/srabbas1701/free-15-min-website-audit', '_blank')}
          >
            Schedule Free Strategy Call
          </Button>
          <Button
            variant="secondary"
            size="lg"
            icon={FileText}
            onClick={() => {
              const portfolioSection = document.getElementById('work');
              portfolioSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Case Studies
          </Button>
        </div>
      </div>
    </Section>
  );
}
