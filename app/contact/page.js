"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-black pt-32">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 md:pb-24">
        <header className="text-center mb-12 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-serif mb-4 md:mb-6 text-black"
          >
            Get In Touch
          </motion.h1>
          <div className="w-16 md:w-20 h-[1px] bg-accent mx-auto" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 flex items-center gap-3 text-black">
                <MapPin className="text-accent" size={20} /> Location
              </h3>
              <p className="text-black/70 leading-relaxed font-light text-sm md:text-base">
                Gomti Nagar, <br />
                Lucknow, UP 226010 <br />
                India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 flex items-center gap-3 text-black">
                <Phone className="text-accent" size={20} /> Reservations
              </h3>
              <p className="text-black/70 leading-relaxed font-light text-sm md:text-base">
                +91 522 123 4567 <br />
                +91 98765 43210
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 flex items-center gap-3">
                <Clock className="text-accent" size={20} /> Opening Hours
              </h3>
              <div className="text-black/70 leading-relaxed font-light text-sm md:text-base space-y-2">
                <p><span className="text-black">Mon - Fri:</span> 11:00 AM - 11:00 PM</p>
                <p><span className="text-black">Sat - Sun:</span> 10:00 AM - 12:00 AM</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form className="p-6 md:p-12 bg-gray-50 shadow-sm space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Your Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 p-3 md:p-4 outline-none focus:border-accent transition-all text-black text-sm md:text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 p-3 md:p-4 outline-none focus:border-accent transition-all text-black text-sm md:text-base" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Subject</label>
                <input type="text" className="w-full bg-white border border-gray-200 p-3 md:p-4 outline-none focus:border-accent transition-all text-black text-sm md:text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Message</label>
                <textarea rows="6" className="w-full bg-white border border-gray-200 p-3 md:p-4 outline-none focus:border-accent transition-all resize-none text-black text-sm md:text-base"></textarea>
              </div>
              <button className="flex items-center justify-center gap-3 w-full py-4 md:py-5 bg-black text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-accent transition-all duration-300">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 w-full h-[300px] md:h-[500px] bg-secondary/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground flex-col gap-4 text-center px-6">
            <MapPin size={32} className="text-accent" />
            <p className="font-serif text-lg md:text-2xl uppercase tracking-widest">Google Maps Integration</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1673814582352!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
