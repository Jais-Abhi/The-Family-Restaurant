"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="About Us"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-serif text-white"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">The Beginning</span>
          <h2 className="text-4xl font-serif mb-8">From a Small Kitchen to Culinary Excellence</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            L&apos;Élégance was founded by Chef Alberto Russo in 1995. What started as a modest 10-table 
            bistro has evolved into a world-renowned fine dining destination.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our commitment to the &ldquo;Farm to Fork&rdquo; philosophy means we partner with local artisans 
            and sustainable farms to bring the freshest ingredients to your table.
          </p>
        </motion.div>
        <div className="relative aspect-square">
          <Image src="/dish1.png" alt="Plating" fill className="object-cover rounded-sm shadow-2xl" />
        </div>
      </section>

      {/* Parallax Quote */}
      <section className="parallax-section relative h-[500px] overflow-hidden flex items-center justify-center">
        <div className="parallax-bg absolute inset-0 h-[150%] -top-[25%] z-0">
          <Image src="/hero.png" alt="Background" fill className="object-cover brightness-[0.3]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h3 className="text-3xl md:text-5xl font-serif text-white italic max-w-3xl mx-auto leading-tight">
            &ldquo;Cooking is an act of love, a gift, a way of sharing with others the little secrets - savory secrets - that we are cooking on the burner.&rdquo;
          </h3>
          <p className="text-accent mt-8 uppercase tracking-widest">— Chef Alberto Russo</p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-serif text-center mb-16">Meet the Masters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                  <Image src="/hero.png" alt="Chef" fill className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <h4 className="text-2xl font-serif mb-1">Expert Chef {i}</h4>
                <p className="text-accent text-sm uppercase tracking-widest">Specialist</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
