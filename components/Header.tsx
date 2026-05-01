'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState('text-base');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Sync theme and font size on mount
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';
    if (isDarkMode) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    const savedFontSize = localStorage.getItem('fontSize') || 'text-base';
    if (savedFontSize !== 'text-base') {
      setFontSize(savedFontSize);
      document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg');
      document.documentElement.classList.add(savedFontSize);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const changeFontSize = (size: string) => {
    document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg');
    document.documentElement.classList.add(size);
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-outline/10 py-4' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group" aria-label="PRADIKTIF Home">
          <div className="relative">
            <div className="w-10 h-10 border border-accent/30 rounded-lg flex items-center justify-center text-accent text-[10px] font-black tracking-tighter transition-all duration-700 group-hover:bg-accent group-hover:text-background">
              PR.
            </div>
            <div className="absolute -inset-2 bg-accent/5 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </div>
          <span className="font-newsreader text-2xl font-medium tracking-tight text-foreground">
            PRADI<span className="italic text-accent">KTIF.</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.3em] font-bold text-foreground/70 transition-all duration-500">
          {['Layanan', 'Portofolio', 'Assessment', 'Kontak'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-outline/50"></div>
          
          {/* Accessibility Controls */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 bg-foreground/5 rounded-full p-1 border border-outline/30">
              {['text-sm', 'text-base', 'text-lg'].map((size, idx) => (
                <button
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${fontSize === size ? 'bg-foreground text-background scale-110 shadow-lg' : 'hover:bg-foreground/10 text-foreground/30'}`}
                  aria-label={`Change font size to ${size.split('-')[1]}`}
                >
                  <span className={idx === 0 ? 'text-[9px]' : idx === 1 ? 'text-[11px]' : 'text-[13px]'}>A</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={toggleTheme} 
              className="p-2.5 bg-foreground/5 border border-outline/30 rounded-full hover:bg-accent hover:text-white transition-all duration-500 shadow-sm"
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {}} 
            className="hidden lg:block bg-foreground text-background px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-xl"
          >
            Mulai Konsultasi
          </button>
          
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
