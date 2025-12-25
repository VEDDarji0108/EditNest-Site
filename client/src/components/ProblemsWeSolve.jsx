import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Zap, FileImage, Settings } from 'lucide-react';

const problems = [
  {
    icon: Settings,
    title: 'Manual Operations Slowing Growth',
    description: 'Repetitive tasks eating your time. No automation means you\'re stuck in the weeds instead of scaling.',
  },
  {
    icon: AlertCircle,
    title: 'Weak Branding & Low Trust',
    description: 'Inconsistent visuals and messaging that don\'t reflect your value. Prospects don\'t see you as premium.',
  },
  {
    icon: TrendingDown,
    title: 'Ads That Don\'t Convert',
    description: 'Spending on ads without clear strategy or optimization. Low ROAS and wasted budget.',
  },
  {
    icon: FileImage,
    title: 'Content & Editing Bottlenecks',
    description: 'Slow turnaround on visuals, videos, and content. Missing opportunities while waiting on deliverables.',
  },
  {
    icon: Zap,
    title: 'No Automation in Marketing & Sales',
    description: 'Everything is manual. No AI agents working 24/7. No systems that scale without you.',
  },
];

export const ProblemsWeSolve = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-ink/5 to-transparent blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">The Reality</p>
          <h2 className="heading-gradient font-script text-5xl">Problems We Solve</h2>
          <p className="mt-3 text-lg text-ink/70">
            These bottlenecks are killing growth. We fix them with systems, not band-aids.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-ink/10 to-ink/5 p-4">
                  <Icon className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">{problem.title}</h3>
                <p className="text-ink/70 leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

