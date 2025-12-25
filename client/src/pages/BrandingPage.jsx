import ServicePage from './ServicePage';
import { Palette } from 'lucide-react';

const service = {
  title: 'Branding & Website Design',
  subtitle: 'Premium brand identity, website design, and visual systems that build trust and convert. From strategy to execution.',
  icon: Palette,
  problem: 'Weak branding is costing you sales. Inconsistent visuals, outdated websites, and unclear messaging make prospects question your credibility. You\'re losing deals to competitors who look more professional, even if your product or service is better. Your website isn\'t converting, and your brand doesn\'t reflect the value you deliver.',
  solution: 'We build complete brand systems and high-converting websites that position you as premium. Every visual, every word, every interaction is designed to build trust and drive action. We combine strategic thinking with world-class design to create brands that convert.',
  solutionPoints: [
    'Complete brand identity systems (logo, colors, typography, voice)',
    'High-converting website design and development',
    'Visual systems that work across all touchpoints',
    'Conversion-focused UX/UI design',
    'Brand strategy and positioning',
    'SEO-optimized, fast-loading websites',
  ],
  deliverables: [
    'Brand identity system',
    'Logo and visual assets',
    'Brand guidelines document',
    'Website design and development',
    'Responsive mobile design',
    'Content strategy and copywriting',
    'Social media visual templates',
    'Marketing collateral design',
  ],
  tools: [
    'Figma',
    'Adobe Creative Suite',
    'Webflow',
    'React/Next.js',
    'Tailwind CSS',
    'Framer',
  ],
  whoFor: 'Businesses that need to look more professional, want to build trust with prospects, need a website that converts, or are rebranding for growth. Perfect for startups, agencies, service businesses, and e-commerce brands.',
  timeline: 'Brand identity typically takes 3-4 weeks. Website design and development takes 4-8 weeks, depending on complexity. We work in phases: discovery, strategy, design, development, and launch.',
};

const BrandingPage = () => {
  return <ServicePage service={service} />;
};

export default BrandingPage;

