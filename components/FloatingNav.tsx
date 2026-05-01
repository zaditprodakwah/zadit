'use client';

import { motion, AnimatePresence, useScroll, useMotionValue, useSpring } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Home, User, Zap, Briefcase, FolderRoot, CreditCard, MessageSquare, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'beranda', label: 'Beranda', icon: Home, desc: 'Pilar Strategis Utama' },
  { id: 'about', label: 'Metodologi', icon: Zap, desc: 'Investigasi Strategis' },
  { id: 'pendekatan', label: 'Eksekusi', icon: Target, desc: 'Protokol Forensik' },
  { id: 'layanan', label: 'Layanan', icon: Briefcase, desc: 'Solusi Arsitektur' },
  { id: 'portofolio', label: 'Portofolio', icon: FolderRoot, desc: 'Hasil Terukur' },
  { id: 'pricing', label: 'Investasi', icon: CreditCard, desc: 'Struktur Harga' },
  { id: 'kontak', label: 'Kontak', icon: MessageSquare, desc: 'Sesi Strategis' },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for Active Section Tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0% -60% 0%',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setIsScrolling(false), 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for click-away */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/20 backdrop-blur-[2px] z-[-1]"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="mb-6 bg-surface/95 backdrop-blur-2xl border border-outline/20 rounded-[2.5rem] p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] w-[280px] md:w-[340px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline/10 flex-shrink-0">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Strategic Portal</span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-white/10 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Navigation Area */}
              <nav className="space-y-2 max-h-[350px] overflow-y-auto pr-2 scrollbar-hide">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "w-full group flex items-center gap-4 p-4 rounded-2xl transition-all duration-500",
                      activeSection === item.id 
                        ? "bg-accent text-background shadow-lg" 
                        : "hover:bg-white/5 text-foreground/60 hover:text-foreground"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500",
                      activeSection === item.id ? "bg-background/20" : "bg-white/5 group-hover:bg-accent/10"
                    )}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-black uppercase tracking-widest">{item.label}</p>
                      <p className={cn(
                        "text-[9px] mt-0.5 opacity-60",
                        activeSection === item.id ? "text-background" : "text-foreground/40"
                      )}>{item.desc}</p>
                    </div>
                    <ChevronRight className={cn(
                      "w-3 h-3 ml-auto opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0",
                      activeSection === item.id && "opacity-100 translate-x-0"
                    )} />
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-4 border-t border-outline/10 flex-shrink-0">
                 <p className="text-[8px] font-bold text-center text-foreground/20 uppercase tracking-[0.5em]">Pradiktif v2026.05</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-700 relative overflow-hidden group",
          isOpen ? "bg-foreground text-background" : "bg-accent text-background"
        )}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Active Indicator Pulse */}
        <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping opacity-20 pointer-events-none" />
      </motion.button>
    </div>
  );
}
