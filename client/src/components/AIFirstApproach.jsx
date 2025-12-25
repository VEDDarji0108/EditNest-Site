import { motion } from 'framer-motion';
import { Brain, Clock, Users, Network } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Agentic AI Explained Simply',
    description: 'AI agents that work autonomously—handling customer inquiries, qualifying leads, and managing workflows 24/7. Think of them as your digital team members that never sleep.',
  },
  {
    icon: Clock,
    title: 'AI Agents Working 24/7',
    description: 'While you sleep, our AI systems are engaging prospects, nurturing leads, and optimizing campaigns. True automation that scales without adding headcount.',
  },
  {
    icon: Users,
    title: 'Human + AI Collaboration',
    description: 'We don\'t replace humans—we amplify them. Our team designs the strategy and systems; AI executes at scale. Best of both worlds.',
  },
  {
    icon: Network,
    title: 'System-Based Execution',
    description: 'Every solution is built as a scalable system, not a one-off project. Once deployed, it runs, optimizes, and grows your business automatically.',
  },
];

export const AIFirstApproach = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-ink/2 to-white">
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">Our Approach</p>
          <h2 className="heading-gradient font-script text-5xl">Our AI-First Approach</h2>
          <p className="mt-3 text-lg text-ink/70 max-w-3xl mx-auto">
            We don\'t just use AI tools—we build AI-powered systems that transform how your business operates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-hotPink/20 via-sunshine/20 to-surf/20 p-4">
                  <Icon className="h-7 w-7 text-hotPink" />
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-4">{feature.title}</h3>
                <p className="text-ink/70 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

