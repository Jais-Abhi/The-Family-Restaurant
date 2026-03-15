"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The most exquisite dining experience I've had in years. The attention to detail and balance of flavors is simply unmatched.",
    author: "James Wilson",
    role: "Food Critic",
  },
  {
    text: "L'Élégance isn't just a restaurant, it's an art gallery where you can eat the exhibits. Absolutely divine atmosphere.",
    author: "Elena Rodriguez",
    role: "Lifestyle Blogger",
  },
  {
    text: "From the moment you walk in, you're treated like royalty. The wine pairing was spectacular and the service was world-class.",
    author: "Michael Chen",
    role: "Tech Executive",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-charcoal text-foreground dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Quote className="mx-auto text-accent mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif">What Our Guests Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-charcoal/50 flex flex-col items-center rounded-lg"
            >
              <p className="text-black/70 dark:text-white/70 leading-relaxed italic mb-8 font-light text-lg">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-auto">
                <h4 className="font-serif text-accent text-xl mb-1">{t.author}</h4>
                <p className="text-black/40 dark:text-white/40 text-xs uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
