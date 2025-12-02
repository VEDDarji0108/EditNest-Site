import { motion } from 'framer-motion';
import parrotLogo from '../assets/parrot-logo.png';

export const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-16 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-hotPink/40 watercolor-blur" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-surf/40 watercolor-blur" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-lime/30 watercolor-blur" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:px-8">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-ink/50">
            Video • Design • Animation
          </p>
          <h1 className="heading-gradient font-script text-6xl leading-tight sm:text-7xl lg:text-8xl">
            EditNest
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="inline-block"
          >
            <span className="inline-block rounded-full bg-gradient-to-r from-hotPink/20 via-sunshine/20 to-surf/20 border-2 border-hotPink/40 px-6 py-2 text-sm font-semibold uppercase tracking-[0.4em] text-hotPink backdrop-blur-sm">
              Coming Soon
            </span>
          </motion.div>
          <p className="tagline-tilt font-hand text-3xl text-hotPink">make your own creation</p>
          <p className="text-lg text-ink/70">
            A watercolor-inspired creative studio crafting bold brand stories through film edits,
            vibrant identities, and expressive motion.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-xl shadow-hotPink/30 transition hover:scale-[1.01]"
            >
              View Our Work
            </a>
            <a
              href="#services"
              className="gradient-border rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ink/80"
            >
              Our Services
            </a>
          </div>
          <div className="flex flex-wrap gap-8 text-sm uppercase tracking-[0.4em] text-ink/50">
            <div>
              <p className="text-3xl font-semibold text-hotPink">120+</p>
              <p>Campaigns</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-surf">45</p>
              <p>Brands</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-sunshine">12</p>
              <p>Awards</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 justify-center">
          <motion.div
            initial={{ rotate: -5, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-card relative flex aspect-square w-full max-w-md items-center justify-center rounded-[40px]"
          >
            <motion.img
              src={parrotLogo}
              alt="EditNest parrot"
              className="w-3/4 drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
              animate={{
                y: [0, -12, 0],
                rotate: [-1.2, 1.2, -1.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-6 left-6 rounded-3xl bg-white/80 px-6 py-3 shadow-lg shadow-hotPink/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-ink/50">Parrot DNA</p>
              <p className="text-lg font-semibold text-hotPink">Watercolor Spirit</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

