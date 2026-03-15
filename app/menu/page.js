"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";

const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"];

const menuItems = [
  {
    id: 1,
    name: "Tuna Carpaccio",
    description: "Thinly sliced bluefin tuna, capers, lemon olive oil dressing.",
    price: "$24",
    category: "Starters",
    image: "/dish1.png",
  },
  {
    id: 2,
    name: "Wagyu Ribeye",
    description: "A5 Wagyu beef, truffle mash, charred seasonal vegetables.",
    price: "$85",
    category: "Main Course",
    image: "/dish2.png",
  },
  {
    id: 3,
    name: "Chocolate Fondant",
    description: "Warm chocolate cake, vanilla bean gelato, berry coulis.",
    price: "$18",
    category: "Desserts",
    image: "/dessert1.png",
  },
  {
    id: 4,
    name: "Old Fashioned",
    description: "Premium bourbon, aromatic bitters, orange peel zest.",
    price: "$20",
    category: "Drinks",
    image: "/drink1.png",
  },
  {
    id: 5,
    name: "Lobster Bisque",
    description: "Creamy Maine lobster soup, cognac, crème fraîche.",
    price: "$22",
    category: "Starters",
    image: "/dish1.png",
  },
  {
    id: 6,
    name: "Pan Seared Scallops",
    description: "U10 scallops, cauliflower purée, pancetta crisp.",
    price: "$42",
    category: "Main Course",
    image: "/dish2.png",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="pt-32 pb-24 bg-white text-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm mb-3 md:mb-4 block"
          >
            Exquisite Selection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif mb-6 md:mb-8 text-black"
          >
            The Culinary Menu
          </motion.h1>
          <div className="w-24 h-[1px] bg-accent mx-auto mb-12" />

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] md:text-sm uppercase tracking-widest transition-all px-3 py-1 md:px-4 md:py-2 border-b-2 ${
                  activeCategory === cat ? "border-accent text-accent" : "border-transparent text-black/60 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}
