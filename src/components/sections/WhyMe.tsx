import { Target, Zap, Shield, Briefcase, Calendar } from 'lucide-react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { useInView } from '../../hooks/useInView';

const highlights = [
  {
    icon: Target,
    title: 'Enterprise Caliber, Startup Agility',
    description: 'You get Fortune 500-level architecture and program management—without the enterprise price tag, timeline, or bureaucracy.',
  },
  {
    icon: Zap,
    title: 'No Rookie Mistakes',
    description: '25+ years leading complex programs means I know what works, what doesn\'t, and how to deliver on time without technical debt.',
  },
  {
    icon: Shield,
    title: 'Production-Ready from Day One',
    description: 'I don\'t build prototypes that need rewrites. I build systems that scale, with proper security, testing, and documentation built in.',
  },
  {
    icon: Briefcase,
    title: 'Business Outcomes, Not Just Code',
    description: 'My program management background means I understand ROI, stakeholder alignment, and delivery risk—I speak both technical and business language fluently.',
  },
];

export default function WhyMe() {
  const { ref, isInView } = useInView();

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary uppercase tracking-wider text-sm font-semibold mb-4">
            <span className="w-6 h-px bg-primary" />
            The Difference
            <span className="w-6 h-px bg-primary" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Why Work With Me?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
            My team-leading past means better solo work for you—no rookie mistakes, just enterprise-quality results at startup speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary/30"
              style={{
                animation: isInView ? `fade-in-up 0.6s ease-out ${index * 100}ms forwards` : 'none',
                opacity: isInView ? 1 : 0,
              }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            icon={Calendar}
            onClick={() => window.open('https://calendly.com/srabbas1701/free-15-min-website-audit', '_blank')}
          >
            Schedule Strategy Call
          </Button>
        </div>
      </div>
    </Section>
  );
}
