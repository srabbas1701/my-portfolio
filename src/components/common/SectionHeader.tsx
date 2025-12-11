import { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  centered?: boolean;
  action?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, centered = false, action }: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''} ${action ? 'flex items-center justify-between' : ''}`}>
      <div>
        {eyebrow && (
          <span className="text-primary uppercase tracking-wider text-sm font-medium block mb-3">
            {eyebrow}
          </span>
        )}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
