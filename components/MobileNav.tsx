'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Home, MessageCircle, Settings, X, Moon, Sun, ChevronUp, ExternalLink, LayoutGrid, Zap } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import WhatsAppForm from './WhatsAppForm';

const navItems = [
  { id: 'beranda', label: 'Home', icon: Home },
  { id: 'navigator', label: 'Indeks', icon: LayoutGrid },
  { id: 'chat', label: 'Assess', icon: MessageCircle },
  { id: 'config', label: 'Config', icon: Settings },
];

const sections = [
  { id: 'beranda', label: 'Elite Portal', subtitle: 'Pintu Masuk Strategis' },
  { id: 'about', label: 'Investigasi Strategis', subtitle: 'Metodologi Forensik' },
  { id: 'layanan', label: 'Layanan Boutique', subtitle: 'Eksekusi Otoritatif' },
  { id: 'pendekatan', label: 'Protokol Eksekusi', subtitle: 'Pipeline Elite' },
  { id: 'portofolio', label: 'Kinerja Nyata', subtitle: 'Data & Hasil Audit' },
  { id: 'pricing', label: 'Investasi Value', subtitle: 'Parameter & Tier' },
];

export default function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { theme, toggleTheme, fontSize, setFontSize } = useTheme();
  const [activeSection, setActiveSection] = useState('beranda');
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 600);
    
    // Section Detection
    let current = 'beranda';
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200) current = section.id;
      }
    }
    setActiveSection(current);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile App Architecture */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] pb-8 px-6 pointer-events-none">
        
        {/* Back to Top - Refined */}
        <AnimatePresence>
          {showBackToTop && !showMenu && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute -top-16 right-6 w-12 h-12 bg-background border border-outline/20 text-accent rounded-full flex items-center justify-center shadow-xl pointer-events-auto active:scale-90 transition-all"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Global Navigation Bar */}
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto mx-auto max-w-sm bg-background/90 backdrop-blur-2xl border border-outline/20 shadow-2xl rounded-[3rem] p-2 flex items-center justify-between"
        >
          {navItems.map((item) => {
            const isActive = (item.id === 'beranda' && activeSection === 'beranda') || (item.id === 'navigator' && showMenu);
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'beranda') { scrollTo('beranda'); setShowMenu(false); }
                  if (item.id === 'navigator' || item.id === 'config') setShowMenu(true);
                  if (item.id === 'chat') setIsFormOpen(true);
                }}
                className={`relative flex-1 flex flex-col items-center py-4 gap-1.5 transition-all duration-500 ${
                  isActive ? 'text-accent' : 'text-foreground/30 hover:text-foreground/60'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`} />
                <span className={`text-[8px] font-black uppercase tracking-[0.2em] transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                  {item.label}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="mobile-active-pill"
                    className="absolute inset-0 bg-accent/5 rounded-[2.5rem] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Control Intelligence Drawer */}
      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-xl z-[110]"
            />
            <motion.div
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100) setShowMenu(false);
              }}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-surface border-t border-outline/10 rounded-t-[4rem] z-[120] max-h-[90vh] overflow-y-auto shadow-2xl pb-12"
            >
              <div className="w-12 h-1.5 bg-outline/10 rounded-full mx-auto my-6" />
              
              <div className="px-10 py-4 space-y-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-newsreader text-4xl italic text-foreground">Indeks Strategis</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mt-2">Executive Navigation Terminal</p>
                  </div>
                  <button 
                    onClick={() => setShowMenu(false)}
                    className="w-12 h-12 bg-background border border-outline/10 rounded-full flex items-center justify-center text-foreground/30 hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Section Intelligence */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">
                    <LayoutGrid className="w-3.5 h-3.5" /> Navigation Map
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {sections.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          scrollTo(s.id);
                          setShowMenu(false);
                        }}
                        className={`p-6 rounded-[2.5rem] text-left border transition-all duration-700 ${
                          activeSection === s.id 
                            ? 'bg-accent/5 border-accent/40 text-accent' 
                            : 'bg-background/40 border-outline/5 text-foreground/40'
                        }`}
                      >
                        <p className="text-[8px] font-black uppercase tracking-widest opacity-50 mb-1">Access</p>
                        <p className="text-sm font-bold font-newsreader italic leading-tight">{s.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* System Configuration */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">
                    <Settings className="w-3.5 h-3.5" /> Intelligence Settings
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => theme !== 'light' && toggleTheme()}
                        className={`p-6 rounded-[2.5rem] border flex items-center gap-4 transition-all duration-700 ${theme === 'light' ? 'bg-accent/5 border-accent/40 text-accent' : 'bg-background/20 border-outline/5 text-foreground/30'}`}
                      >
                        <Sun className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Light</span>
                      </button>
                      <button 
                        onClick={() => theme !== 'dark' && toggleTheme()}
                        className={`p-6 rounded-[2.5rem] border flex items-center gap-4 transition-all duration-700 ${theme === 'dark' ? 'bg-accent/5 border-accent/40 text-accent' : 'bg-background/20 border-outline/5 text-foreground/30'}`}
                      >
                        <Moon className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Dark</span>
                      </button>
                    </div>

                    <div className="flex bg-background/40 rounded-[2.5rem] p-2 border border-outline/5">
                      {['text-sm', 'text-base', 'text-lg'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setFontSize(size as any)}
                          className={`flex-1 py-4 rounded-[2rem] text-[9px] font-black uppercase tracking-widest transition-all duration-700 ${fontSize === size ? 'bg-accent text-background shadow-lg' : 'text-foreground/30'}`}
                        >
                          {size.split('-')[1]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Secure Contact Entry */}
                <button 
                  onClick={() => {
                    setShowMenu(false);
                    setIsFormOpen(true);
                  }}
                  className="w-full py-6 rounded-full bg-accent text-background flex items-center justify-center gap-4 font-black uppercase tracking-[0.4em] text-[12px] shadow-2xl shadow-accent/10"
                >
                  <Zap className="w-4 h-4" /> Start Investigation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}

