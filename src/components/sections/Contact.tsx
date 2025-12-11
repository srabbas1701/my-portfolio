import { useState, FormEvent } from 'react';
import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { useInView } from '../../hooks/useInView';
import { Mail, Linkedin, MapPin, Search, Calendar } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
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
        <SectionHeader eyebrow="Get in Touch" title="Let's Connect" centered />

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Audit My Site?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Get a free website audit and see how AI can improve your online presence
              </p>
              <Button
                variant="primary"
                size="lg"
                icon={Calendar}
                onClick={() => window.open('https://calendly.com/srabbas1701/free-15-min-website-audit', '_blank')}
              >
                Book Free Audit
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
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
                <Textarea
                  label="Message"
                  placeholder="How can I help you?"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && (
                  <p className="text-sm text-green-600 dark:text-green-400 text-center">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-600 dark:text-red-400 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </Card>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Prefer email?</h3>
              </div>
              <a
                href="mailto:sr_abbas@yahoo.com"
                className="text-primary hover:underline text-lg block ml-13"
              >
                sr_abbas@yahoo.com
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Connect on LinkedIn</h3>
              </div>
              <a
                href="https://linkedin.com/in/razaabbas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-lg block ml-13"
              >
                linkedin.com/in/razaabbas
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Based in</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-13">Available for global opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
