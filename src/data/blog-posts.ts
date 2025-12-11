import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: "building-rag-systems-production",
    title: "Building RAG Systems for Production",
    excerpt: "Lessons learned deploying retrieval-augmented generation at enterprise scale...",
    date: "2024-01-15",
    readTime: "8 min",
    tags: ["AI", "RAG", "Engineering"],
    featured: true
  },
  {
    slug: "leading-ai-transformation",
    title: "Leading AI Transformation in Healthcare",
    excerpt: "How to navigate the complexities of AI adoption in regulated industries...",
    date: "2024-01-08",
    readTime: "6 min",
    tags: ["Leadership", "Healthcare", "AI"]
  },
  {
    slug: "engineering-productivity-metrics",
    title: "Engineering Productivity Metrics That Matter",
    excerpt: "Moving beyond story points to measure what actually drives value...",
    date: "2024-01-01",
    readTime: "5 min",
    tags: ["Engineering", "Metrics", "Leadership"]
  }
];
