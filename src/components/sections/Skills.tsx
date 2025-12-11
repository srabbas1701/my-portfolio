import { Sparkles, Layout, Stethoscope, Zap } from 'lucide-react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import { useInView } from '../../hooks/useInView';

interface ServiceProps {
  icon: any;
  title: string;
  description: string;
  color: string;
}

function ServiceCard({ icon: Icon, title, description, color }: ServiceProps) {
  const colorMap: Record<string, string> = {
    primary: 'text-primary bg-primary/10',
    secondary: 'text-secondary bg-secondary/10',
    accent: 'text-accent bg-accent/10',
    success: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20',
  };

  return (
    <Card className="p-6 hover:shadow-xl transition-shadow">
      <div className={`w-14 h-14 rounded-xl ${colorMap[color]} flex items-center justify-center mb-4`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </Card>
  );
}

const services = [
  {
    icon: Sparkles,
    title: 'AI-Enhanced Sites',
    description: 'Smart forms, chatbots, and document processing powered by cutting-edge AI',
    color: 'primary',
  },
  {
    icon: Layout,
    title: 'Responsive Design',
    description: 'Beautiful, mobile-first websites that work perfectly on all devices',
    color: 'secondary',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare/Finance Focus',
    description: 'Specialized experience in medical practice management and financial services',
    color: 'accent',
  },
  {
    icon: Zap,
    title: 'Solo = Quick Turns',
    description: 'Direct communication and rapid delivery—10 days from start to launch',
    color: 'success',
  },
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <Section id="skills">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader eyebrow="What I Offer" title="Skills & Services" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </Section>
  );
}
