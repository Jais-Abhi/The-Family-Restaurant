"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });
      gsap.from(buttonsRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 1.1,
      });

      // Floating elements
      gsap.to(".float-element", {
        y: "20px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Luxury Restaurant"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="float-element absolute top-[20%] left-[10%] w-24 h-24 border border-accent/20 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-accent rounded-full" />
        </div>
        <div className="float-element absolute bottom-[20%] right-[10%] w-32 h-32 border border-accent/10 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-accent/50 rounded-full" />
        </div>
        <div className="float-element absolute top-[60%] left-[80%] w-16 h-16 border border-white/10 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-accent tracking-[0.5em] uppercase text-sm font-medium mb-6 block"
        >
          An Unforgettable Culinary Journey
        </motion.span>
        
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-tight"
        >
          L&apos;Élégance <br />
          <span className="text-white/80 italic font-light">Fine Dining</span>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Where art meets the plate. Experience the finest contemporary cuisine 
          crafted with passion and served with perfection.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/menu" 
            className="group relative px-10 py-4 bg-primary text-white overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Explore Menu</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          
          <Link 
            href="/reservation" 
            className="px-10 py-4 border border-white/30 text-white hover:bg-white hover:text-charcoal transition-all duration-500 font-bold uppercase tracking-widest text-sm"
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
