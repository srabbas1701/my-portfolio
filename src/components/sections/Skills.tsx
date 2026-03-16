import { Bot, Globe, BarChart, CheckCircle2, Sparkles, Workflow } from 'lucide-react';
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
    icon: Globe,
    title: 'AI App & Website Development',
    description: 'Production-ready web apps and sites with AI baked in from day one — not a template, not a prototype',
    whatYouGet: [
      'Custom web application built from scratch (React + TypeScript, fully responsive)',
      'AI features integrated by design: smart forms, document processing, dashboards, chatbots',
      'Secure database with role-based access control (Supabase + PostgreSQL + RLS)',
      'SEO-optimised front-end deployed on Vercel — fast, zero server overhead',
      'Live proof: EaseHealthAI (healthcare) and LensOnWealth (fintech) — both in production',
      '30-day post-launch support included',
    ],
    techStack: 'React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Vercel, n8n',
    investment: '$8K–$40K',
    timeline: '6–12 weeks',
    idealFor: 'Clinics, fintech startups, SMBs, and founders who want a custom AI-powered web app or professional corporate website — built by someone who has done it in production',
  },
  {
    icon: Bot,
    title: 'LLM Integration & RAG Architecture',
    description: 'Make your data talk — build AI that knows your business, not just the internet',
    whatYouGet: [
      'Custom RAG pipeline: semantic search and retrieval over your PDFs, databases, or document library',
      'AI document summarisation — processed 1,200+ medical reports with 94% OCR accuracy in production',
      'Conversational AI assistant trained on your specific data and use case',
      'Voice-input support for hands-free AI interaction (built for clinical workflows)',
      'Confidence scoring, content filtering, and context-aware responses',
      'Secure production API using Anthropic Claude or OpenAI — a real integration, not a wrapper',
    ],
    techStack: 'Anthropic Claude 3.7 Sonnet, OpenAI GPT-4, Supabase Vector, n8n, OCR pipelines',
    investment: '$6K–$30K',
    timeline: '3–8 weeks',
    idealFor: 'Healthcare providers, legal firms, financial advisors, or any business drowning in documents that need instant AI-powered Q&A, summarisation, or intelligent search',
  },
  {
    icon: Workflow,
    title: 'Multi-Agent AI & Workflow Automation',
    description: 'Automate the repetitive — let AI handle the workflows so your team focuses on what matters',
    whatYouGet: [
      'n8n-powered automation connecting your apps, databases, AI services, and communication tools',
      'AI agents that execute multi-step tasks: data collection, analysis, routing, notifications',
      'Telegram, email, or Slack bots with real business logic and AI decision-making',
      'Real example: automated appointment reminders that cut no-shows by 40% at EaseHealthAI',
      'Document ingestion pipelines — receive, classify, summarise, and route automatically',
      'Audit trails, error handling, and monitoring built in from day one',
    ],
    techStack: 'n8n, Anthropic Claude, OpenAI, Supabase, Telegram Bot API, Webhook integrations',
    investment: '$5K–$25K',
    timeline: '2–6 weeks',
    idealFor: 'Clinics, SMBs, and operations teams spending hours on manual work — data entry, reminders, report routing, approval flows — that should be running automatically',
  },
  {
    icon: BarChart,
    title: 'Fractional CTO & AI Strategy Advisory',
    description: 'Senior technical leadership and AI strategy — without the full-time executive cost',
    whatYouGet: [
      'AI readiness assessment and a prioritised, actionable implementation roadmap',
      'Architecture review of your current stack with specific AI integration recommendations',
      'Build-vs-buy analysis, vendor selection, and technology scoping',
      'Fortnightly advisory sessions with written recommendations you can act on immediately',
      'Regulatory and compliance guidance — DPDP, data privacy, healthcare and fintech rules',
      "I've led programs from $500K to $50M+ — I know exactly where projects break and how to prevent it",
    ],
    techStack: 'Engagement model: Monthly retainer, fortnightly strategy sessions, async availability',
    investment: '$4K–$10K/mo',
    timeline: 'Ongoing (min. 2 months)',
    idealFor: "Founders and heads of product who know they need AI but aren't sure where to start, or growing companies that want a senior technical voice without a full-time executive hire",
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
