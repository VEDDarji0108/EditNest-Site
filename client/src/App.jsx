import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StickyCTA } from './components/StickyCTA';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import AgenticAIPage from './pages/AgenticAIPage';
import BrandingPage from './pages/BrandingPage';
import AdsPage from './pages/AdsPage';
import ContentPage from './pages/ContentPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-body text-ink">
        <div className="pointer-events-none fixed inset-0 opacity-60">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-hotPink/25 watercolor-blur" />
          <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-surf/25 watercolor-blur" />
          <div className="absolute -bottom-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-lime/25 watercolor-blur" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/how-we-work" element={<HowWeWorkPage />} />
            <Route path="/services/agentic-ai" element={<AgenticAIPage />} />
            <Route path="/services/branding" element={<BrandingPage />} />
            <Route path="/services/ads" element={<AdsPage />} />
            <Route path="/services/content" element={<ContentPage />} />
          </Routes>
          <StickyCTA />
          <footer className="border-t border-white/40 bg-white/80 py-6 text-center text-xs uppercase tracking-[0.4em] text-ink/60">
            © {new Date().getFullYear()} EditNest · AI-Powered Growth & Creative Agency.
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
