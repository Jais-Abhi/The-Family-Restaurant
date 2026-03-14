"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand info */}
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tighter text-accent">
            L&apos;ÉLÉGANCE
          </Link>
          <p className="text-white/60 leading-relaxed font-light">
            Founded in 1995, L&apos;Élégance has been the pinnacle of culinary excellence, 
            blending traditional techniques with modern innovation to create 
            an unforgettable dining experience.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-charcoal transition-all duration-300">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-charcoal transition-all duration-300">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-charcoal transition-all duration-300">
              <Twitter size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-xl font-serif font-semibold text-accent">Quick Links</h4>
          <ul className="space-y-4 text-white/60">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/menu" className="hover:text-accent transition-colors">Menu</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link href="/reservation" className="hover:text-accent transition-colors">Reservation</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-xl font-serif font-semibold text-accent">Contact Us</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-accent shrink-0 mt-1" />
              <span>123 Culinary Avenue, Gourmet City, GC 54321</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-accent shrink-0" />
              <span>+1 (234) 567-8900</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-accent shrink-0" />
              <span>contact@lelegance.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="space-y-6">
          <h4 className="text-xl font-serif font-semibold text-accent">Opening Hours</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-start space-x-3">
              <Clock size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">Mon - Fri:</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Clock size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">Sat - Sun:</p>
                <p>10:00 AM - 12:00 AM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} L&apos;Élégance Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
