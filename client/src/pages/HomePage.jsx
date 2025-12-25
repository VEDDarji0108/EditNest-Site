import { Hero } from '../components/Hero';
import { ProblemsWeSolve } from '../components/ProblemsWeSolve';
import { AIFirstApproach } from '../components/AIFirstApproach';
import { Services } from '../components/Services';
import { HowWeWorkSection } from '../components/HowWeWorkSection';
import { Portfolio } from '../components/Portfolio';
import { TrustSection } from '../components/TrustSection';
import { About } from '../components/About';
import { StrongCTA } from '../components/StrongCTA';

const HomePage = () => {
  return (
    <main className="space-y-10">
      <Hero />
      <ProblemsWeSolve />
      <AIFirstApproach />
      <Services />
      <HowWeWorkSection />
      <Portfolio />
      <TrustSection />
      <About />
      <StrongCTA />
    </main>
  );
};

export default HomePage;

