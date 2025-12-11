import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover
    ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
    : '';

  return (
    <div
      className={`bg-white dark:bg-[var(--color-dark-bg-secondary)] rounded-md shadow-sm border border-gray-200 dark:border-gray-700 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
