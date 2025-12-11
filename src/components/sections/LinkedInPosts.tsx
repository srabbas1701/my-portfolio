import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { linkedInPosts } from '../../data/linkedin-posts';
import { useInView } from '../../hooks/useInView';
import { ThumbsUp, MessageCircle } from 'lucide-react';

export default function LinkedInPosts() {
  const { ref, isInView } = useInView();

  return (
    <Section id="linkedin">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader
          eyebrow="Thoughts"
          title="Latest from LinkedIn"
          action={
            <Button variant="ghost" onClick={() => window.open('https://linkedin.com/in/razaabbas', '_blank')}>
              Follow →
            </Button>
          }
        />

        <div className="grid md:grid-cols-3 gap-6">
          {linkedInPosts.map(post => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">RA</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Raza Abbas</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{post.date}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(post.url, '_blank')}
                >
                  Read on LinkedIn →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
