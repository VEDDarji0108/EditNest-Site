import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  'Clarity on your growth roadmap',
  'ROI-focused strategy',
  'Systems that scale automatically',
];

export const StrongCTA = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-hotPink/10 via-sunshine/10 to-surf/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[48px] border-2 border-hotPink/30 p-12 text-center shadow-2xl"
        >
          <h2 className="heading-gradient font-script text-5xl mb-4">
            Ready to Scale with AI-Powered Systems?
          </h2>
          <p className="text-xl text-ink/70 mb-8 max-w-2xl mx-auto">
            Book your free strategy call. We'll map out exactly how AI, automation, branding, and ads can transform your business.
          </p>

          <div className="flex flex-col items-center gap-6 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-lg text-ink/80">
                <CheckCircle2 className="h-6 w-6 text-lime flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-10 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-2xl shadow-hotPink/40 transition hover:scale-[1.02] hover:shadow-hotPink/50"
          >
            Book Your Free Strategy Call
            <ArrowRight className="h-5 w-5" />
          </Link>

          <p className="mt-6 text-sm text-ink/50">
            No sales pitch. Just clarity, strategy, and a roadmap to scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

