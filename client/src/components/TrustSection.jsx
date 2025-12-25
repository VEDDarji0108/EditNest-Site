import { motion } from 'framer-motion';
import { Shield, Zap, Award, Users } from 'lucide-react';

const tools = [
  'OpenAI GPT-4',
  'Anthropic Claude',
  'Meta Ads',
  'Google Ads',
  'Webflow',
  'Figma',
  'Zapier',
  'Make.com',
];

const whyChoose = [
  {
    icon: Zap,
    title: 'System-Based, Not Project-Based',
    description: 'We build scalable systems that work 24/7, not one-off projects that need constant attention.',
  },
  {
    icon: Award,
    title: 'AI-First Expertise',
    description: 'Deep expertise in agentic AI, automation, and modern marketing tools. We stay ahead of the curve.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    description: 'We\'re your growth partner, not a vendor. We succeed when you succeed.',
  },
  {
    icon: Shield,
    title: 'Data Privacy & Responsible AI',
    description: 'We commit to ethical AI use, data privacy, and transparent practices. Your data is secure.',
  },
];

export const TrustSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-ink/2 to-white">
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        {/* Tools & Platforms */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">Technology</p>
            <h2 className="heading-gradient font-script text-4xl mb-4">Tools & Platforms We Use</h2>
            <p className="text-ink/70 max-w-2xl mx-auto">
              We work with industry-leading AI, automation, and design tools to deliver premium results.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-full bg-gradient-to-br from-hotPink/10 to-surf/10 border border-hotPink/20 px-5 py-2 text-sm font-semibold text-ink"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Why Choose EditNest */}
        <div>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">Why Choose Us</p>
            <h2 className="heading-gradient font-script text-4xl mb-4">Why Choose EditNest</h2>
            <p className="text-ink/70 max-w-2xl mx-auto">
              We're not a freelancer marketplace or a generic agency. We're a system-based growth partner.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-3xl p-8"
                >
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-hotPink/20 to-surf/20 p-3 mb-4">
                    <Icon className="h-6 w-6 text-ink" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-3">{item.title}</h3>
                  <p className="text-ink/70 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

