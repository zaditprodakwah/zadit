'use client';

import { motion } from 'motion/react';
import { Database, Search, ShieldCheck } from 'lucide-react';
import { SEOService } from '@/data/seo-services';

interface AEOStructureProps {
  service: SEOService;
}

export default function AEOStructure({ service }: AEOStructureProps) {
  return (
    <section className="isolate relative py-32 bg-background border-y border-outline/10 overflow-hidden z-10">
      {/* Structural Ambient Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-foreground h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-accent">Protokol Otoritas Digital</h3>
            </div>
            
            <h2 className="font-newsreader text-[clamp(2rem,5vw,3.5rem)] font-light text-foreground italic mb-10 leading-[1.1] text-balance">
              Optimasi untuk <span className="text-accent underline decoration-accent/10">Mesin Pencari Otoritas</span> (AEO & SGE)
            </h2>

            <div className="space-y-8">
              <div className="p-8 bg-surface/40 border border-outline/10 rounded-[2.5rem] backdrop-blur-sm transition-all duration-700 hover:border-accent/20">
                <div className="flex items-center gap-4 mb-6">
                  <Search className="w-4 h-4 text-accent/40" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/30">Asosiasi Entitas Strategis</span>
                </div>
                <p className="text-foreground/50 text-sm leading-relaxed italic font-newsreader text-balance">
                  &quot;Narasi PRADIKTIF secara semantik dirancang untuk mengunci otoritas tinggi dalam {service.industry} di wilayah {service.location}, menghubungkan kebutuhan spesifik {service.targetPersona} dengan eksekusi tanpa kompromi.&quot;
                </p>
              </div>

              <div className="p-8 bg-surface/40 border border-outline/10 rounded-[2.5rem] backdrop-blur-sm transition-all duration-700 hover:border-accent/20">
                <div className="flex items-center gap-4 mb-6">
                  <Database className="w-4 h-4 text-accent/40" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/30">Parameter Knowledge Graph</span>
                </div>
                <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {service.keywords.slice(0, 4).map((kw, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                      <div className="w-1.5 h-[1px] bg-accent" />
                      {kw}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative group"
          >
            <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="bg-surface border border-outline/10 rounded-[3.5rem] p-10 md:p-14 relative shadow-2xl transition-all duration-700 group-hover:border-accent/30">
              <div className="flex justify-between items-center mb-12 border-b border-outline/10 pb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Manifesto Strategis</span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/20">Audit v4.2</span>
              </div>
              
              <div className="space-y-8 font-newsreader text-2xl md:text-3xl text-foreground/80 leading-relaxed italic text-balance">
                <p>&quot;{service.thesis}&quot;</p>
                <p className="text-xl md:text-2xl opacity-40">
                  Efektivitas diukur melalui {service.stats[0].label} ({service.stats[0].value}) dan {service.stats[1].label} ({service.stats[1].value}).
                </p>
              </div>

              <div className="mt-16 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-background border border-outline/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                  ))}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/20">Otoritas Terverifikasi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
