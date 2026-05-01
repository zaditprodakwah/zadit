'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { UserCheck, Zap, BarChart3, Search, Target, Layers, Award, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import WhatsAppForm from './WhatsAppForm';

const investigationSteps = [
  {
    title: "Analisis Forensik Naratif",
    tag: "Tahap Eksplorasi",
    icon: Search,
    desc: "Kami membedah alasan eksistensi bisnis Anda melalui lensa forensik. Kami menemukan celah di mana narasi lama gagal meyakinkan, dan membangun kembali fondasi otoritas Anda yang tak tertandingi.",
    impact: "Otoritas Absolut"
  },
  {
    title: "Pemetaan Psikologi Elite",
    tag: "Tahap Strategis",
    icon: Target,
    desc: "Memetakan pemicu psikologis audiens premium Anda. Kami memastikan setiap elemen digital terasa seperti jawaban personal bagi investor dan klien papan atas.",
    impact: "Resonansi Eksklusif"
  },
  {
    title: "Arsitektur Konversi Strategis",
    tag: "Tahap Konstruksi",
    icon: Layers,
    desc: "Setiap pixel adalah instrumen konversi. Kami merancang alur informasi yang memandu audiens menuju keputusan 'YES' tanpa hambatan logis.",
    impact: "Konversi Tanpa Friksi"
  },
  {
    title: "Validasi Dampak Bisnis",
    tag: "Tahap Finalisasi",
    icon: BarChart3,
    desc: "Kami menetapkan parameter sukses yang jelas. Memastikan setiap output memiliki dampak nyata pada valuasi, closing tender, atau efisiensi operasional.",
    impact: "Hasil Terukur"
  }
];

