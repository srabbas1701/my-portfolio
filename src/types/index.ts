export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  metrics: string;
  color: 'primary' | 'secondary' | 'accent' | 'highlight';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export interface LinkedInPost {
  id: string;
  excerpt: string;
  date: string;
  likes: number;
  comments: number;
  url: string;
}

export interface Skill {
  name: string;
  category: 'ai' | 'engineering' | 'leadership';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
