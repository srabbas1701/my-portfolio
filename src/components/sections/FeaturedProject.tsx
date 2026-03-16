import { ExternalLink, PlayCircle, Target, Code2, Server, Sparkles, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { useInView } from '../../hooks/useInView';

interface ProjectSlide {
  id: string;
  slide_number: number;
  title: string;
  description: string;
  image_url: string;
}

export default function FeaturedProject() {
  const { ref, isInView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<ProjectSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide = (prev + 1) % slides.length;
          if (scrollRef.current) {
            const slideWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({ left: slideWidth * nextSlide, behavior: 'smooth' });
          }
          return nextSlide;
        });
      }, 10000);

      return () => {
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
      };
    }
  }, [slides.length]);

  const fetchSlides = async () => {
    try {
      const response = await fetch('/project_slides.json');
      const data = await response.json();
      setSlides(data || []);
    } catch (error) {
      console.error('Error fetching slides:', error);
    } finally {
      setLoading(false);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      const scrollAmount = direction === 'left' ? -slideWidth : slideWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      const newSlide = direction === 'left'
        ? Math.max(0, currentSlide - 1)
        : Math.min(slides.length - 1, currentSlide + 1);
      setCurrentSlide(newSlide);
    }

    if (slides.length > 0) {
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide = (prev + 1) % slides.length;
          if (scrollRef.current) {
            const slideWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({ left: slideWidth * nextSlide, behavior: 'smooth' });
          }
          return nextSlide;
        });
      }, 10000);
    }
  };

  return (
    <Section id="easehealthai" className="bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col order-2 lg:order-1 lg:overflow-y-auto lg:max-h-[800px] lg:pr-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="relative">
                <div
                  ref={scrollRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {loading ? (
                    <div className="flex-shrink-0 w-full snap-center">
                      <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-gray-600 dark:text-gray-400">Loading slides...</div>
                      </div>
                    </div>
                  ) : slides.length > 0 ? (
                    slides.map((slide) => (
                      <div key={slide.id} className="flex-shrink-0 w-full snap-center">
                        <div className="aspect-[16/9] relative bg-gray-100 dark:bg-gray-900">
                          <img
                            src={slide.image_url}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex-shrink-0 w-full snap-center">
                      <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-gray-600 dark:text-gray-400">No slides available</div>
                      </div>
                    </div>
                  )}
                </div>

                {slides.length > 0 && (
                  <>
                    <button
                      type="button"
                      onClick={() => scroll('left')}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-primary/50 hover:bg-primary/70 text-white shadow-md border-2 border-white/50 dark:border-gray-700"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                    <button
                      type="button"
                      onClick={() => scroll('right')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-primary/50 hover:bg-primary/70 text-white shadow-md border-2 border-white/50 dark:border-gray-700"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </>
                )}
              </div>

              {slides.length > 0 && (
                <div className="flex items-center justify-center gap-2 py-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {currentSlide + 1} of {slides.length}
                  </span>
                </div>
              )}

              {slides.length > 0 && slides[currentSlide] && (
                <div className="mt-6 px-4 pb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {slides[currentSlide].title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {slides[currentSlide].description}
                  </p>
                </div>
              )}

              <Badge className="absolute -top-4 -right-4 animate-bounce bg-primary text-white px-4 py-2">
                LIVE
              </Badge>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                icon={ExternalLink}
                className="flex-1 min-w-[200px]"
                onClick={() => window.open('https://www.easehealthai.com', '_blank')}
              >
                View Live Demo
              </Button>
              <Button variant="secondary" icon={PlayCircle} className="flex-1 min-w-[200px]">
                Watch Video
              </Button>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">Tech Stack:</h4>

              <div className="space-y-3">
                {/* Frontend */}
                <div className="group relative overflow-hidden rounded-lg border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent p-3 transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <p className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">Frontend</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'].map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 rounded-md border border-blue-200 dark:border-blue-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend & Database */}
                <div className="group relative overflow-hidden rounded-lg border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-950/30 dark:to-transparent p-3 transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Backend & Database</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Supabase', 'PostgreSQL', 'Row-Level Security'].map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-200 rounded-md border border-emerald-200 dark:border-emerald-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI & Automation */}
                <div className="group relative overflow-hidden rounded-lg border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/30 dark:to-transparent p-3 transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <p className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wide">AI & Automation</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Claude 3.7 Sonnet', 'n8n', 'OCR', 'RAG'].map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-200 rounded-md border border-purple-200 dark:border-purple-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="group relative overflow-hidden rounded-lg border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-950/30 dark:to-transparent p-3 transition-all hover:shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <p className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase tracking-wide">Infrastructure</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Real-time Sync', 'RBAC', 'Audit Logging', 'DPDP Compliant'].map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-medium bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-200 rounded-md border border-orange-200 dark:border-orange-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col lg:max-h-[800px]">
            <div className="flex-shrink-0">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Featured Project</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900 dark:text-gray-100">EaseHealthAI</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 font-medium">
                Enterprise Healthcare Management Platform with AI Clinical Intelligence
              </p>
            </div>

            <div className="flex-1 lg:overflow-y-auto mt-6 lg:pr-2">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Built for Indian clinics struggling with manual OPD workflows, paper-based records, and time-consuming medical documentation. EaseHealthAI transforms chaotic clinic operations into streamlined digital workflows through intelligent automation, AI-powered clinical assistance, and enterprise-grade security compliance.
            </p>

            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">THE CHALLENGE:</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Small-to-medium healthcare providers in India face critical operational bottlenecks: 15-minute patient registration times, manual report analysis consuming hours of physician time, no digital record systems, and compliance gaps with India's DPDP regulations. These inefficiencies cost clinics ₹3-5 lakh monthly in lost productivity and limit patient capacity.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                KEY OUTCOMES:
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700 dark:text-gray-300">🎯 Reduced patient registration time by 65% (15 minutes → 5 minutes)</p>
                <p className="text-gray-700 dark:text-gray-300">🎯 Slashed medical report analysis from 15 minutes to 10 seconds (90% reduction)</p>
                <p className="text-gray-700 dark:text-gray-300">🎯 Cut administrative overhead by 60% through intelligent automation</p>
                <p className="text-gray-700 dark:text-gray-300">🎯 Processed 1,200+ medical documents with 94% OCR accuracy</p>
                <p className="text-gray-700 dark:text-gray-300">🎯 Reduced appointment no-shows by 40% via automated Telegram reminders</p>
                <p className="text-gray-700 dark:text-gray-300">🎯 Achieved 100% DPDP compliance-ready architecture with Row-Level Security</p>
                <p className="text-gray-700 dark:text-gray-300">🎯 Enabled bilingual operations (English/Hindi) for diverse patient populations</p>
                <p className="text-gray-700 dark:text-gray-300">🎯 Supports 500+ concurrent users with sub-2-second response times</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-4">PLATFORM ARCHITECTURE:</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Built as three integrated modules that work seamlessly together:</p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">🏥 PATIENT ENGAGEMENT PORTAL</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Smart appointment booking with real-time doctor availability</li>
                    <li>Digital medical record management (upload reports, prescriptions, lab results)</li>
                    <li>Digital queue token system with live status tracking</li>
                    <li>Self-service profile management with privacy controls</li>
                  </ul>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Impact: 65% faster registrations, 40% fewer no-shows, eliminated paper queues</p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">👨‍⚕️ CLINICAL INTELLIGENCE SUITE (AI-Powered)</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Real-time patient schedule management with complete medical history</li>
                    <li>AI Clinical Assistant powered by Claude 3.7 Sonnet:
                      <ul className="ml-6 mt-1 space-y-1 list-circle">
                        <li>Instant medical report summarization (30-page reports in 10 seconds)</li>
                        <li>Conversational AI chat with natural language Q&A about patient documents</li>
                        <li>Voice input support for hands-free clinical interaction</li>
                        <li>Smart content filtering (auto-detects disclaimers, irrelevant sections)</li>
                        <li>Confidence scoring on AI-generated insights</li>
                      </ul>
                    </li>
                    <li>Digital prescription generation with print/download</li>
                    <li>Complete patient timeline visualization</li>
                  </ul>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Impact: 90% reduction in report analysis time, enhanced clinical decision-making</p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">🔐 ADMINISTRATIVE OPERATIONS CENTER</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Multi-role RBAC (Patient, Doctor, Admin) with granular permissions</li>
                    <li>Row-Level Security (RLS) enforced at database level</li>
                    <li>Comprehensive audit logging for all security events</li>
                    <li>OTP email verification and session management</li>
                    <li>DPDP compliance-ready architecture</li>
                    <li>Front-office workflow orchestration</li>
                  </ul>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Impact: Enterprise-grade security, regulatory compliance, 60% less admin overhead</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-3">TECHNICAL IMPLEMENTATION:</h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Built enterprise-scale architecture on React 18 + TypeScript with Supabase backend providing PostgreSQL with Row-Level Security. Implemented complete RBAC system with role-based route protection and database-enforced access control.
                </p>
                <p>
                  Architected AI pipeline using Claude 3.7 Sonnet for clinical intelligence—processing medical documents through OCR, extracting structured data, and generating clinically-relevant summaries with conversational query capabilities. Built n8n automation workflows for appointment reminders, document processing orchestration, and notification systems.
                </p>
                <p className="font-medium">Key technical challenges solved:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>OCR accuracy for low-quality scanned Indian medical documents (achieved 94%)</li>
                  <li>Real-time synchronization across patient/doctor interfaces with &lt;2sec latency</li>
                  <li>DPDP-compliant data architecture with granular access controls</li>
                  <li>Voice-to-text integration for hands-free clinical workflows</li>
                  <li>Modular architecture allowing independent module deployment or complete platform</li>
                </ul>
                <p>
                  <span className="font-medium">Security implementation:</span> Database-level Row-Level Security, application-level RBAC, complete audit logging, encrypted storage (Supabase), OTP verification, protected API routes with role verification.
                </p>
                <p className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r">
                  <span className="font-medium">Solved complex UX challenge:</span> Busy clinicians can't type—implemented voice input for AI interactions. Doctors speak questions, AI transcribes and responds, dramatically improving adoption in high-pressure clinical environments.
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">PROJECT SCOPE:</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><span className="font-medium">Duration:</span> 10 weeks (2 weeks discovery + 8 weeks development)</li>
                  <li><span className="font-medium">Team:</span> Solo full-stack architect and developer with healthcare SME consultation</li>
                  <li><span className="font-medium">Methodology:</span> Agile sprints with weekly stakeholder reviews</li>
                  <li><span className="font-medium">Current Status:</span> Live MVP deployed with 3 pilot clinics, actively serving 450+ patients/month</li>
                  <li><span className="font-medium">Scale:</span> Processing 10,000+ documents monthly, 500+ concurrent user capacity</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">COMPLIANCE & SECURITY:</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                  <li>DPDP (Digital Personal Data Protection) compliance-ready</li>
                  <li>Row-Level Security on all database tables</li>
                  <li>Complete audit trail (who accessed what data, when)</li>
                  <li>Encrypted data at rest and in transit</li>
                  <li>WCAG 2.1 AA accessibility compliant</li>
                  <li>Mobile-first responsive design</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">DEPLOYMENT & INFRASTRUCTURE:</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                <li>Supabase cloud hosting (99.9% uptime SLA)</li>
                <li>Real-time database subscriptions for live updates</li>
                <li>n8n automation server (cloud hosted)</li>
                <li>CDN-optimized static assets</li>
                <li>Automated backup and disaster recovery</li>
              </ul>
            </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