export default function About() {
  const [showCV, setShowCV] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="isolate relative bg-background z-10 border-t border-outline/10 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"
    >
      
      {/* Sticky Narrative Architecture */}
      <div className="relative h-auto md:sticky md:top-0 md:h-screen flex items-center overflow-hidden py-24 md:py-0">
        
        {/* Subtle Ambient Depth */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-accent/5 rounded-full blur-[180px] -z-10" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-margin w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Fixed Narrative Pillar */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-[1px] bg-accent" />
                  <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-accent">Metodologi Investigasi Strategis</span>
                </div>
                <h2 className="font-newsreader text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-light text-foreground text-balance">
                  Proses yang <br className="hidden sm:block" />
                  <span className="italic text-accent">Mendefinisikan</span> <br className="hidden sm:block" />
                  Masa Depan.
                </h2>
                <p className="font-inter text-lg text-foreground/40 max-w-sm leading-relaxed text-balance">
                  Kami melampaui estetika konvensional untuk menemukan esensi bisnis Anda. Setiap langkah dirancang untuk membangun narasi otoritatif.
                </p>
                
                <button 
                  onClick={() => setShowCV(true)}
                  className="group flex items-center gap-6 px-10 py-5 bg-surface border border-outline/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-foreground hover:bg-accent hover:text-background transition-all duration-500 shadow-xl"
                >
                  Founder Profile <UserCheck className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right: Scrolling Investigation Stages */}
            <div className="relative h-[50vh] sm:h-[60vh] flex flex-col justify-center w-full">
               <div className="relative h-full w-full">
                  {investigationSteps.map((step, i) => {
                    const start = i / investigationSteps.length;
                    const end = (i + 1) / investigationSteps.length;
                    return (
                      <StepCard 
                        key={i} 
                        step={step} 
                        index={i} 
                        progress={scrollYProgress} 
                        range={[start, end]}
                        isMounted={mounted} 
                      />
                    );
                  })}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pacing Spacer */}
      <div className="hidden md:block h-[60vh]" />

      {/* Founder CV Vault */}
      <AnimatePresence>
        {showCV && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/98 backdrop-blur-3xl"
            onClick={() => setShowCV(false)}
          >
            <motion.div 
              initial={{ scale: 0.98, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 20 }}
              className="bg-surface w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto border border-outline/10 relative shadow-2xl rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-20 scrollbar-hide flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowCV(false)}
                className="absolute top-10 right-10 text-foreground/40 hover:text-accent transition-all p-3 hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Profile Architecture */}
                <div className="lg:col-span-4 space-y-10">
                  <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden border border-outline/10 shadow-2xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                      alt="Muhzadit" 
                      fill 
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="font-newsreader text-4xl font-bold text-foreground mb-2">Muhzadit</h3>
                    <p className="font-inter text-[10px] font-black uppercase tracking-[0.4em] text-accent">Lead Strategist & Director</p>
                  </div>
                </div>

                {/* Narrative Detail */}
                <div className="lg:col-span-8 space-y-12">
                   <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20 flex items-center gap-4">
                        <Award className="w-4 h-4 text-accent" /> Professional Credibility
                      </h4>
                      <p className="font-newsreader text-3xl italic text-foreground/80 leading-relaxed text-balance">
                        &quot;Membantu eksekutif memangkas kompleksitas agensi tradisional melalui framework personal 1-on-1.&quot;
                      </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 border-b border-outline/10 pb-4">Core Competencies</h4>
                        <ul className="space-y-4">
                          {['SEO Copywriting Architecture', 'Business Narrative Design', 'Conversion Optimization', 'Executive Digital Presence'].map(s => (
                            <li key={s} className="text-sm font-medium text-foreground/50 flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent/30" /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 border-b border-outline/10 pb-4">Track Record</h4>
                        <div className="space-y-6">
                           <div>
                              <p className="text-sm font-bold text-foreground">Founder PRADIKTIF</p>
                              <p className="text-[10px] text-accent uppercase tracking-widest mt-1">PT Prisma Digital Kreatif</p>
                           </div>
                           <div>
                              <p className="text-sm font-bold text-foreground">Strategic Lead</p>
                              <p className="text-[10px] text-foreground/40 uppercase tracking-widest mt-1">Al-Bahjah Foundation Executive Office</p>
                           </div>
                        </div>
                      </div>
                   </div>

                   <div className="pt-10">
                      <button 
                        onClick={() => setIsFormOpen(true)}
                        className="inline-block w-full text-center px-10 py-6 bg-accent text-background rounded-full font-black uppercase tracking-[0.4em] text-[12px] hover:shadow-2xl transition-all duration-700"
                      >
                        Book Strategic Session →
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}

function StepCard({ step, index, progress, range, isMounted }: { step: any, index: number, progress: any, range: [number, number], isMounted: boolean }) {
  const Icon = step.icon;
  const isMobile = isMounted && typeof window !== 'undefined' && window.innerWidth < 768;

  const opacity = useTransform(progress, [Math.max(0, range[0] - 0.05), Math.max(0, range[0]), Math.min(1, range[1]), Math.min(1, range[1] + 0.05)], isMobile ? [1, 1, 1, 1] : [0, 1, 1, 0]);
  const y = useTransform(progress, [Math.max(0, range[0] - 0.05), Math.max(0, range[0]), Math.min(1, range[1])], isMobile ? [0, 0, 0] : [20, 0, -20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="relative md:absolute md:inset-0 flex flex-col justify-center mb-32 md:mb-0"
    >
      <div className="space-y-10">
        <div className="flex items-center gap-8">
           <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center border border-accent/10">
              <Icon className="w-8 h-8 text-accent" />
           </div>
           <div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent/50 block mb-2">{step.tag}</span>
              <h4 className="font-newsreader text-4xl lg:text-5xl text-foreground font-bold text-balance">{step.title}</h4>
           </div>
        </div>
        
        <p className="font-inter text-2xl text-foreground/40 leading-relaxed max-w-xl italic text-balance">
          &quot;{step.desc}&quot;
        </p>

        <div className="flex items-center gap-4 pt-8 border-t border-outline/10 w-fit">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-accent/80 italic">{step.impact}</span>
        </div>
      </div>
    </motion.div>
  );
}
