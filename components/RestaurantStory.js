"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantStory() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-charcoal relative overflow-hidden text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -top-6 -left-6 w-full h-full border border-accent/30 z-0" />
            <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl">
              <Image
                src="/hero.png" // Reusing hero for now
                alt="Chef at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Our Legacy</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-black dark:text-white">
            A Journey of Flavors, <br />
            Crafted Since 1995
          </h2>
          <div className="space-y-6 text-black/70 dark:text-white/70 leading-relaxed text-lg font-light">
            <p>
              L&apos;Élégance was born out of a desire to create a sanctuary where culinary excellence 
              and refined atmosphere meet. Our story began twenty years ago in a small kitchen 
              with a simple philosophy: respect for local ingredients and passion for innovation.
            </p>
            <p>
              Today, we are honored to be recognized as one of the city&apos;s most prestigious dining 
              destinations. Every plate we serve tells a story of heritage, precision, and the 
              relentless pursuit of perfection.
            </p>
          </div>
          <Link 
            href="/about" 
            className="mt-10 inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all duration-300"
          >
            Discover More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
