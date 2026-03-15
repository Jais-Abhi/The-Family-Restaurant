"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

export default function ReservationPage() {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 2000);
  };

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <Navbar />
      
      <div className="pt-40 pb-24 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 text-black dark:text-white"
        >
          <span className="text-accent uppercase tracking-widest text-sm mb-6 block">Reservation</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-black dark:text-white">Secure Your <br />Table at L&apos;Élégance</h1>
          <p className="text-black/60 dark:text-white/60 text-lg font-light leading-relaxed mb-12 max-w-lg\">
            Whether it&apos;s a romantic dinner, a business lunch, or a special celebration, 
            we recommend booking in advance to ensure your preferred time.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-black/40 dark:text-white/40 text-xs uppercase tracking-widest\">Call Us Directly</p>
                <p className="text-xl font-serif text-black dark:text-white\">+1 (234) 567-8900</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-black/40 dark:text-white/40 text-xs uppercase tracking-widest\">Email Support</p>
                <p className="text-xl font-serif text-black dark:text-white\">bookings@lelegance.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 w-full"
        >
          {formState === "success" ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass p-12 text-center border-accent/40"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto mb-6 text-accent">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2 className="text-3xl font-serif text-black dark:text-white mb-4">Reservation Requested!</h2>
              <p className="text-black/60 dark:text-white/60 mb-8">We have received your request and will confirm your table shortly via email.</p>
              <button 
                onClick={() => setFormState("idle")}
                className="px-8 py-3 bg-accent text-charcoal font-bold uppercase tracking-widest text-xs"
              >
                Make Another Booking
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-charcoal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-widest flex items-center gap-2">
                    <User size={14} className="text-accent" /> Full Name
                  </label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-white dark:bg-charcoal border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white focus:border-accent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-widest flex items-center gap-2">
                    <Mail size={14} className="text-accent" /> Email Address
                  </label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-white dark:bg-charcoal border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white focus:border-accent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-widest flex items-center gap-2">
                    <Users size={14} className="text-accent" /> Guests
                  </label>
                  <select className="w-full bg-white dark:bg-charcoal border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white focus:border-accent outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-white dark:bg-charcoal text-black dark:text-white">2 Persons</option>
                    <option className="bg-white dark:bg-charcoal text-black dark:text-white">3 Persons</option>
                    <option className="bg-white dark:bg-charcoal text-black dark:text-white">4 Persons</option>
                    <option className="bg-white dark:bg-charcoal text-black dark:text-white">5+ Persons</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-black/60 dark:text-white/60 text-xs uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} className="text-accent" /> Date
                  </label>
                  <input required type="date" className="w-full bg-white dark:bg-charcoal border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white focus:border-accent outline-none transition-all cursor-pointer" />
                </div>
                <div className="space-y-2">
                  <label className="text-black/60 dark:text-white/60 text-xs uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-accent" /> Time
                  </label>
                  <input required type="time" className="w-full bg-white dark:bg-charcoal border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white focus:border-accent outline-none transition-all cursor-pointer" />
                </div>
                <div className="space-y-2">
                  <label className="text-black/60 dark:text-white/60 text-xs uppercase tracking-widest flex items-center gap-2">
                    <Phone size={14} className="text-accent" /> Phone
                  </label>
                  <input required type="tel" placeholder="+1 234 567 89" className="w-full bg-white dark:bg-charcoal border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white focus:border-accent outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-black/60 dark:text-white/60 text-xs uppercase tracking-widest">Special Requests (Optional)</label>
                <textarea rows="3" placeholder="Tell us about special occasions..." className="w-full bg-white dark:bg-charcoal border border-gray-200 dark:border-white/10 p-4 text-black dark:text-white focus:border-accent outline-none transition-all resize-none"></textarea>
              </div>
              <button 
                disabled={formState === "submitting"}
                className="w-full py-5 bg-accent text-charcoal font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? "Processing..." : "Confirm Reservation"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
