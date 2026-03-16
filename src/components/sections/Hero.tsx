import { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Section from '../layout/Section';

const stats = [
  { value: '25+', label: 'Years Enterprise Experience' },
  { value: '3', label: 'Live AI Products' },
  { value: '500+', label: 'Users Served' },
  { value: '$150K+', label: 'In Project Value Delivered' },
];

const apps = [
  {
    name: 'EaseHealth AI',
    url: 'easehealthai.com',
    image: '/images/easehealth/01_easehealthAILandingpage_1280.webp',
    label: 'Healthcare Management Platform',
  },
  {
    name: 'LensOnWealth',
    url: 'lensonwealth.com',
    image: '/images/lens-on-wealth/image.png',
    label: 'Investment Portfolio Intelligence',
  },
  {
    name: 'Discovery Bionics',
    url: 'discoverybionics.com',
    image: '/images/discovery-bionics.jpg',
    label: 'Biotech Corporate Platform',
  },
];

export default function Hero() {
  const [activeApp, setActiveApp] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToApp = (index: number) => {
    if (index === activeApp) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveApp(index);
      setIsTransitioning(false);
    }, 250);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveApp((prev) => (prev + 1) % apps.length);
        setIsTransitioning(false);
      }, 250);
    }, 10000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleAppButton = (index: number) => {
    goToApp(index);
    startTimer(); // reset timer on manual switch
  };

  const handleViewWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const current = apps[activeApp];

  return (
    <Section className="relative pt-20 lg:pt-24 pb-10 lg:pb-16 overflow-hidden">
      {/* Background: subtle dot grid */}
      <div className="hero-dot-pattern" />

      {/* Background: radial glow blobs */}
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-[60%_40%] gap-12 items-center">
        {/* Left: text content */}
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 text-primary uppercase tracking-wider text-sm font-semibold animate-fade-in">
            <span className="w-6 h-px bg-primary" />
            AI Solutions Architect · 25+ Years Enterprise Leadership
          </span>

          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Turning Healthcare &amp; Financial Operations into{' '}
            <span className="text-gradient">Intelligent</span>, Automated Systems
          </h1>

          <p
            className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Enterprise-caliber AI solutions at highly competitive rates
          </p>

          <p
            className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            I'm Raza—former Director of Engineering with 25+ years leading enterprise technology
            programs. I build production-ready AI platforms—LLM applications, RAG systems, and
            intelligent agents—for healthcare and fintech companies, with Fortune 500 expertise
            at highly competitive rates.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <Button
              variant="primary"
              icon={Calendar}
              onClick={() =>
                window.open(
                  'https://calendly.com/srabbas1701/free-15-min-website-audit',
                  '_blank'
                )
              }
              className="text-base px-8 py-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              Schedule Strategy Call
            </Button>
            <Button variant="outline" onClick={handleViewWork}>
              See My Work <ArrowRight className="inline w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Proof Stats Bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 pt-2 border-t border-gray-200 dark:border-gray-700 animate-fade-in-up"
            style={{ animationDelay: '500ms' }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary leading-none">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Founding Client callout */}
          <div
            className="flex flex-wrap items-center gap-3 bg-blue-50 dark:bg-blue-900/20 border border-primary/20 rounded-lg px-4 py-3 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <span className="text-base">🎯</span>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-bold text-gray-900 dark:text-gray-100">Founding Client Offer:</span>{' '}
              15% off first 3 projects ·{' '}
              <span className="text-primary font-semibold">2 spots remaining</span> · $12K–$42K
            </p>
          </div>
        </div>

        {/* Right: browser chrome mockup with app carousel — desktop only */}
        <div
          className="relative hidden lg:flex flex-col gap-3 animate-fade-in-up"
          style={{ animationDelay: '700ms' }}
        >
          {/* Glow halo */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl rounded-3xl scale-95 pointer-events-none" />

          {/* Browser mockup */}
          <div className="relative rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            {/* Browser title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-700 rounded-md px-3 py-1 ml-2 border border-gray-200 dark:border-gray-600">
                <p
                  className={`text-xs text-gray-400 dark:text-gray-400 truncate transition-opacity duration-250 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  🔒 {current.url}
                </p>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <img
                key={activeApp}
                src={current.image}
                alt={`${current.name} — live production app`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center pb-3 pointer-events-none">
                <p
                  className={`text-white text-xs font-semibold bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {current.name} — {current.label}
                </p>
              </div>
            </div>
          </div>

          {/* App selector buttons */}
          <div className="relative flex gap-2 justify-center">
            {apps.map((app, index) => (
              <button
                key={app.name}
                onClick={() => handleAppButton(index)}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                  activeApp === index
                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {app.name}
              </button>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-1.5">
            {apps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleAppButton(index)}
                aria-label={`Show ${apps[index].name}`}
                className={`rounded-full transition-all duration-300 ${
                  activeApp === index
                    ? 'w-6 h-1.5 bg-primary'
                    : 'w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
