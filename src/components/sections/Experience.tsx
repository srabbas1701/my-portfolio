import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import { experience } from '../../data/experience';
import { useInView } from '../../hooks/useInView';

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <Section id="experience" className="bg-gray-50 dark:bg-[var(--color-dark-bg-secondary)]">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader eyebrow="Journey" title="Experience Timeline" centered />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600 hidden md:block" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-lg">{item.company.charAt(0)}</span>
                      </div>
                      <div className="text-left flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.company}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 text-left">{item.description}</p>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-[var(--color-dark-bg-secondary)] z-10 hidden md:block" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-sm font-medium text-primary block">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
