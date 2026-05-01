'use client';

import { motion } from 'motion/react';
import { AlertCircle, ArrowRight, Zap } from 'lucide-react';
import { useState } from 'react';
import WhatsAppForm from './WhatsAppForm';

interface OpportunityBannerProps {
  currencyFormatted: string;
  serviceH1: string;
  industry: string;
}

export default function OpportunityBanner({ currencyFormatted, serviceH1, industry }: OpportunityBannerProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="isolate mt-20 mb-20 relative overflow-hidden z-10"
      >
        {/* Prestige Decorative Layer */}
        <div className="absolute inset-0 bg-accent/5 border border-accent/10 rounded-[3rem]" />
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
          <Zap className="w-32 h-32 text-accent fill-accent" />
        </div>

        <div className="relative z-10 p-10 md:p-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-20 h-20 rounded-[2rem] bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20 shadow-inner">
            <AlertCircle className="w-10 h-10 text-accent animate-pulse" />
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <span className="px-3 py-1 bg-accent/20 text-[10px] font-black uppercase tracking-[0.4em] text-accent rounded-full border border-accent/10">Analisis Momentum</span>
              <h4 className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em] hidden md:block">Strategic Advantage Detected</h4>
            </div>
            <p className="font-newsreader text-2xl md:text-3xl text-foreground/70 leading-relaxed max-w-4xl italic text-balance">
              Dinamika instrumen pasar (<span className="text-accent font-bold">{currencyFormatted}</span>) menciptakan celah strategis. 
              Membangun otoritas digital melalui <span className="text-foreground font-bold underline decoration-accent/20 underline-offset-8">{serviceH1}</span> adalah langkah 
              <span className="italic"> hedging</span> reputasi paling efisien untuk sektor <span className="font-bold text-foreground">{industry}</span> saat ini.
            </p>
          </div>

          <button 
            onClick={() => setIsFormOpen(true)}
            className="group relative flex items-center gap-4 px-12 py-6 bg-accent text-background rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:shadow-[0_20px_50px_-10px_rgba(212,160,23,0.4)] transition-all duration-700 overflow-hidden"
          >
            <span className="relative z-10">Ambil Momentum</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
          </button>
        </div>
      </motion.div>
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialInterest="Analisis Momentum" />
    </>
  );
}
