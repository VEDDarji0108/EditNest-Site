import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Palette, TrendingUp, Zap } from 'lucide-react';

const expertise = [
  { icon: Brain, label: 'AI & Automation', value: 'Expert' },
  { icon: Palette, label: 'Branding & Design', value: 'Expert' },
  { icon: TrendingUp, label: 'Performance Marketing', value: 'Expert' },
  { icon: Zap, label: 'System Thinking', value: 'Core' },
];

export const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-x-0 top-10 mx-auto h-72 max-w-5xl rounded-[48px] bg-white/40 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-12">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">About</p>
          <h2 className="heading-gradient font-script text-5xl mb-4">Why EditNest Exists</h2>
          <p className="text-lg text-ink/70 max-w-3xl mx-auto">
            We exist to build systems, not just deliver projects. Every solution is designed to scale automatically.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold text-ink mb-4">System Thinking & AI-First Execution</h3>
            <p className="text-ink/70 leading-relaxed mb-4">
              We don't approach problems with one-off solutions. Every project is built as a scalable system that runs, optimizes, and grows your business automatically.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Our AI-first approach means we leverage agentic AI, automation, and intelligent workflows to create solutions that work 24/7 without constant manual intervention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold text-ink mb-4">Long-Term Partnership</h3>
            <p className="text-ink/70 leading-relaxed mb-4">
              EditNest isn't a freelancer marketplace or a project-based agency. We're your long-term growth partner, building systems that compound over time.
            </p>
            <p className="text-ink/70 leading-relaxed">
              We combine expertise in automation, design, and growth marketing to deliver integrated solutions that transform how your business operates.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-hotPink/20 bg-gradient-to-br from-hotPink/5 to-surf/5 px-6 py-8 text-center"
              >
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-hotPink/20 to-surf/20 p-3 mb-4">
                  <Icon className="h-6 w-6 text-ink" />
                </div>
                <p className="text-2xl font-semibold text-hotPink mb-2">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-ink/60">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-xl shadow-hotPink/30 transition hover:scale-[1.02]"
          >
            Let's Build Together
          </Link>
        </div>
      </div>
    </section>
  );
};

