"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "./Reveal";

export default function ChefSpecial() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-charcoal text-foreground dark:text-white overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="text-[20vw] font-serif font-bold whitespace-nowrap">SIGNATURE</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div style={{ scale }}>
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-lg">
              <div className="absolute inset-0 border border-accent/20 -translate-x-6 translate-y-6" />
              <div className="relative z-10 w-full h-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/dish1.png"
                  alt="Chef Special"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Element */}
              <motion.div 
                style={{ y }}
                className="absolute -right-10 top-20 z-20 bg-accent text-charcoal p-8 rounded-full flex flex-col items-center justify-center w-40 h-40 border-8 border-charcoal shadow-2xl"
              >
                <span className="text-xs uppercase tracking-widest font-bold">Limited</span>
                <span className="text-3xl font-serif font-bold">Offer</span>
              </motion.div>
            </div>
          </Reveal>
        </motion.div>

        <div className="space-y-8">
          <Reveal delay={0.3}>
            <span className="text-accent uppercase tracking-[0.4em] text-sm font-semibold">Exclusively This Season</span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Chef&apos;s Signature <br />
              <span className="italic text-foreground/80 dark:text-white/80">Heritage Steak</span>
            </h2>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="text-foreground/60 dark:text-white/60 text-lg font-light leading-relaxed max-w-lg">
              Our Chef&apos;s Signature dish features a rare 45-day dry-aged tomahawk, 
              seasoned with hand-harvested sea salt and smoked with rosemary-infused 
              oak. It is a testament to our culinary heritage.
            </p>
          </Reveal>
          
          <Reveal delay={0.6}>
            <ul className="space-y-4">
              {["45-Day Dry Aged", "Sustainability Sourced", "Signature Oak Smoke"].map((item, i) => (
                <li key={item} className="flex items-center gap-4 text-foreground/80 dark:text-white/80">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="uppercase tracking-widest text-xs font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.7}>
            <button className="px-12 py-5 bg-foreground dark:bg-white text-white dark:text-charcoal font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-accent transition-colors duration-500">
              Reserve This Dish
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
