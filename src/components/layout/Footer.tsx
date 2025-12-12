import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import Logo from '../ui/Logo';
import Container from './Container';
import Button from '../ui/Button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Raza Abbas. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/razaabbas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/srabbas1701"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:raza@razaabbas.dev"
              aria-label="Email"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <Button variant="ghost" size="sm" icon={ArrowUp} onClick={scrollToTop}>
            Back to top
          </Button>
        </div>
      </Container>
    </footer>
  );
}
