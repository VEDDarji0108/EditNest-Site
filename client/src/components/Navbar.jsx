import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useSiteStore } from '../store/useSiteStore';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const { mobileNavOpen, toggleMobileNav, closeMobileNav } = useSiteStore();

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a
          href="#home"
          className="heading-gradient font-script text-3xl tracking-tight transition hover:drop-shadow-[0_10px_25px_rgba(255,105,180,0.45)]"
        >
          EditNest
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-ink/70 transition hover:text-hotPink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-hotPink/30 transition hover:scale-[1.02]"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-hotPink/40 p-2 text-hotPink md:hidden"
          onClick={toggleMobileNav}
          aria-label="Open navigation menu"
        >
          {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-white/40 bg-white/95 px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4 text-base font-semibold uppercase tracking-[0.3em]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-ink/80"
                  onClick={closeMobileNav}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={closeMobileNav}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-hotPink/30"
            >
              Get a Quote
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-hotPink/20 bg-gradient-to-r from-hotPink/10 via-white to-surf/10 py-2"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-hotPink">
            Coming Soon
          </p>
        </div>
      </motion.div>
    </header>
  );
};

