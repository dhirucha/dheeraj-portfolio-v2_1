"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu when switching to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      if (mq.matches) {
        setOpen(false);
      }
    };

    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
    };
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="safe-top fixed inset-x-0 top-0 z-[1000] flex items-center justify-between border-b border-[color:var(--color-glass-border)] bg-[color:var(--color-bg)]/60 px-[clamp(1.25rem,5%,3.5rem)] py-4 backdrop-blur-xl"
      >
        {/* Logo */}
        <a
          href="#hero"
          data-hover
          className="font-[family-name:var(--font-head)] text-xl font-extrabold tracking-tight text-gradient"
        >
          Dheeraj.
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-hover
                className="group relative text-sm font-medium text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-ink)]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[color:var(--color-cyan)] to-[color:var(--color-pink)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          onClick={() => setOpen((prev) => !prev)}
          data-hover
          className="z-[1100] flex h-11 w-11 items-center justify-center md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[1040] bg-black/50 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Mobile Drawer */}
            <motion.ul
              id="mobile-nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="safe-bottom fixed inset-y-0 right-0 z-[1050] flex w-[min(78vw,320px)] flex-col justify-center gap-8 border-l border-[color:var(--color-glass-border)] bg-[color:var(--color-bg2)]/95 p-10 backdrop-blur-2xl md:hidden"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-[color:var(--color-ink)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
}