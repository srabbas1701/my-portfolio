import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export default function Section({ children, id, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-32 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
