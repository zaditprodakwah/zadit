'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Download, Lock, CheckCircle, Loader2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function LeadMagnet() {
  const [requesting, setRequesting] = useState<number | null>(null);
  const [success, setSuccess] = useState<number | null>(null);

  const resources = [
    {
      title: "10 Kesalahan Fatal Pitch Deck Investor",
      desc: "Kesalahan krusial yang menyebabkan penolakan instan — dianalisis dengan standar forensik dari 100+ kegagalan.",
      type: "INTERNAL_DOC",
      pages: "42 Pages",
      security: "AES-256 Encrypted"
    },
    {
      title: "Blueprint Website Otoritas Elite",
      desc: "Arsitektur landing page yang dirancang untuk membangun trust instan bagi audiens High-Net-Worth.",
      type: "STRATEGIC_BLUEPRINT",
      pages: "12 Modules",
      security: "Auto-Destruct Enabled"
    }
  ];

  const handleRequest = (index: number) => {
    if (success === index) return;
    setRequesting(index);
    setTimeout(() => {
      setRequesting(null);
      setSuccess(index);
    }, 1800);
  };

  return (
    <section 
      id="resources" 
      className="isolate relative py-40 px-margin bg-background z-10 border-t border-outline/10 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 items-center relative z-10">
        
        {/* Narrative Side */}
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-12">
               <div className="w-12 h-[1px] bg-accent" />
                <p className="text-[11px] uppercase tracking-[0.6em] font-bold text-accent">Strategic Repository</p>
            </div>
            <h2 className="font-newsreader text-[clamp(2.5rem,6vw,5rem)] mb-10 text-foreground leading-[0.9] tracking-tighter text-balance">
              Akses <span className="italic text-accent">Repositori Strategis.</span>
            </h2>
            <p className="font-inter text-foreground/40 text-lg leading-relaxed max-w-md border-l border-outline/20 pl-8 text-balance">
              Strategi internal yang kami gunakan untuk mengamankan valuasi dan mengoptimasi konversi profit klien elite. Terbatas untuk 50 akses per bulan.
            </p>
          </motion.div>
        </div>

        {/* Vault Side */}
        <div className="flex-1 w-full space-y-8">
          {resources.map((r, i) => (
            <motion.div 
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1 }}
              onClick={() => handleRequest(i)}
              className={`group p-10 md:p-12 bg-surface/30 backdrop-blur-md border rounded-[3rem] transition-all duration-700 relative overflow-hidden cursor-pointer ${
                success === i ? 'border-emerald-500/30' : 'border-outline/10 hover:border-accent/30 hover:shadow-2xl'
              }`}
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.02] rotate-12 pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
                 <Lock className="w-32 h-32" />
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[9px] font-bold text-accent uppercase tracking-[0.4em]">{r.type}</span>
                    <span className="w-1 h-1 rounded-full bg-outline/20" />
                    <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-[0.4em]">{r.pages}</span>
                  </div>
                  <h3 className="font-newsreader text-3xl mb-4 text-foreground group-hover:text-accent transition-colors text-balance">{r.title}</h3>
                  <p className="font-inter text-sm text-foreground/40 leading-relaxed max-w-sm group-hover:text-foreground/60 transition-colors text-balance">{r.desc}</p>
                  
                  <div className="flex items-center gap-4 mt-8 opacity-40 group-hover:opacity-80 transition-opacity">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/50">{r.security}</span>
                  </div>
                </div>

                <div className={`w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-700 shadow-xl flex-shrink-0 ${
                  success === i ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-background border-outline/10 text-foreground group-hover:bg-accent group-hover:border-accent group-hover:text-background'
                }`}>
                  <AnimatePresence mode="wait">
                    {requesting === i ? (
                      <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </motion.div>
                    ) : success === i ? (
                      <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <CheckCircle className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Download className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Status Interaction */}
              <AnimatePresence>
                {success === i && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-10 pt-10 border-t border-outline/5 flex flex-col md:flex-row items-center justify-between gap-6"
                  >
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.3em]">Otorisasi Berhasil — Tautan Dekripsi Aktif</p>
                    <Link href="#" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-foreground hover:text-accent transition-colors">
                      Dekripsi Sekarang <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-3 px-6 py-3 bg-surface/50 rounded-full border border-outline/10">
              <Zap className="w-3.5 h-3.5 text-accent" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/40">30-Day Auto-Destruct Enabled</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-surface/50 rounded-full border border-outline/10">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/40">Military Grade AES-256</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
