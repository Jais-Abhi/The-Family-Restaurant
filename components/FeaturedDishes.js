"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredDishes = [
  {
    id: 1,
    name: "Wild Alaskan Salmon",
    description: "Pan-seared salmon with citrus glaze, asparagus, and saffron risotto.",
    price: "₹1,450",
    image: "/dish1.png",
  },
  {
    id: 2,
    name: "Truffle Ribeye Steak",
    description: "Premium black angus ribeye with truffle butter and honey-glazed carrots.",
    price: "₹2,200",
    image: "/dish2.png",
  },
];

export default function FeaturedDishes() {
  return (
    <section className="py-16 md:py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block"
            >
              Chef&apos;s Recommendations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif text-black"
            >
              Featured Masterpieces
            </motion.h2>
          </div>
          <Link 
            href="/menu"
            className="flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all duration-300 group"
          >
            Explore Full Menu 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-6 md:mb-8 rounded-sm">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 text-accent font-serif text-lg md:text-xl border border-accent/20">
                  {dish.price}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-2 md:mb-3 text-black group-hover:text-accent transition-colors">
                {dish.name}
              </h3>
              <p className="text-black/60 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-md">
                {dish.description}
              </p>
              <button className="text-sm font-bold uppercase tracking-widest border-b border-accent/50 pb-1 hover:border-accent transition-all">
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
