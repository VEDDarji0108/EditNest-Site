import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Palette, TrendingUp, Video } from 'lucide-react';

const services = [
  {
    title: 'Agentic AI & Automation',
    description: 'AI agents that work 24/7—handling inquiries, qualifying leads, and automating workflows. Build systems that scale without adding headcount.',
    icon: Brain,
    link: '/services/agentic-ai',
    accent: 'from-hotPink/40 to-hotPink/10',
  },
  {
    title: 'Branding & Digital Presence',
    description: 'Premium brand identity, website design, and visual systems that build trust and convert. From strategy to execution.',
    icon: Palette,
    link: '/services/branding',
    accent: 'from-sunshine/40 to-sunshine/10',
  },
  {
    title: 'Ads & Performance Marketing',
    description: 'Data-driven ad campaigns that convert. Strategy, creative, and optimization across all platforms. Real ROAS, not vanity metrics.',
    icon: TrendingUp,
    link: '/services/ads',
    accent: 'from-surf/40 to-surf/10',
  },
  {
    title: 'Content Creation & Editing',
    description: 'Photo, video, and content production that moves fast. Professional editing, motion graphics, and visual assets that perform.',
    icon: Video,
    link: '/services/content',
    accent: 'from-lime/40 to-lime/10',
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-hotPink/10 to-transparent blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">Services</p>
          <h2 className="heading-gradient font-script text-5xl">Service Pillars</h2>
          <p className="mt-3 text-lg text-ink/70 max-w-2xl mx-auto">
            Four core systems that transform how your business operates and scales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon, link, accent }) => (
            <Link key={title} to={link}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card relative rounded-3xl p-8 h-full cursor-pointer transition-all hover:shadow-xl"
              >
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${accent} p-4`}>
                  <Icon className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-3">{title}</h3>
                <p className="text-ink/70 leading-relaxed">{description}</p>
                <div className="mt-4 text-sm font-semibold text-hotPink uppercase tracking-[0.2em]">
                  Learn More →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

