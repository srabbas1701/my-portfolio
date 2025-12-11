import {
  Briefcase,
  Rocket,
  Target,
  Brain,
  Code,
  Award,
  Calendar,
  FileText,
  ExternalLink,
  Shield,
  Zap,
  CheckCircle2,
  Building2,
  GraduationCap
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function About() {
  const domainExpertise = [
    { icon: Building2, title: 'Healthcare', description: 'DPDP compliance, clinical workflows, medical document processing' },
    { icon: Shield, title: 'Financial Services', description: 'Regulatory compliance, data security, financial automation' },
    { icon: Target, title: 'Education & Operations', description: 'Workflow automation, process optimization, productivity tools' },
  ];

  const whatIBuild = [
    'LLM-Powered Platforms: Production-ready applications with intelligent automation',
    'RAG Systems: Enterprise search, document intelligence, knowledge bases',
    'AI Agents: Autonomous workflows, multi-agent orchestration, process automation',
    'Healthcare Tech: Clinical workflows, patient management, medical AI applications',
    'Fintech Solutions: Financial automation, intelligent dashboards, predictive analytics',
  ];

  const experienceHighlights = [
    '15+ years in IT leadership roles (Program Manager, Portfolio Manager, Delivery Manager)',
    'Led technology portfolios worth $50M+ at Fortune 500 companies',
    'Managed cross-functional teams of 300-500+ engineers across multiple geographies',
    'Delivered enterprise-scale systems for healthcare, insurance, and technology sectors',
    'Expertise in agile methodology, stakeholder management, and technical architecture',
  ];

  const recentTransition = [
    '2023-2025: Completed AI Generalist Fellowship at Outskill',
    '2025: Built EaseHealthAI - first solo AI product from concept to production',
    '2025: Launched independent AI consulting practice',
  ];

  const education = [
    'M.Tech (Data Science and Engineering) from BITS Pilani, India',
    'AI Generalist Fellowship - Outskill (2025)',
    'PMP, PgMP, CSQA, CSM, FLMI, PAHM',
  ];

  const technicalSkills = {
    'AI & LLM': [
      'GPT-4', 'Claude 3.7 Sonnet', 'Gemini', 'LangChain', 'LlamaIndex',
      'CrewAI', 'Pinecone', 'Weaviate', 'ChromaDB'
    ],
    'Full-Stack Development': [
      'React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI',
      'Node.js', 'PostgreSQL', 'Supabase'
    ],
    'Automation & Integration': [
      'n8n', 'Make.com', 'Zapier', 'RESTful APIs', 'GraphQL', 'Webhooks'
    ],
    'Enterprise Practices': [
      'System Design', 'Scalability', 'Security', 'DPDP', 'HIPAA',
      'Audit Logging', 'RBAC', 'Agile', 'Scrum'
    ],
  };

  const whyWorkWithMe = [
    {
      icon: Target,
      title: 'Enterprise Caliber, Startup Agility',
      description: 'You get Fortune 500-level architecture and program management—without the enterprise price tag, timeline, or bureaucracy.',
      detailsTitle: 'What this means in practice:',
      details: [
        'I\'ve architected systems handling 100,000+ concurrent users at scale—I know how to design for growth from day one',
        'I\'ve managed $50M+ technology portfolios with full P&L accountability—I understand budget constraints and ROI requirements',
        'I know how to navigate enterprise complexity and compliance requirements—but I execute with startup speed',
        'You get the strategic thinking of a Fortune 500 CTO with the hands-on delivery of a senior engineer',
      ],
    },
    {
      icon: Zap,
      title: 'No Rookie Mistakes',
      description: '15+ years leading complex programs means I know what works, what doesn\'t, and how to deliver on time without technical debt.',
      detailsTitle: 'Why this matters:',
      details: [
        'I\'ve seen every common architectural mistake—and know how to avoid them before they become costly problems',
        'I understand the difference between "working" and "production-ready"—your system won\'t need a rewrite in 6 months',
        'I\'ve delivered dozens of enterprise projects on time and on budget—I know how to estimate accurately and manage scope',
        'I build with proper error handling, logging, monitoring, and documentation from the start—not as an afterthought',
      ],
    },
    {
      icon: Shield,
      title: 'Production-Ready from Day One',
      description: 'I don\'t build prototypes that need rewrites. I build systems that scale, with proper security, testing, and documentation built in from the start.',
      detailsTitle: 'What this means for you:',
      details: [
        'Security best practices are baked in—proper authentication, authorization, data encryption, and audit logging from day one',
        'Systems are designed to scale horizontally—your platform can grow from 100 to 100,000 users without major refactoring',
        'Comprehensive error handling and monitoring—issues are caught and logged before users experience problems',
        'Clean, maintainable code with documentation—any developer you hire in the future can understand and extend the system',
      ],
    },
    {
      icon: Briefcase,
      title: 'Business Outcomes, Not Just Code',
      description: 'My program management background means I understand ROI, stakeholder alignment, and delivery risk—I speak both technical and business language fluently.',
      detailsTitle: 'What this means in practice:',
      details: [
        'I focus on delivering measurable business value—not just implementing features that sound impressive',
        'I communicate progress and risks in plain English—you always know where the project stands without technical jargon',
        'I understand stakeholder management and change management—I can help you navigate organizational challenges',
        'I provide strategic recommendations on build vs. buy, MVP scope, and technical roadmap—not just "tell me what to build"',
      ],
    },
    {
      icon: Rocket,
      title: 'Full-Stack Ownership',
      description: 'I architect, build, and deploy—you don\'t need to coordinate multiple freelancers. One experienced professional delivering cohesive solutions.',
      detailsTitle: 'Why this matters:',
      details: [
        'Single point of accountability—no finger-pointing between frontend, backend, and infrastructure teams',
        'Faster delivery—no coordination overhead, context switching, or integration surprises between different contractors',
        'Consistent quality and architecture—the entire system is designed holistically, not bolted together from disparate parts',
        'Lower total cost—one experienced professional is more cost-effective than managing multiple junior freelancers',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
                From Enterprise Leadership to AI Solutions Architecture
              </p>
            </div>
          </Container>
        </section>

        {/* Main Content */}
        <Container>
          <div className="max-w-4xl mx-auto py-16 space-y-16">

            {/* THE JOURNEY */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Journey</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I spent <span className="text-primary font-semibold">15+ years</span> as a Director of Engineering and Program Manager at companies including <span className="font-semibold">Optum/UnitedHealth Group, HCL Technologies, CSC, and NIIT Technologies</span>—leading cross-functional teams of 300-500 engineers and managing technology portfolios worth $50 million and above.
                </p>
                <p>
                  I delivered enterprise-scale digital transformation programs, architected complex distributed systems, and led delivery organizations across multiple geographies. I was responsible for everything from technical architecture reviews to stakeholder management to program governance.
                </p>
                <p>
                  But after years of managing large teams and sitting in endless meetings, I realized my deepest satisfaction came from <span className="text-primary font-semibold">hands-on architecture and building</span>—not organizational politics and PowerPoint presentations.
                </p>
              </div>
            </section>

            {/* THE SHIFT */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Shift</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  In <span className="text-primary font-semibold">2023</span>, I made a deliberate career pivot. I completed an AI Generalist Fellowship at Outskill, diving deep into prompt engineering, RAG systems, agentic AI, LLMs, and the rapidly evolving AI tooling ecosystem. I learned LangChain, n8n, Make.com, and built my first solo AI product—<span className="font-semibold">EaseHealthAI</span>—from concept to production.
                </p>
                <p>
                  Today, I work independently as an <span className="text-primary font-semibold">AI Solutions Architect</span>, bringing Fortune 500-caliber technical expertise and program management experience to build production-ready AI systems—without the enterprise overhead, bureaucracy, or timeline.
                </p>
              </div>
            </section>

            {/* THE UNIQUE ADVANTAGE */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Unique Advantage</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="font-semibold text-gray-900 dark:text-white">
                  My 15+ years of enterprise experience means I understand what most freelance developers don't:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>How to architect systems that scale from 100 to 100,000 users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>How to manage stakeholder expectations and navigate organizational complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>How to deliver on time, on budget, with quality that doesn't require rewrites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>How to speak both technical language (to engineering teams) and business language (to executives)</span>
                  </li>
                </ul>
                <p className="pt-2">
                  But unlike enterprise consultants, I also <span className="text-primary font-semibold">write the code</span>. I architect the system, build the features, deploy to production, and own the outcomes. You get strategic thinking AND flawless execution—not one or the other.
                </p>
              </div>
            </section>

            {/* DOMAIN EXPERTISE */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Domain Expertise</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">PRIMARY FOCUS:</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I specialize in <span className="text-primary font-semibold">healthcare and financial services</span>, where I understand the regulatory complexity, data sensitivity, and workflow challenges that make AI implementation both critical and complex. My EaseHealthAI platform demonstrates deep healthcare domain knowledge—from DPDP compliance to clinical workflows to medical document processing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">ALSO SERVING:</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I also work with organizations in education, operations management, and productivity automation where intelligent systems can transform workflows. If your challenge involves complex data, regulatory requirements, or process automation, let's talk.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 pt-4">
                  {domainExpertise.map((domain) => (
                    <div
                      key={domain.title}
                      className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <domain.icon className="w-10 h-10 text-primary mb-3" />
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{domain.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{domain.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* WHAT I BUILD */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What I Build</h2>
              </div>
              <ul className="space-y-3">
                {whatIBuild.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* PROFESSIONAL BACKGROUND */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Background</h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">EXPERIENCE HIGHLIGHTS:</h3>
                  <ul className="space-y-3">
                    {experienceHighlights.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">RECENT TRANSITION:</h3>
                  <ul className="space-y-3">
                    {recentTransition.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
                      >
                        <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">EDUCATION & CERTIFICATIONS:</h3>
                  <ul className="space-y-3">
                    {education.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
                      >
                        <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* TECHNICAL EXPERTISE */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Expertise</h2>
              </div>
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{category}:</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY WORK WITH ME */}
            <section className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Work With Me</h2>
              </div>
              <div className="space-y-8">
                {whyWorkWithMe.map((item, index) => (
                  <div
                    key={item.title}
                    className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <item.icon className="w-10 h-10 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="mt-6 ml-14">
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-4">{item.detailsTitle}</h4>
                      <ul className="space-y-3">
                        {item.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* BEYOND WORK */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Beyond Work</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  When I'm not building AI systems, I'm exploring the latest developments in LLMs and AI tooling, contributing to tech communities, and continuously learning about emerging AI capabilities and frameworks.
                </p>
                <p>
                  I believe in building technology that genuinely improves people's lives—not just adding AI because it's trendy. Every system I build solves a real problem with measurable outcomes.
                </p>
              </div>
            </section>

            {/* CURRENTLY */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Currently</h2>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Accepting new client projects (2 founding client spots remaining at special rates)</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Available for fractional CTO / AI advisory / Program and Project Management Roles</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Open to collaboration on innovative healthcare and fintech AI solutions</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={Calendar}
                  onClick={() => window.open('https://calendly.com/srabbas1701/free-15-min-website-audit', '_blank')}
                >
                  Schedule Strategy Call
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  icon={ExternalLink}
                  onClick={() => window.location.href = '/#work'}
                >
                  View My Work
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  icon={FileText}
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download Resume
                </Button>
              </div>
            </section>

          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
