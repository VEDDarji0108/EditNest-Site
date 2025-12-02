import { motion } from 'framer-motion';
import { Clapperboard, PenTool, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Video Editing',
    description: 'Professional cuts, color grading, and motion graphics that pulse with music.',
    icon: Clapperboard,
    accent: 'from-hotPink/40 to-hotPink/10',
  },
  {
    title: 'Graphic Design',
    description: 'Brand identity, logos, and scroll-stopping social assets in lush gradients.',
    icon: PenTool,
    accent: 'from-sunshine/40 to-sunshine/10',
  },
  {
    title: 'Animation',
    description: '2D/3D animation and visual effects that paint stories in the air.',
    icon: Sparkles,
    accent: 'from-surf/40 to-surf/10',
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-hotPink/10 to-transparent blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">Services</p>
          <h2 className="heading-gradient font-script text-5xl">Our Colorways</h2>
          <p className="mt-3 text-ink/70">
            We stitch together film, graphics, and motion for vibrant stories.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon, accent }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="glass-card relative rounded-4xl p-8"
            >
              <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${accent} p-4`}>
                <Icon className="text-ink" />
              </div>
              <h3 className="text-2xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-ink/70">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

