import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter));

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20">
        <Container>
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Project Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              A showcase of key projects spanning AI/ML, healthcare transformation,
              enterprise delivery, and digital innovation.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Technology:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Projects
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedFilter(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFilter === tag
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${project.color}/10 flex items-center justify-center mb-4`}>
                      <div className={`w-6 h-6 rounded-full bg-${project.color}`}></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.company}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-semibold text-primary">
                        {project.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No projects found for the selected filter.
              </p>
            </div>
          )}

          <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Featured: Discovery Bionics
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  A professional corporate website for a leading biotech distribution company, showcasing 200+ product SKUs and partnerships with 8+ global brands serving premier research institutions across India.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">WordPress</Badge>
                  <Badge variant="outline">Web Design</Badge>
                  <Badge variant="outline">Corporate</Badge>
                  <Badge variant="outline">Biotech</Badge>
                </div>
                <Button
                  variant="primary"
                  icon={ExternalLink}
                  onClick={() => window.open('https://discoverybionics.com/', '_blank')}
                >
                  Visit Website
                </Button>
              </div>
              <div className="h-full min-h-[300px] md:min-h-[400px]">
                <img
                  src="/images/discovery-bionics.jpg"
                  alt="Discovery Bionics Website"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
