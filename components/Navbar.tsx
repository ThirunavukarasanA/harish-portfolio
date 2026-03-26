"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "About", "Gallery", "Events", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to avoid mobile menu stuck open on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
    open: {
      x: 0,
      transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-400/20 to-transparent ring-1 ring-brand-400/30">
              <span className="text-sm font-bold tracking-widest text-brand-300">HP</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-widest text-white">HARISH</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500">Photography</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400 md:flex"
          >
            {NAV_LINKS.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-300 transition-colors">
                {item}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden items-center md:flex"
          >
            <a
              href="#contact"
              className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-brand-400 px-6 font-medium text-black transition-all hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 h-full w-full bg-linear-to-br from-white/20 to-transparent transition-all group-hover:scale-[2.5] opacity-0 group-hover:opacity-100" />
              <span className="relative text-[11px] font-bold uppercase tracking-widest">Book a Shoot</span>
            </a>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </nav>
      </header>

      {/* Mobile Animated Slide Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-50 flex w-64 flex-col border-l border-white/10 bg-[#0a0a0a] shadow-2xl md:hidden"
            >
              <div className="flex h-20 items-center justify-end px-6">
                <button
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Mobile Menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 p-6">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-brand-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                
                <a
                  href="#contact"
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-brand-400 px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-black transition-all active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Shoot
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
