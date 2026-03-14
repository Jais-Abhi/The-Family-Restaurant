"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { id: 1, src: "/hero.png", category: "Interior" },
  { id: 2, src: "/dish1.png", category: "Food" },
  { id: 3, src: "/dish2.png", category: "Food" },
  { id: 4, src: "/dessert1.png", category: "Desserts" },
  { id: 5, src: "/drink1.png", category: "Drinks" },
  { id: 6, src: "/hero.png", category: "Vibe" },
  { id: 7, src: "/dish1.png", category: "Food" },
  { id: 8, src: "/dish2.png", category: "Food" },
  { id: 9, src: "/dessert1.png", category: "Desserts" },
];

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="bg-background pt-32 pb-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-16">
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Visual Experience
          </m.h1>
          <p className="text-muted-foreground tracking-widest uppercase text-sm">A glimpse into our world</p>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <m.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative break-inside-avoid cursor-pointer overflow-hidden rounded-sm group"
              onClick={() => setSelectedImg(img.src)}
            >
              <Image
                src={img.src}
                alt="Gallery image"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-xs">View</span>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-accent transition-colors">
            <X size={40} />
          </button>
          <m.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
          >
            <Image src={selectedImg} alt="Enlarged view" fill className="object-contain" />
          </m.div>
        </m.div>
      )}

      <Footer />
    </main>
  );
}
