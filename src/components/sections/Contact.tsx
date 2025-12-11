import { useState, FormEvent } from 'react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { useInView } from '../../hooks/useInView';
import { Mail, Linkedin, Search, Calendar } from 'lucide-react';

const budgetOptions = [
  { value: '', label: 'Select budget range...' },
  { value: 'under-10k', label: 'Under $10K' },
  { value: '10k-25k', label: '$10K - $25K' },
  { value: '25k-50k', label: '$25K - $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k-plus', label: '$100K+' },
  { value: 'not-sure', label: 'Not Sure / Need Consultation' },
];

const projectTypeOptions = [
  { value: '', label: 'Select project type...' },
  { value: 'llm-rag', label: 'LLM Integration / RAG System' },
  { value: 'ai-platform', label: 'AI-Powered Platform or Application' },
  { value: 'multi-agent', label: 'Multi-Agent AI System' },
  { value: 'fractional-cto', label: 'Fractional CTO / AI Advisory' },
  { value: 'healthcare-ai', label: 'Healthcare AI Solution' },
  { value: 'fintech-ai', label: 'Fintech AI Solution' },
  { value: 'other', label: 'Other / Not Sure' },
];

const timelineOptions = [
  { value: '', label: 'Select timeline...' },
  { value: 'urgent', label: 'Urgent (Need to start within 1 month)' },
  { value: 'normal', label: 'Normal (1-3 months)' },
  { value: 'flexible', label: 'Flexible (3-6 months)' },
  { value: 'exploring', label: 'Just Exploring / No Rush' },
];

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    projectType: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        budget: '',
        projectType: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-secondary/5">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader eyebrow="Get in Touch" title="Let's Discuss Your AI Project" centered />

        <div className="max-w-6xl mx-auto mb-12">
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your operations with AI? Whether you have a specific project in mind or want to explore possibilities, I'm here to help. Choose the option that works best for you:
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Project Inquiry</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">All inquiries receive a response within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <Select
                    label="Project Budget Range"
                    helperText="This helps me understand if we're a good fit"
                    options={budgetOptions}
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  />

                  <Select
                    label="What type of project are you considering?"
                    helperText="Select the service that best matches your needs"
                    options={projectTypeOptions}
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  />

                  <Select
                    label="When do you need this delivered?"
                    helperText="Approximate timeline for project start"
                    options={timelineOptions}
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  />

                  <Textarea
                    label="Message / Project Description"
                    placeholder="Tell me about your project, challenges, or goals..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-400 text-center font-medium">
                        Thank you! Your inquiry has been submitted successfully. I'll respond within 24 hours.
                      </p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-400 text-center font-medium">
                        Failed to send message. Please try again or email me directly.
                      </p>
                    </div>
                  )}
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Not ready to fill out a form?{' '}
                  <a href="mailto:sr_abbas@yahoo.com" className="text-primary hover:underline font-medium">
                    Email me directly
                  </a>{' '}
                  at sr_abbas@yahoo.com or schedule a quick call.
                </p>
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Audit My Site?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Get a free website audit and see how AI can improve your online presence
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  icon={Calendar}
                  className="bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700"
                  onClick={() => window.open('https://calendly.com/srabbas1701/free-15-min-website-audit', '_blank')}
                >
                  Book Free Audit
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gray-50 dark:bg-gray-800/50">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Prefer Email?</h4>
                  </div>
                  <a
                    href="mailto:sr_abbas@yahoo.com"
                    className="text-primary hover:underline font-medium block ml-13"
                  >
                    sr_abbas@yahoo.com
                  </a>
                </div>

                <div className="h-px bg-gray-200 dark:bg-gray-700" />

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Connect on LinkedIn</h4>
                  </div>
                  <a
                    href="https://linkedin.com/in/razaabbas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium ml-13"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
