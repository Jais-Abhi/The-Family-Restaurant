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
  { name: "Reservation", href: "/reservation" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled || pathname !== "/") {
      gsap.to(navRef.current, {
        backgroundColor: "#000000",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(navRef.current, {
        backgroundColor: "transparent",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        backdropFilter: "blur(0px)",
        borderBottom: "1px solid rgba(212, 175, 55, 0)",
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [scrolled, pathname]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-bold tracking-tighter text-accent">
            L&apos;ÉLÉGANCE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-widest uppercase transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-white/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="px-6 py-2 bg-accent text-charcoal font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[64px] bg-black backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-serif tracking-widest uppercase",
                  pathname === link.href ? "text-accent" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/reservation"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-accent text-charcoal font-bold uppercase tracking-widest"
            >
              Book a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
