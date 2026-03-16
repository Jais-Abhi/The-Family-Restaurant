"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const padding = isMobile
      ? (scrolled || pathname !== "/" ? "0.6rem" : "0.8rem")
      : (scrolled || pathname !== "/" ? "1rem" : "1.5rem");

    gsap.to(navRef.current, {
      paddingTop: padding,
      paddingBottom: padding,
      backdropFilter: (scrolled || pathname !== "/") ? "blur(10px)" : "blur(0px)",
      borderBottom: (scrolled || pathname !== "/")
        ? "1px solid rgba(212, 175, 55, 0.2)"
        : "1px solid rgba(212, 175, 55, 0)",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [scrolled, pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 lg:px-12 bg-[#FAF9F6] text-black"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-base md:text-2xl font-serif font-bold tracking-tighter text-accent">
              L&apos;ÉLÉGANCE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-xs font-medium tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-full overflow-hidden group",
                  pathname === link.href ? "text-white" : "text-black hover:text-accent"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNavHighlight"
                    className="absolute inset-0 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/reservation"
              className="px-6 py-2 bg-accent text-charcoal font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden text-foreground relative z-[120]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="fixed top-0 right-0 w-[90vw] h-[90vw] max-w-[440px] max-h-[440px] bg-white z-[110] md:hidden flex flex-col items-start justify-start space-y-3 pt-4 pl-4 rounded-bl-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-l border-b border-accent/10"
          >
            {/* Close Button inside menu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-black"
            >
              <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                style={{ marginLeft: `${i * 32}px` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative text-xl font-serif font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-300",
                    pathname === link.href ? "text-white" : "text-black"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="activeNavMobile"
                      className="absolute inset-0 bg-black rounded-full" 
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + navLinks.length * 0.05 }}
              className="pt-4"
              style={{ marginLeft: `${navLinks.length * 28}px` }}
            >
              <Link
                href="/reservation"
                onClick={() => setIsOpen(false)}
                className="px-10 py-3.5 bg-gradient-to-br from-accent to-[#B8860B] text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_35px_rgba(184,134,11,0.5)] hover:scale-105 transition-all duration-300 active:scale-95 inline-block"
              >
                Reserve
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
