import ServicePage from './ServicePage';
import { TrendingUp } from 'lucide-react';

const service = {
  title: 'Ads & Performance Marketing',
  subtitle: 'Data-driven ad campaigns that convert. Strategy, creative, and optimization across all platforms. Real ROAS, not vanity metrics.',
  icon: TrendingUp,
  problem: 'You\'re spending money on ads that don\'t convert. Low ROAS, wasted budget, and no clear strategy. You\'re either not running ads at all (missing opportunities) or running them poorly (burning cash). You don\'t know which platforms work, which audiences convert, or how to optimize for real results.',
  solution: 'We build performance marketing systems that actually convert. We combine strategic targeting, high-converting creative, and continuous optimization to deliver real ROAS. Every campaign is built on data, tested rigorously, and optimized for profit—not vanity metrics.',
  solutionPoints: [
    'Multi-platform ad strategy (Meta, Google, LinkedIn, TikTok)',
    'High-converting ad creative and copy',
    'Audience research and targeting',
    'Landing page optimization',
    'Conversion tracking and analytics',
    'A/B testing and continuous optimization',
  ],
  deliverables: [
    'Performance marketing strategy',
    'Ad creative and copy',
    'Campaign setup and management',
    'Landing page design and optimization',
    'Conversion tracking setup',
    'Monthly performance reports',
    'Ongoing optimization and testing',
    'ROAS-focused campaign management',
  ],
  tools: [
    'Meta Ads Manager',
    'Google Ads',
    'LinkedIn Ads',
    'TikTok Ads',
    'Google Analytics',
    'Hotjar',
    'Figma',
  ],
  whoFor: 'Businesses that want to scale through paid advertising, need better ROAS, want to test new platforms, or are currently wasting ad spend. Perfect for e-commerce, SaaS, service businesses, and agencies.',
  timeline: 'Initial strategy and setup takes 2-3 weeks. Campaigns launch within the first month. We optimize continuously based on data, with monthly strategy reviews and quarterly deep-dives.',
};

const AdsPage = () => {
  return <ServicePage service={service} />;
};

export default AdsPage;

