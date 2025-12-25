import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicePage = ({ service }) => {
  if (!service) return null;

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex rounded-2xl bg-gradient-to-br from-hotPink/20 to-surf/20 p-4 mb-6">
            <service.icon className="h-8 w-8 text-ink" />
          </div>
          <h1 className="heading-gradient font-script text-5xl md:text-6xl mb-4">{service.title}</h1>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">{service.subtitle}</p>
        </motion.div>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-8"
        >
          <h2 className="text-3xl font-semibold text-ink mb-4">The Problem</h2>
          <p className="text-lg text-ink/70 leading-relaxed">{service.problem}</p>
        </motion.section>

        {/* Our Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-8"
        >
          <h2 className="text-3xl font-semibold text-ink mb-4">Our Solution</h2>
          <p className="text-lg text-ink/70 leading-relaxed mb-6">{service.solution}</p>
          {service.solutionPoints && (
            <ul className="space-y-3">
              {service.solutionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-lime flex-shrink-0 mt-0.5" />
                  <span className="text-ink/70">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.section>

        {/* What We Deliver */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-8"
        >
          <h2 className="text-3xl font-semibold text-ink mb-6">What We Deliver</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {service.deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-hotPink flex-shrink-0 mt-1" />
                <span className="text-ink/70">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tools & AI Used */}
        {service.tools && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-3xl p-8 md:p-12 mb-8"
          >
            <h2 className="text-3xl font-semibold text-ink mb-6">Tools & AI Used</h2>
            <div className="flex flex-wrap gap-3">
              {service.tools.map((tool, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gradient-to-br from-hotPink/10 to-surf/10 border border-hotPink/20 px-4 py-2 text-sm font-semibold text-ink"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Who This Is For */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-8"
        >
          <h2 className="text-3xl font-semibold text-ink mb-4">Who This Is For</h2>
          <p className="text-lg text-ink/70 leading-relaxed">{service.whoFor}</p>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-semibold text-ink mb-4">Timeline</h2>
          <p className="text-lg text-ink/70 leading-relaxed">{service.timeline}</p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-10 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-2xl shadow-hotPink/40 transition hover:scale-[1.02]"
          >
            Book Your Free Strategy Call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;

