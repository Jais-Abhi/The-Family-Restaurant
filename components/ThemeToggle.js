'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const toggleRef = useRef(null);
  const iconRef = useRef(null);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    // GSAP animation for the toggle button
    gsap.to(iconRef.current, {
      rotation: 360,
      duration: 0.6,
      ease: 'back.out',
    });

    // Scale animation
    gsap.to(toggleRef.current, {
      scale: 0.9,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
    });

    toggleTheme();
  };

  return (
    <button
      ref={toggleRef}
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <div ref={iconRef} className="w-6 h-6">
        {theme === 'light' ? (
          <Moon className="w-full h-full" />
        ) : (
          <Sun className="w-full h-full" />
        )}
      </div>
    </button>
  );
}
