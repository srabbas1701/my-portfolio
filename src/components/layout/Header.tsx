import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import Container from './Container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'About', href: '/about', isRoute: true },
    { label: 'Work', href: '#work', isRoute: false },
    { label: 'Skills', href: '#skills', isRoute: false },
    { label: 'Contact', href: '#contact', isRoute: false },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);

    if (isRoute) {
      return;
    }

    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-200/80 dark:border-gray-700/80'
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Logo />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium text-sm"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.isRoute);
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium text-sm"
                  >
                    {item.label}
                  </a>
                )
              )}
              <Button
                variant="primary"
                size="sm"
                icon={Calendar}
                onClick={() =>
                  window.open(
                    'https://calendly.com/srabbas1701/free-15-min-website-audit',
                    '_blank'
                  )
                }
              >
                Schedule Call
              </Button>
              <ThemeToggle />
            </nav>

            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[var(--color-dark-bg-secondary)] border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <Container>
              <nav className="py-4 flex flex-col gap-1">
                {navItems.map((item) =>
                  item.isRoute ? (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium py-3 px-3 rounded-lg"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.isRoute);
                      }}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium py-3 px-3 rounded-lg"
                    >
                      {item.label}
                    </a>
                  )
                )}
                <div className="pt-2 mt-1 border-t border-gray-100 dark:border-gray-700">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={Calendar}
                    className="w-full justify-center"
                    onClick={() =>
                      window.open(
                        'https://calendly.com/srabbas1701/free-15-min-website-audit',
                        '_blank'
                      )
                    }
                  >
                    Schedule Call
                  </Button>
                </div>
              </nav>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
