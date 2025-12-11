/*
  # Create Project Slides Table

  1. New Tables
    - `project_slides`
      - `id` (uuid, primary key)
      - `project_id` (text) - identifier for the project (e.g., 'easehealthai')
      - `slide_number` (integer) - order of the slide in the carousel
      - `title` (text) - title of the slide
      - `description` (text) - 1-2 line description
      - `image_url` (text) - URL to the slide image
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `project_slides` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated admin users to insert/update/delete

  3. Indexes
    - Index on project_id for fast lookups
    - Composite index on (project_id, slide_number) for ordering
*/

CREATE TABLE IF NOT EXISTS project_slides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id text NOT NULL,
  slide_number integer NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(project_id, slide_number)
);

CREATE INDEX IF NOT EXISTS idx_project_slides_project_id ON project_slides(project_id);
CREATE INDEX IF NOT EXISTS idx_project_slides_project_slide ON project_slides(project_id, slide_number);

ALTER TABLE project_slides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view project slides"
  ON project_slides
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert project slides"
  ON project_slides
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update project slides"
  ON project_slides
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete project slides"
  ON project_slides
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data for EaseHealthAI project
INSERT INTO project_slides (project_id, slide_number, title, description, image_url) VALUES
  ('easehealthai', 1, 'Dashboard Overview', 'Main dashboard with patient statistics and quick actions', 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 2, 'Patient Management', 'Comprehensive patient records with search and filter capabilities', 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 3, 'Medical Records', 'Digital health records with AI-powered document scanning', 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 4, 'Appointment Scheduling', 'Intelligent appointment booking with calendar integration', 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 5, 'Prescription Module', 'Digital prescription generation with drug interaction alerts', 'https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 6, 'Analytics Dashboard', 'Real-time insights and reporting for healthcare metrics', 'https://images.pexels.com/photos/6953876/pexels-photo-6953876.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 7, 'Billing & Payments', 'Integrated billing system with multiple payment options', 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 8, 'Telemedicine', 'Video consultation platform with secure patient communication', 'https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 9, 'Lab Reports', 'Lab test management with automated result notifications', 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1200'),
  ('easehealthai', 10, 'Mobile Interface', 'Responsive mobile-first design for on-the-go access', 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200')
ON CONFLICT (project_id, slide_number) DO NOTHING;