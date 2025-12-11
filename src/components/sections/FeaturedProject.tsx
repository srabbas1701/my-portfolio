import { Globe, Brain, Shield, Accessibility, Database, ExternalLink, Github, ChevronLeft, ChevronRight, Calendar, PlayCircle, FileText, Target } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { useInView } from '../../hooks/useInView';
import { supabase } from '../../lib/supabase';

interface ProjectSlide {
  id: string;
  slide_number: number;
  title: string;
  description: string;
  image_url: string;
}

function FeatureItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <p className="text-gray-700 dark:text-gray-300 pt-2">{text}</p>
    </div>
  );
}

export default function FeaturedProject() {
  const { ref, isInView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<ProjectSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

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
      const { data, error } = await supabase
        .from('project_slides')
        .select('*')
        .eq('project_id', 'easehealthai')
        .order('slide_number', { ascending: true });

      if (error) throw error;
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

  const goToSlide = (index: number) => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
      setCurrentSlide(index);
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
        <div className="grid lg:grid-cols-[58%_42%] gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="relative">
                <div
                  ref={scrollRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {loading ? (
                    <div className="flex-shrink-0 w-full snap-center">
                      <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-gray-600 dark:text-gray-400">Loading slides...</div>
                      </div>
                    </div>
                  ) : slides.length > 0 ? (
                    slides.map((slide) => (
                      <div key={slide.id} className="flex-shrink-0 w-full snap-center">
                        <div className="aspect-[16/10] relative bg-gray-100 dark:bg-gray-900">
                          <img
                            src={slide.image_url}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <div className="text-white">
                              <div className="text-lg font-semibold mb-1">
                                {slide.title}
                              </div>
                              <div className="text-sm text-gray-200">
                                {slide.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex-shrink-0 w-full snap-center">
                      <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-gray-600 dark:text-gray-400">No slides available</div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => scroll('left')}
                  disabled={currentSlide === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                </button>

                <button
                  onClick={() => scroll('right')}
                  disabled={currentSlide === slides.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? 'bg-primary w-8'
                          : 'bg-gray-400 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Badge className="absolute -top-4 -right-4 animate-bounce bg-primary text-white px-4 py-2">
              MVP Live
            </Badge>
          </div>

          <div className="order-1 lg:order-2 overflow-y-auto max-h-[800px] pr-4">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Featured Project</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900 dark:text-gray-100">EaseHealthAI</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 font-medium">
              Enterprise Healthcare Management Platform with AI Clinical Intelligence
            </p>

            <p className="text-base text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
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
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">TECH STACK:</h4>
              <div className="flex flex-wrap gap-2">
                {['React 18.3', 'TypeScript 5.5', 'Supabase', 'PostgreSQL', 'Claude 3.7 Sonnet', 'n8n Workflows', 'Telegram API', 'PDF OCR', 'Tailwind CSS', 'Vite', 'Row-Level Security', 'RBAC'].map(tech => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
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

            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="primary" icon={ExternalLink}>
                View Live Demo
              </Button>
              <Button variant="secondary" icon={PlayCircle}>
                Watch Video
              </Button>
              <Button variant="ghost" icon={Github} onClick={() => window.open('https://github.com/srabbas1701/EaseHealth-AI', '_blank')}>
                View Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
