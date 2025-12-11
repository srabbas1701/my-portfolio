import Section from '../layout/Section';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { blogPosts } from '../../data/blog-posts';
import { useInView } from '../../hooks/useInView';
import { Calendar, Clock } from 'lucide-react';

export default function Blog() {
  const { ref, isInView } = useInView();

  return (
    <Section id="blog" className="bg-gray-50 dark:bg-[var(--color-dark-bg-secondary)]">
      <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeader eyebrow="Insights" title="Latest Blog Posts" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <Badge key={tag} size="sm">{tag}</Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  Read More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
