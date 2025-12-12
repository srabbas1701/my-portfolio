import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { pageview } from './utils/analytics';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function AnalyticsWrapper() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnalyticsWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default App;
