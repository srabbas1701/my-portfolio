/*
  # Portfolio Website Database Schema

  ## Overview
  This migration creates the necessary tables for the Raza Abbas portfolio website,
  including contact form submissions, blog posts, and LinkedIn posts.

  ## New Tables

  ### 1. contact_submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Contact name
  - `email` (text) - Contact email
  - `message` (text) - Contact message
  - `created_at` (timestamptz) - Submission timestamp
  
  ### 2. blog_posts
  - `id` (uuid, primary key) - Unique identifier
  - `slug` (text, unique) - URL-friendly post identifier
  - `title` (text) - Post title
  - `excerpt` (text) - Short description
  - `content` (text) - Full post content
  - `date` (date) - Publication date
  - `read_time` (text) - Estimated reading time
  - `tags` (text[]) - Post tags/categories
  - `featured` (boolean) - Whether post is featured
  - `published` (boolean) - Publication status
  - `created_at` (timestamptz) - Creation timestamp
  
  ### 3. linkedin_posts
  - `id` (uuid, primary key) - Unique identifier
  - `excerpt` (text) - Post excerpt
  - `date` (text) - Post date display text
  - `likes` (integer) - Number of likes
  - `comments` (integer) - Number of comments
  - `url` (text) - LinkedIn post URL
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for published content
  - Contact submissions are write-only for public
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  content text,
  date date NOT NULL DEFAULT CURRENT_DATE,
  read_time text NOT NULL DEFAULT '5 min',
  tags text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published blog posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (published = true);

-- Create linkedin_posts table
CREATE TABLE IF NOT EXISTS linkedin_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  excerpt text NOT NULL,
  date text NOT NULL,
  likes integer DEFAULT 0,
  comments integer DEFAULT 0,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE linkedin_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to LinkedIn posts
CREATE POLICY "Anyone can view LinkedIn posts"
  ON linkedin_posts
  FOR SELECT
  TO anon
  USING (true);

-- Insert sample blog posts
INSERT INTO blog_posts (slug, title, excerpt, date, read_time, tags, featured, published)
VALUES
  ('building-rag-systems-production', 'Building RAG Systems for Production', 'Lessons learned deploying retrieval-augmented generation at enterprise scale...', '2024-01-15', '8 min', ARRAY['AI', 'RAG', 'Engineering'], true, true),
  ('leading-ai-transformation', 'Leading AI Transformation in Healthcare', 'How to navigate the complexities of AI adoption in regulated industries...', '2024-01-08', '6 min', ARRAY['Leadership', 'Healthcare', 'AI'], false, true),
  ('engineering-productivity-metrics', 'Engineering Productivity Metrics That Matter', 'Moving beyond story points to measure what actually drives value...', '2024-01-01', '5 min', ARRAY['Engineering', 'Metrics', 'Leadership'], false, true)
ON CONFLICT (slug) DO NOTHING;

-- Insert sample LinkedIn posts
INSERT INTO linkedin_posts (excerpt, date, likes, comments, url)
VALUES
  ('Excited to share insights on how we''re leveraging agentic AI to transform healthcare delivery. The key is not just automation, but intelligent orchestration of human expertise with AI capabilities.', '2 days ago', 245, 18, 'https://linkedin.com/in/razaabbas'),
  ('After leading 300+ engineers, I''ve learned that the best delivery metrics aren''t about velocity—they''re about predictability, quality, and sustainable pace. Here''s what we measure that actually matters...', '1 week ago', 312, 24, 'https://linkedin.com/in/razaabbas'),
  ('RAG systems in production require more than just vector databases. Sharing our learnings on chunking strategies, retrieval optimization, and handling context limits at scale.', '2 weeks ago', 189, 15, 'https://linkedin.com/in/razaabbas')
ON CONFLICT DO NOTHING;
