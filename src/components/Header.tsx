import { motion } from 'framer-motion';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-9 left-0 w-full z-40 px-6 py-4 transition-all duration-300 bg-white/80 backdrop-blur-md border-b-2 border-text-chocolate">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a className="flex items-center gap-2" href="#">
          <Logo size="sm" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <motion.a
            className="text-base font-black uppercase tracking-wide text-text-chocolate hover:text-primary transition-colors"
            href="#flavors"
            whileHover={{ rotate: -2 }}
          >
            Flavors
          </motion.a>
          <motion.a
            className="text-base font-black uppercase tracking-wide text-text-chocolate hover:text-primary transition-colors"
            href="#vibe"
            whileHover={{ rotate: 2 }}
          >
            The Vibe
          </motion.a>
          <motion.a
            className="text-base font-black uppercase tracking-wide text-text-chocolate hover:text-primary transition-colors"
            href="#contact"
            whileHover={{ rotate: -2 }}
          >
            Drop Us A Line
          </motion.a>
        </nav>
        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            className="hidden sm:flex bg-accent-mango text-text-chocolate px-6 py-2.5 rounded-none border-2 border-text-chocolate text-sm font-black uppercase shadow-sticker-sm cursor-pointer"
            whileHover={{
              backgroundColor: '#FF6B6B',
              color: 'white',
              rotate: -3,
              scale: 1.1,
            }}
            whileTap={{ scale: 0.98 }}
          >
            Join Waitlist
          </motion.a>
          <button
            type="button"
            className="md:hidden text-text-chocolate p-2 border-2 border-text-chocolate bg-secondary shadow-[2px_2px_0px_0px_#2D1B0E]"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined font-black">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
