import { motion } from 'framer-motion';
import { Search, Lightbulb, Hammer, Rocket, TrendingUp, ArrowUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'We dive deep into your business goals, current challenges, and growth opportunities.',
    details: [
      'Business model and revenue streams analysis',
      'Current marketing and operations audit',
      'Competitive landscape review',
      'Growth goals and KPIs definition',
      'Technical stack and tool assessment',
    ],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'AI + creative roadmap designed to solve your specific problems and scale your results.',
    details: [
      'Custom system architecture design',
      'AI and automation strategy',
      'Brand positioning and messaging',
      'Marketing and growth roadmap',
      'Timeline and milestone planning',
    ],
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build',
    description: 'Systems, design, content, and automation—all built with scalability and performance in mind.',
    details: [
      'AI agent development and deployment',
      'Brand identity and visual systems',
      'Website and landing page development',
      'Content creation and asset production',
      'Integration and technical setup',
    ],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Ads & automation go live. We monitor, test, and optimize from day one.',
    details: [
      'Campaign launch and activation',
      'System monitoring and alerts',
      'Initial performance tracking',
      'Quick-win optimizations',
      'Client training and handoff',
    ],
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Optimize',
    description: 'Data-driven improvements. We refine what works and eliminate what doesn\'t.',
    details: [
      'Performance data analysis',
      'A/B testing and experimentation',
      'Conversion rate optimization',
      'Cost efficiency improvements',
      'ROI and ROAS optimization',
    ],
  },
  {
    number: '06',
    icon: ArrowUp,
    title: 'Scale',
    description: 'Long-term growth systems that compound. Your business runs on autopilot.',
    details: [
      'Scaling successful campaigns',
      'System expansion and enhancement',
      'New channel testing',
      'Long-term growth planning',
      'Ongoing partnership and support',
    ],
  },
];

const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="heading-gradient font-script text-5xl md:text-6xl mb-4">How We Work</h1>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            A proven system-based approach that reduces risk and accelerates results. Every step is designed to build clarity, reduce anxiety, and deliver outcomes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 md:p-12"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-surf/20 to-hotPink/20 p-4 flex-shrink-0">
                    <Icon className="h-8 w-8 text-ink" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-5xl font-bold text-ink/10">{step.number}</span>
                      <h2 className="text-3xl font-semibold text-ink">{step.title}</h2>
                    </div>
                    <p className="text-lg text-ink/70 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0 mt-0.5" />
                          <span className="text-ink/70">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why This Process Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-semibold text-ink mb-6">Why This Process Works</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">Reduces Client Anxiety</h3>
              <p className="text-ink/70 leading-relaxed">
                Clear steps, regular communication, and transparent timelines. You always know what's happening and what's next.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">System-Based Thinking</h3>
              <p className="text-ink/70 leading-relaxed">
                Every solution is built to scale, not just solve an immediate problem. We think long-term from day one.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">Data-Driven Decisions</h3>
              <p className="text-ink/70 leading-relaxed">
                We optimize based on real performance data, not assumptions. What works gets scaled; what doesn't gets eliminated.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink mb-3">Continuous Improvement</h3>
              <p className="text-ink/70 leading-relaxed">
                Systems get better over time. We don't just launch and leave—we monitor, optimize, and scale.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-10 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-2xl shadow-hotPink/40 transition hover:scale-[1.02]"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeWorkPage;

