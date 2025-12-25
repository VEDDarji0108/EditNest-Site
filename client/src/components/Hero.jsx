import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-hotPink/40 watercolor-blur" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-surf/40 watercolor-blur" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-lime/30 watercolor-blur" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-ink/50 mb-4">
              Agentic AI • Automation • Branding • Ads • Content • Editing
            </p>
            <h1 className="heading-gradient font-script text-5xl leading-tight sm:text-6xl lg:text-7xl mb-6">
              We Build AI-Powered Systems, Brands, and Ads That Scale Businesses Automatically
            </h1>
            <p className="text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
              EditNest is a system-based agency. We don't do one-off projects—we build scalable solutions that work 24/7.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-xl shadow-hotPink/30 transition hover:scale-[1.02] hover:shadow-hotPink/40"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="#services"
              className="gradient-border rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-ink/80 transition hover:text-hotPink"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

