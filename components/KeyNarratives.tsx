'use client';

import { motion } from 'motion/react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { SEOService } from '@/data/seo-services';

interface KeyNarrativesProps {
  service: SEOService;
}

export default function KeyNarratives({ service }: KeyNarrativesProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${service.title} for ${service.industry}: ${service.thesis}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="isolate relative my-24 p-10 md:p-14 rounded-[3rem] bg-surface border border-outline/10 overflow-hidden group shadow-2xl transition-all duration-700 hover:border-accent/30"
    >
      {/* Decorative Brand Mark */}
      <div className="absolute -top-10 -right-10 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
        <Sparkles className="w-48 h-48 text-accent" />
      </div>

      <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-10 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/10">
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-accent">Tesis Naratif Strategis</h3>
      </div>

      <div className="relative">
        <p className="font-newsreader text-2xl md:text-4xl font-light text-foreground leading-[1.3] mb-12 text-balance italic">
          &quot;{service.thesis}&quot;
        </p>

        <button 
          onClick={handleCopy}
          className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 hover:text-accent transition-all duration-500"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Manifesto Tersalin' : 'Salin Manifesto Strategis'}
        </button>
      </div>

      <div className="mt-12 pt-10 border-t border-outline/10 flex flex-wrap gap-4">
        <div className="px-6 py-2.5 bg-background rounded-full border border-outline/5 text-[9px] font-black uppercase tracking-widest text-foreground/30">
          Sumber: Intelijen Strategis PRADIKTIF
        </div>
        <div className="px-6 py-2.5 bg-background rounded-full border border-outline/5 text-[9px] font-black uppercase tracking-widest text-foreground/30">
          Konteks: {service.industry} Mastery
        </div>
      </div>
    </motion.div>
  );
}
