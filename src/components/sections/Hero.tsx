import { Calendar, Download } from 'lucide-react';
import Button from '../ui/Button';
import Section from '../layout/Section';

export default function Hero() {
  const handleViewEaseHealthAI = () => {
    const element = document.querySelector('#easehealthai');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
      <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
        <div className="space-y-6">
          <span className="text-primary uppercase tracking-wider text-sm font-medium animate-fade-in">
            AI Solutions Architect | 15+ Years Enterprise Leadership
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Turning Healthcare & Financial Operations into <span className="text-gradient">Intelligent</span>, Automated Systems
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Enterprise-caliber AI solutions at highly competitive rates
          </p>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm Raza—former Director of Engineering with 15+ years leading enterprise technology programs. Now I build production-ready AI platforms—from LLM-powered applications and RAG systems to intelligent agents—for healthcare providers and fintech companies.
            </p>

            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I bring Fortune 500-level technical expertise and program management experience to deliver intelligent automation solutions that actually scale—without the enterprise price tag or timeline.
            </p>

            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              Currently accepting founding clients at special rates.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                variant="primary"
                icon={Calendar}
                onClick={() => window.open('https://calendly.com/srabbas1701/free-15-min-website-audit', '_blank')}
                className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                Schedule Strategy Call
              </Button>
              <Button variant="secondary" onClick={handleViewEaseHealthAI}>
                See My Work
              </Button>
            </div>

            <div className="max-w-xl bg-blue-50 dark:bg-blue-900/20 border-2 border-primary/30 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-wide">
                🎯 FOUNDING CLIENT OPPORTUNITY
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I'm offering 15% founding client rates for my first 3 freelance projects. You get senior enterprise architecture and 15+ years of program management expertise at a reduced investment.
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-100 font-semibold">
                Standard projects: $15K-$50K | Founding rate: $12K-$42K
              </p>
              <p className="text-sm text-primary font-bold mt-2">
                Only 2 founding client spots remaining
              </p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="relative w-full aspect-[16/10] rounded-xl shadow-2xl overflow-hidden border-4 border-primary/20">
            <img
              src="/images/easehealth/01_easehealthAILandingpage_1280.webp"
              alt="EaseHealth AI Platform"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6">
              <p className="text-white text-lg font-semibold">EaseHealth AI in Action</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
