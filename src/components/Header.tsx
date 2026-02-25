import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

const NAV_LINKS = [
  { label: 'Flavors', href: '/#flavors' },
  { label: 'The Vibe', href: '/#vibe' },
  { label: 'Drop Us A Line', href: '/#contact' },
];

export function Header({ sticky = false }: { sticky?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed left-0 w-full z-40 transition-all duration-300 bg-white/80 backdrop-blur-md border-b-2 border-text-chocolate ${sticky ? 'top-0' : 'top-9'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={close}>
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} to={href}>
              <motion.span
                className="block text-base font-black uppercase tracking-wide text-text-chocolate hover:text-primary transition-colors"
                whileHover={{ rotate: -2 }}
              >
                {label}
              </motion.span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/#contact">
            <motion.span
              className="hidden sm:flex bg-accent-mango text-text-chocolate px-6 py-2.5 rounded-none border-2 border-text-chocolate text-sm font-black uppercase shadow-sticker-sm cursor-pointer"
              whileHover={{ backgroundColor: '#FF6B6B', color: 'white', rotate: -3, scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Waitlist
            </motion.span>
          </Link>

          {/* Hamburger toggle */}
          <button
            type="button"
            className="md:hidden text-text-chocolate p-2 border-2 border-text-chocolate bg-secondary shadow-[2px_2px_0px_0px_#2D1B0E]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined font-black">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t-2 border-text-chocolate px-6 py-6 flex flex-col gap-5"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                onClick={close}
                className="text-lg font-black uppercase tracking-wide text-text-chocolate hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={close}
              className="mt-2 inline-block bg-accent-mango text-text-chocolate px-6 py-3 border-2 border-text-chocolate text-sm font-black uppercase shadow-sticker-sm text-center"
            >
              Join Waitlist
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
