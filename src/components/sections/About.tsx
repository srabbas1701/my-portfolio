import { Users, Briefcase, Award, Target, Globe } from 'lucide-react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { useInView } from '../../hooks/useInView';

function HighlightCard({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) {
  return (
    <Card className="p-6 text-center flex flex-col items-center justify-center min-h-[140px]">
      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
      <div className="text-xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">{title}</div>
      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{subtitle}</div>
    </Card>
  );
}

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <Section id="about" className="bg-gray-50 dark:bg-[var(--color-dark-bg-secondary)]">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader
          eyebrow="About Me"
          title="Building the Future of AI-Powered Engineering"
          centered
        />

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto text-center mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              With over 25 years of experience spanning software engineering, delivery leadership, and enterprise operations,
              I've led engineering organizations of 300-500 people and managed delivery portfolios exceeding $50M.
              My focus is on building AI-first products that solve real-world problems at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <HighlightCard icon={Users} title="300-500" subtitle="Engineers Led" />
            <HighlightCard icon={Briefcase} title="$50M+" subtitle="Portfolio Managed" />
            <HighlightCard icon={Award} title="25+" subtitle="Years Experience" />
            <HighlightCard icon={Target} title="VP/Director" subtitle="Leadership Level" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12 max-w-sm mx-auto">
            <HighlightCard icon={Globe} title="Global Delivery" subtitle="USA, UK, APAC & ANZ" />
          </div>

          <div className="text-left space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Core Expertise</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Agentic AI, RAG systems, LLM applications in production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Website Development, AI Agents and Agentic AI Workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enterprise engineering leadership at scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Healthcare & insurance technology systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Digital transformation & modernization</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>AI Generalist</Badge>
                <Badge>PMP</Badge>
                <Badge>CSM</Badge>
                <Badge>FLMI</Badge>
                <Badge>PAHM</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
