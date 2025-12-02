import { motion } from 'framer-motion';

const highlights = [
  { label: 'Years crafting edits', value: '8+' },
  { label: 'Frames colored every week', value: '12K' },
  { label: 'Studio collaborators', value: '24' },
];

export const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-x-0 top-10 mx-auto h-72 max-w-5xl rounded-[48px] bg-white/40 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 rounded-[56px] border border-white/70 bg-white/80 px-6 py-12 shadow-xl shadow-surf/10 backdrop-blur-2xl md:flex-row md:px-12">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">About</p>
          <h2 className="heading-gradient font-script text-5xl">Color-forward storytellers</h2>
          <p className="mt-4 text-lg text-ink/70">
            EditNest is a collective of editors, illustrators, and motion artists obsessed with
            the playful precision of watercolor. We blend analog inspiration with digital polish to
            create immersive launch films, hero visuals, and snackable social loops that feel alive.
          </p>
          <div className="mt-6 space-y-3 text-ink/70">
            <p>What makes us different?</p>
            <ul className="space-y-2 text-base">
              <li>• Watercolor-inspired gradients mapped to your palette</li>
              <li>• Strategy, scripting, and sound in one agile pod</li>
              <li>• Fully remote-ready with live edit sessions over Frame.io</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6">
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[32px] border border-hotPink/20 bg-gradient-to-br from-hotPink/5 to-surf/5 px-6 py-8 text-center"
              >
                <p className="text-3xl font-semibold text-hotPink">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.4em] text-ink/60">{item.label}</p>
              </div>
            ))}
          </div>
          <motion.div
            className="rounded-[32px] border border-surf/30 bg-white/70 px-6 py-6 text-sm text-ink/70 shadow-lg shadow-surf/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-surf">Studio mantra</p>
            <p className="mt-2 text-2xl font-script text-ink">
              Paint motion like feathers — soft, layered, unexpectedly bold.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

