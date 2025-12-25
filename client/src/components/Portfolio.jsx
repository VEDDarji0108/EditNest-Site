import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-surf/5 via-transparent to-hotPink/5" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">
            Our Work
          </p>
          <h2 className="heading-gradient font-script text-5xl">Labs</h2>
          <p className="mt-3 text-lg text-ink/70">
            Case studies and system showcases coming soon.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[48px] p-16 text-center"
        >
          <div className="inline-flex rounded-full bg-gradient-to-br from-hotPink/20 to-surf/20 p-6 mb-6">
            <Clock className="h-12 w-12 text-ink" />
          </div>
          <h3 className="text-3xl font-semibold text-ink mb-4">Coming Soon</h3>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            We're building case studies that showcase real results from our AI-powered systems, branding projects, and performance marketing campaigns. Check back soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

