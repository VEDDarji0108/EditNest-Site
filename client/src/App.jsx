import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-body text-ink">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-hotPink/25 watercolor-blur" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-surf/25 watercolor-blur" />
        <div className="absolute -bottom-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-lime/25 watercolor-blur" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="space-y-10">
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <footer className="border-t border-white/40 bg-white/80 py-6 text-center text-xs uppercase tracking-[0.4em] text-ink/60">
          © {new Date().getFullYear()} EditNest Studio · Crafted with watercolor energy.
        </footer>
      </div>
    </div>
  );
};

export default App;
