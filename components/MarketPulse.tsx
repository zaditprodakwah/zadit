'use client';

import { motion } from 'motion/react';
import { Globe, ArrowUpRight, Activity, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import { MarketPulseData } from '@/lib/external-data';

interface MarketPulseProps {
  data: MarketPulseData;
  industry: string;
}

export default function MarketPulse({ data, industry }: MarketPulseProps) {
  return (
    <div className="my-32 isolate relative group/terminal z-10">
      {/* Subtle Prestige Glow */}
      <div className="absolute -inset-10 bg-accent/5 rounded-[4rem] blur-[120px] opacity-30 group-hover/terminal:opacity-60 transition-all duration-1000" />
      
      <div className="bg-surface border border-outline/10 rounded-[3.5rem] overflow-hidden relative shadow-2xl transition-all duration-1000 group-hover:border-accent/30">
        {/* Intelligence Header */}
        <div className="bg-background/50 border-b border-outline/10 px-10 py-6 flex justify-between items-center backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-outline/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-outline/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
            </div>
            <div className="h-5 w-[1px] bg-outline/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">Market Intelligence Terminal</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-accent flex items-center gap-6">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Live Context
            </span>
            <span className="text-foreground/10 hidden md:inline font-mono">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        <div className="p-10 md:p-16">
          {/* Executive Data Ticker */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div className="flex-1">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-10 h-[1px] bg-accent" />
                <h2 className="font-newsreader text-4xl md:text-5xl text-foreground font-light tracking-tight italic text-balance">
                  Analisis Strategis: <span className="text-accent underline decoration-accent/10">{industry}</span>
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-x-16 gap-y-8">
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.4em]">Volatilitas</p>
                  <p className={`text-sm font-black tracking-widest ${data.technical.volatility === 'HIGH' ? 'text-red-500/80' : 'text-emerald-500/80'}`}>
                    {data.technical.volatility}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.4em]">Sentimen</p>
                  <p className="text-sm font-black text-foreground/80 tracking-widest">{data.technical.sentiment}% POSITIVE</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.4em]">Momentum</p>
                  <p className="text-sm font-black text-accent tracking-widest">{data.technical.momentum}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.4em]">Indeks RSI</p>
                  <p className="text-sm font-black text-foreground/80 tracking-widest">{data.technical.rsi}</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-outline/10 p-8 rounded-3xl flex items-center gap-8 w-full md:w-auto shadow-xl">
               <div className="w-14 h-14 rounded-2xl border border-accent/10 flex items-center justify-center bg-accent/5">
                 <Globe className="w-7 h-7 text-accent" />
               </div>
               <div>
                  <p className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.4em] mb-2">USD / IDR Index</p>
                  <p className="text-2xl font-bold text-foreground tracking-tight">
                    {data.currency.rate.toLocaleString('id-ID')}
                    <span className={`ml-3 text-sm ${data.currency.trend === 'up' ? 'text-red-500/60' : 'text-emerald-500/60'}`}>
                      {data.currency.trend === 'up' ? '▲' : '▼'}
                    </span>
                  </p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Intel Feed */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Activity className="w-4 h-4 text-accent/40" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">Aliran Intelijen Global</h3>
              </div>
              
              <div className="space-y-4">
                {data.news.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group/item flex items-center gap-6 bg-background/40 border border-outline/5 p-6 rounded-[2rem] hover:bg-background/80 hover:border-accent/20 hover:translate-x-1 transition-all duration-500 cursor-pointer"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent/30 group-hover/item:bg-accent transition-colors" />
                    <div className="flex-1">
                      <p className="text-[9px] font-black text-foreground/10 uppercase tracking-widest mb-2">{item.source} • {item.date}</p>
                      <p className="text-base text-foreground/60 group-hover/item:text-foreground transition-colors leading-relaxed font-newsreader italic">{item.title}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-foreground/10 group-hover/item:text-accent transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Strategic Directive */}
            <div className="lg:col-span-5">
              <div className="h-full flex flex-col bg-accent/5 border border-accent/10 rounded-[3rem] p-10 md:p-14 relative overflow-hidden group/directive">
                <div className="absolute -top-10 -right-10 p-10 opacity-[0.03] group-hover/directive:opacity-[0.08] transition-opacity duration-1000">
                  <ShieldCheck className="w-48 h-48 text-accent" />
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-10 text-accent">
                    <Zap className="w-5 h-5 fill-accent/10" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em]">Direktif Strategis</h3>
                  </div>
                  
                  <blockquote className="font-newsreader text-2xl md:text-3xl text-foreground/80 leading-[1.3] italic mb-12 text-balance">
                    &quot;{data.insight}&quot;
                  </blockquote>

                  <div className="mt-auto pt-10 border-t border-accent/10">
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Skor Dampak Strategis</span>
                      <span className="text-[11px] font-black text-accent tracking-widest">9.4 / 10.0</span>
                    </div>
                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden mb-10 shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '94%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, ease: "circOut" }}
                        className="h-full bg-accent shadow-[0_0_20px_rgba(212,160,23,0.5)]"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-background/40 p-5 rounded-2xl border border-outline/5 shadow-sm">
                        <p className="text-[8px] font-black text-foreground/10 uppercase tracking-[0.4em] mb-2">Alpha Return</p>
                        <p className="text-lg font-black text-emerald-500/60 tracking-tight">+22.4%</p>
                      </div>
                      <div className="bg-background/40 p-5 rounded-2xl border border-outline/5 shadow-sm">
                        <p className="text-[8px] font-black text-foreground/10 uppercase tracking-[0.4em] mb-2">Mitigasi Risiko</p>
                        <p className="text-lg font-black text-accent tracking-tight">Presisi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Insight Footer */}
        <div className="bg-background/30 border-t border-outline/5 py-4 overflow-hidden flex">
           <motion.div 
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
             className="flex w-max"
           >
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-20 whitespace-nowrap px-10">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-20 text-[9px] font-black text-foreground/5 uppercase tracking-[0.6em]">
                      <span className="text-accent/20">PRADIKTIF INTEL &gt;&gt;</span>
                      <span>Otoritas Naratif Terverifikasi</span>
                      <span>Stabilitas Sistem Optimal</span>
                      <span>Enkripsi Data Kelas Institusi</span>
                      <span>Algoritma Protokol AEO v4.2</span>
                      <span className="text-emerald-500/10">Koneksi Aman</span>
                    </div>
                  ))}
                </div>
              ))}
           </motion.div>
        </div>
      </div>
    </div>
  );
}
