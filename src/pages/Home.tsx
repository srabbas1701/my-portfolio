import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FeaturedProject from '../components/sections/FeaturedProject';
import Work from '../components/sections/Work';
import Skills from '../components/sections/Skills';
import WhyMe from '../components/sections/WhyMe';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-sm"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedProject />
        <Work />
        <Skills />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
