'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Play, Sparkles, ShieldCheck } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import WhatsAppForm from './WhatsAppForm';

export default function Hero() {
  const containerRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [audienceIndex, setAudienceIndex] = useState(0);

  const titles = [
    "Eksklusivitas Terukur.",
    "Otoritas Digital Absolut.",
    "Arsitektur Konversi Elite.",
    "Dampak Strategis Abadi.",
    "Presisi Narasi Global."
  ];

  const audiences = [
    "Founders & CEO Visioner",
    "Pemilik Klinik Spesialis",
    "Developer Properti Elite",
    "Senior Partner Firma Hukum",
    "Investor & High-Net-Worth Individuals"
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Zenith Pulse Engine: Synchronized Kinetic Rotation
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setAudienceIndex((prev) => (prev + 1) % audiences.length);
    }, 4500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Balanced Pacing for Scrollytelling
  const yText = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 150]);
  const yImage = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.9], isMobile ? [1, 1, 1] : [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], isMobile ? [1, 1] : [1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      id="beranda" 
      className="isolate relative min-h-[100dvh] bg-background overflow-hidden z-10 flex flex-col justify-center pt-[7rem] md:pt-[9rem] pb-32 md:pb-0"
    >
      {/* Narrative Canvas */}
      <div className="w-full h-full flex items-center overflow-hidden">
        
        {/* Refined Ambient Depth (No Neon) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <motion.div 
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, 300]),
            }}
            className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[180px]" 
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,37,64,0.02),transparent_70%)]" />
        </div>

        {/* Executive Content Architecture */}
        <div className="max-w-7xl mx-auto w-full px-margin flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-20">
          
          {/* Narrative Pillar */}
          <motion.div 
            style={{ opacity, scale, y: yText }}
            className="flex-[1.4] flex flex-col justify-center py-12 w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10 md:mb-16">
                <div className="w-10 h-[1.5px] bg-accent" />
                <p className="text-[11px] uppercase tracking-[0.8em] font-bold text-accent font-inter flex items-center gap-3">
                  Strategic Advisory Boutique
                </p>
              </div>
              
              <div className="min-h-[120px] md:min-h-[160px] flex items-center mb-8 md:mb-12">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={titleIndex}
                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-newsreader text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[1] md:leading-[0.9] tracking-tighter text-foreground text-balance"
                  >
                    {titles[titleIndex].split(' ').map((word, i) => (
                      <span key={i} className={i === 1 ? "italic text-accent" : ""}>
                        {word}{' '}
                      </span>
                    ))}
                  </motion.h1>
                </AnimatePresence>
              </div>
              
              <div className="min-h-[60px] mb-12 md:mb-16">
                <p className="font-inter text-xl md:text-3xl text-foreground/40 leading-tight md:leading-[1.1] text-balance">
                  Mitra strategis bagi{' '}
                  <span className="relative inline-block min-w-[200px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={audienceIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="text-foreground/90 font-medium whitespace-nowrap"
                      >
                        {audiences[audienceIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8 items-center pt-10 border-t border-outline/5">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="relative bg-accent text-background px-10 md:px-12 py-5 md:py-6 text-[12px] font-black uppercase tracking-[0.4em] rounded-full shadow-[0_20px_60px_-15px_rgba(212,160,23,0.4)] hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 group"
                >
                  Mulai Investigasi Strategis <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </button>
                
                <button 
                  className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.5em] text-foreground/40 hover:text-accent transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500">
                    <Play className="w-4 h-4 fill-accent text-accent translate-x-0.5" />
                  </div>
                  Lihat Showreel
                </button>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual Anchor */}
          <div className="flex-1 relative hidden lg:block">
            <motion.div 
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full rounded-[4rem] overflow-hidden border border-outline/10 bg-surface/30 backdrop-blur-sm group transition-all duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Muhzadit - Founder"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale hover:grayscale-0 contrast-[1.05] brightness-[0.9] hover:brightness-100 transition-all duration-[3000ms] ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Executive Credibility Card */}
              <motion.div 
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="absolute -bottom-10 -right-10 bg-surface/80 backdrop-blur-2xl p-8 rounded-[3rem] border border-outline/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] max-w-[320px] z-30"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl overflow-hidden border border-accent/20">
                      <Image src="https://picsum.photos/seed/ceo/200/200" alt="Founder" width={200} height={200} className="object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 border-4 border-background rounded-full flex items-center justify-center">
                       <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">Muhzadit</p>
                    <p className="text-[9px] text-accent font-black uppercase tracking-[0.4em] mt-1">Verified Founder</p>
                  </div>
                </div>
                <p className="font-newsreader text-xl text-foreground/60 leading-relaxed italic">
                  &quot;Kami membangun otoritas digital yang tidak hanya terlihat mewah, tapi juga memenangkan tender.&quot;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Progress Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-outline/10">
           <motion.div 
             style={{ scaleX: scrollYProgress }}
             className="h-full bg-accent origin-left w-full"
           />
        </div>
      </div>

      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
