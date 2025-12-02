import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSiteStore } from '../store/useSiteStore';

export const Portfolio = () => {
  const portfolio = useSiteStore((state) => state.portfolio);
  const loading = useSiteStore((state) => state.loadingPortfolio);
  const error = useSiteStore((state) => state.portfolioError);
  const fetchPortfolio = useSiteStore((state) => state.fetchPortfolio);

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  return (
    <section id="portfolio" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-surf/5 via-transparent to-hotPink/5" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">
            Recent Pieces
          </p>
          <h2 className="heading-gradient font-script text-5xl">Portfolio Drops</h2>
          <p className="mt-3 text-ink/70">
            Hover through our latest edits and brand splashes.
          </p>
        </div>

        {error && (
          <p className="mb-6 rounded-3xl border border-hotPink/30 bg-hotPink/10 px-4 py-3 text-sm text-hotPink">
            {error}
          </p>
        )}

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {loading &&
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="masonry-card mb-6 h-64 animate-pulse rounded-[32px] bg-white/60"
              />
            ))}

          {portfolio.map((item, index) => (
            <motion.figure
              key={item.id ?? index}
              className="masonry-card relative mb-6 overflow-hidden rounded-[36px] shadow-2xl shadow-ink/10"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 transition duration-300 hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.6em] text-white/70">
                  {item.category}
                </p>
                <p className="text-2xl font-semibold">{item.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

