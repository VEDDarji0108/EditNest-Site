import { motion } from 'framer-motion';
import { Search, Lightbulb, Hammer, Rocket, TrendingUp, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'We dive deep into your business goals, current challenges, and growth opportunities.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'AI + creative roadmap designed to solve your specific problems and scale your results.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build',
    description: 'Systems, design, content, and automation—all built with scalability and performance in mind.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Ads & automation go live. We monitor, test, and optimize from day one.',
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Optimize',
    description: 'Data-driven improvements. We refine what works and eliminate what doesn\'t.',
  },
  {
    number: '06',
    icon: ArrowUp,
    title: 'Scale',
    description: 'Long-term growth systems that compound. Your business runs on autopilot.',
  },
];

export const HowWeWorkSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-surf/10 to-transparent blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">Process</p>
          <h2 className="heading-gradient font-script text-5xl">How We Work</h2>
          <p className="mt-3 text-lg text-ink/70 max-w-3xl mx-auto">
            A proven system-based approach that reduces risk and accelerates results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-surf/20 to-hotPink/20 p-3">
                    <Icon className="h-6 w-6 text-ink" />
                  </div>
                  <span className="text-4xl font-bold text-ink/10">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">{step.title}</h3>
                <p className="text-ink/70 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/how-we-work"
            className="inline-block rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-xl shadow-hotPink/30 transition hover:scale-[1.02]"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
};

