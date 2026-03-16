import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';

const LENSONWEALTH_IMAGES = [
  '/images/lens-on-wealth/image.png',
  '/images/lens-on-wealth/image1.png',
  '/images/lens-on-wealth/image2.png',
  '/images/lens-on-wealth/image3.png',
  '/images/lens-on-wealth/image4.png',
  '/images/lens-on-wealth/image5.png',
];

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lensSlideIndex, setLensSlideIndex] = useState(0);
  const lensScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lensScrollRef.current;
    if (el) {
      const slideWidth = el.offsetWidth;
      el.scrollTo({ left: slideWidth * lensSlideIndex, behavior: 'smooth' });
    }
  }, [lensSlideIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLensSlideIndex((prev) => (prev >= LENSONWEALTH_IMAGES.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter));

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20">
        <Container>
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Project Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              A showcase of key projects spanning AI/ML, healthcare transformation,
              enterprise delivery, and digital innovation.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Technology:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Projects
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedFilter(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFilter === tag
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${project.color}/10 flex items-center justify-center mb-4`}>
                      <div className={`w-6 h-6 rounded-full bg-${project.color}`}></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.company}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-semibold text-primary">
                        {project.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No projects found for the selected filter.
              </p>
            </div>
          )}

          <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-[45%_55%] gap-0">
              <div className="flex flex-col bg-gray-100 dark:bg-gray-900 order-2 md:order-1">
                <div className="relative flex flex-col p-4 min-h-[300px] md:min-h-[450px] flex-1 overflow-visible">
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-primary text-white px-3 py-1">LIVE</Badge>
                  </div>
                  <div className="relative w-full flex-1 min-h-[280px]">
                    <div
                      ref={lensScrollRef}
                      className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full h-full"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {LENSONWEALTH_IMAGES.map((src, idx) => (
                        <div key={idx} className="flex-shrink-0 w-full snap-center flex items-center justify-center p-2">
                          <img
                            src={src}
                            alt={`LensOnWealth screenshot ${idx + 1}`}
                            className="max-w-full max-h-[340px] object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/lens-on-wealth/image.png';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setLensSlideIndex((i) => (i > 0 ? i - 1 : LENSONWEALTH_IMAGES.length - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-primary/50 hover:bg-primary/70 text-white shadow-md border-2 border-white/50 dark:border-gray-700"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setLensSlideIndex((i) => (i < LENSONWEALTH_IMAGES.length - 1 ? i + 1 : 0))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-primary/50 hover:bg-primary/70 text-white shadow-md border-2 border-white/50 dark:border-gray-700"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {lensSlideIndex + 1} of {LENSONWEALTH_IMAGES.length}
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    icon={ExternalLink}
                    onClick={() => window.open('https://www.lensonwealth.com/', '_blank')}
                  >
                    View Live Website
                  </Button>
                  <Button
                    variant="secondary"
                    icon={ExternalLink}
                    onClick={() => window.open('https://www.lensonwealth.com/demo', '_blank')}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
              <div className="p-8 lg:p-12 max-h-[600px] order-1 md:order-2 flex flex-col">
                <div className="flex-shrink-0">
                  <span className="text-primary font-medium uppercase tracking-wider text-sm">Featured Project</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-2">
                    LensOnWealth
                  </h2>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                    Investment Portfolio Intelligence Platform
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto pr-2">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Built for Indian retail investors struggling with fragmented broker statements, manual portfolio tracking, and lack of consolidated insights.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  LensOnWealth transforms scattered financial data across multiple brokers and asset classes into a <strong>single intelligent portfolio dashboard</strong>, enabling investors to track performance, understand allocation, and make informed investment decisions.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  The platform combines <strong>automated broker statement ingestion, portfolio analytics, and AI-powered insights</strong> to deliver institutional-grade portfolio intelligence to retail investors.
                </p>

                <div className="mb-6 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Unified wealth tracking with AI-powered portfolio intelligence
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">KEY OUTCOMES:</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Unified portfolio view across multiple brokers and asset classes</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Automated broker statement ingestion (PDF / Excel) with zero manual entry</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Accurate cost-basis, realized and unrealized P&L calculations</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Real-time portfolio allocation and performance analytics</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Intelligent classification of stocks, ETFs, and mutual funds from mixed broker statements</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Historical portfolio performance tracking and net-worth trends</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Scalable architecture supporting thousands of securities per user</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Secure privacy-first architecture with user-isolated financial data</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">TECHNICAL IMPLEMENTATION:</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Architected as a modern full-stack platform with <strong>React + TypeScript frontend and Supabase-based backend infrastructure</strong>.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">Key technical components include:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Automated broker statement parsing (PDF & Excel ingestion)</li>
                    <li>Financial instrument classification and normalization engine</li>
                    <li>Portfolio analytics engine for performance and allocation insights</li>
                    <li>Scalable database design optimized for large transaction histories</li>
                    <li>Secure multi-user architecture with strict financial data isolation</li>
                  </ul>
                </div>

                <div className="mb-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r">
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold">KEY CHALLENGE:</span> Indian broker statements vary significantly in format and structure. The platform implements <strong>custom ingestion pipelines and parsing logic</strong> to reliably extract holdings, transactions, and pricing data from heterogeneous broker documents.
                  </p>
                </div>

                <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">PROJECT SCOPE:</h4>
                  <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                    <p><span className="font-medium">Duration:</span> 3–4 months (MVP to production)</p>
                    <p><span className="font-medium">Role:</span> Product architect and full-stack developer</p>
                    <p><span className="font-medium">Status:</span> Active MVP with live user testing</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">Financial Analytics</Badge>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-[45%_55%] gap-0">
              <div className="flex flex-col bg-gray-100 dark:bg-gray-900 order-2 md:order-1">
                <div className="flex items-center justify-center p-4 min-h-[300px] md:min-h-[450px] flex-1">
                  <img
                    src="/images/discovery-bionics.jpg"
                    alt="Discovery Bionics Website"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    variant="primary"
                    icon={ExternalLink}
                    onClick={() => window.open('https://discoverybionics.com/', '_blank')}
                  >
                    Visit Live Website
                  </Button>
                </div>
              </div>
              <div className="p-8 lg:p-12 max-h-[600px] order-1 md:order-2 flex flex-col">
                <div className="flex-shrink-0">
                  <span className="text-primary font-medium uppercase tracking-wider text-sm">Featured Project</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-2">
                    Discovery Bionics
                  </h2>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                    Corporate Platform for Premier Biotech Distribution Network
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto pr-2">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Built scalable digital presence for India's leading biotech distribution company serving 200+ research institutions and premier laboratories. The challenge: present 200+ complex product SKUs from 8+ global brands in a way that helps scientists and procurement officers quickly find exactly what they need—from reagents to lab equipment.
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">KEY OUTCOMES:</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Increased product inquiry conversion by 45% through intuitive catalog structure</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Reduced average time-to-quote from 3 days to same-day through digital workflows</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Achieved 92 PageSpeed score with image-heavy product catalog (300+ images)</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Enabled 24/7 product discovery for clients across 15+ Indian states</span>
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">🎯</span>
                      <span>Reduced sales team inquiry-handling time by 30% through self-service product information</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">TECHNICAL IMPLEMENTATION:</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Architected fast, SEO-optimized WordPress solution with custom product taxonomy for complex biotech catalog. Implemented advanced filtering (brand, category, application, specification) enabling researchers to find specialized products quickly. Built responsive design that works on tablets in lab environments.
                  </p>
                </div>

                <div className="mb-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r">
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold">Key Challenge:</span> Balancing rich product information (datasheets, protocols, certifications) with page speed for India's variable bandwidth—solved through lazy loading, intelligent caching, and image optimization strategies.
                  </p>
                </div>

                <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">PROJECT SCOPE:</h4>
                  <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                    <p><span className="font-medium">Duration:</span> 6 weeks</p>
                    <p><span className="font-medium">Team:</span> Solo development + client product team collaboration</p>
                    <p><span className="font-medium">Status:</span> Live production serving 200+ institutions</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">WordPress</Badge>
                    <Badge variant="outline">SEO</Badge>
                    <Badge variant="outline">Custom Taxonomy</Badge>
                    <Badge variant="outline">Performance Optimization</Badge>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
