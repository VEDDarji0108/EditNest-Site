import ServicePage from './ServicePage';
import { Video } from 'lucide-react';

const service = {
  title: 'Content Creation & Photo/Video Editing',
  subtitle: 'Photo, video, and content production that moves fast. Professional editing, motion graphics, and visual assets that perform.',
  icon: Video,
  problem: 'Content bottlenecks are killing your momentum. Slow turnaround on visuals, videos, and graphics means you\'re missing opportunities. You\'re either spending too much time creating content yourself (taking you away from growth) or waiting weeks for deliverables from freelancers. The content you do get isn\'t optimized for performance or conversion.',
  solution: 'We deliver professional photo and video editing, motion graphics, and visual content at scale. Fast turnaround, conversion-focused design, and systems that keep your content pipeline flowing. We combine creative excellence with performance thinking.',
  solutionPoints: [
    'Fast turnaround on video and photo editing',
    'Motion graphics and animation',
    'Social media content creation',
    'Conversion-focused visual design',
    'Brand-consistent content systems',
    'Content strategy and planning',
  ],
  deliverables: [
    'Video editing and post-production',
    'Photo editing and retouching',
    'Motion graphics and animation',
    'Social media content',
    'Ad creative and visuals',
    'Product photography editing',
    'Content templates and systems',
    'Brand asset libraries',
  ],
  tools: [
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'Adobe Photoshop',
    'Figma',
    'DaVinci Resolve',
    'Canva Pro',
  ],
  whoFor: 'Businesses that need fast, high-quality content, want to maintain a consistent visual brand, need content for ads and social media, or are struggling with content bottlenecks. Perfect for e-commerce, agencies, creators, and service businesses.',
  timeline: 'Turnaround times vary by project: video editing (2-5 days), photo editing (1-2 days), motion graphics (3-7 days). For ongoing content, we establish systems and workflows for faster delivery.',
};

const ContentPage = () => {
  return <ServicePage service={service} />;
};

export default ContentPage;

