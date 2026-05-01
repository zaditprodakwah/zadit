'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, ChevronRight, Sparkles, Lock } from 'lucide-react';
import { useRef, useState } from 'react';
import WhatsAppForm from './WhatsAppForm';

const investigationTiers = [
  {
    service: "Arsitektur Website Elite",
    price: "Private Quote",
    includes: "Copywriting Forensik, Design Boutique, Development"
  },
  {
    service: "Pitch Deck Investor",
    price: "Private Quote",
    includes: "12-15 Slide Strategis + Narasi Closing"
  },
  {
    service: "Dokumentasi Strategis",
    price: "Private Quote",
    includes: "Proposal Bisnis & Laporan Eksekutif"
  },
  {
    service: "Audit Investigatif",
    price: "Introductory Quote",
    includes: "Audit 360° + Konsultasi Privat 45 Menit"
  }
];

const protocols = [
  {
    name: "LITE Protocol",
    price: "Rp 2.5M - 7.5M",
    includes: ["Mini Audit Strategis", "Makalah S1 VIP", "Revisi Minor Tesis", "Adaptasi Template SOP"],
    tag: "Survival / Rapid Tier",
    sla: "1-3 Hari"
  },
  {
    name: "PRO Protocol",
    price: "Rp 8.5M - 15M",
    includes: ["Tesis S2 (Full Chapter)", "Pitch Deck Startup Basic", "Kajian Kebijakan Ringkas", "LAKIP Dasar"],
    tag: "Professional Tier",
    popular: true,
    sla: "4-7 Hari"
  },
  {
    name: "ELITE Protocol",
    price: "Rp 25M - 150M+",
    includes: ["Disertasi S3 / Scopus Q1", "ESG Sustainability Report", "RPJMD / Renstra Penuh", "Feasibility Study"],
    tag: "Institutional Tier",
    sla: "14-30 Hari"
  },
  {
    name: "RETAINER Protocol",
    price: "Rp 15M - 40M/Mo",
    includes: ["Monthly ESG Reporting", "C-Level Thought Leadership", "Dedicated R&D Support", "Priority 24/7 Access"],
    tag: "Strategic Retainer",
    sla: "Ongoing Support"
  }
];

export default function Pricing() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef} 
      id="pricing" 
      className="isolate relative py-40 px-margin bg-background z-10 border-t border-outline/10 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6 mb-10"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <p className="text-[11px] uppercase tracking-[0.6em] font-bold text-accent font-inter">
              Parameter Investasi
            </p>
            <div className="w-12 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-newsreader text-[clamp(2.5rem,6vw,5rem)] font-light text-foreground leading-[1.1] max-w-4xl text-balance"
          >
            Investasi Berbasis <span className="italic text-accent">Value.</span> <br />
            Tanpa Ambiguitas.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-lg text-foreground/40 max-w-xl leading-relaxed mt-8 text-balance"
          >
            Harga ditentukan oleh dampak strategis bagi bisnis Anda — dari efisiensi waktu eksekutif hingga pengamanan valuasi deal besar.
          </motion.p>
        </div>

        {/* Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {protocols.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-700 group ${
                pkg.popular 
                  ? "bg-surface/50 border-accent/40 shadow-2xl" 
                  : "bg-surface/20 border-outline/10 hover:border-accent/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-3 h-3" /> Most Recommended
                </div>
              )}
              
              <h3 className="font-newsreader text-3xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <div className="flex items-center gap-2 mb-2 text-foreground/90 italic font-newsreader">
                <p className="text-2xl font-bold">{pkg.price}</p>
              </div>
              <div className="flex justify-between items-center mb-10">
                <p className="text-[10px] text-accent font-black uppercase tracking-[0.4em]">{pkg.tag}</p>
                <p className="text-[9px] text-foreground/40 font-bold uppercase tracking-widest bg-foreground/5 px-3 py-1 rounded-full">{pkg.sla}</p>
              </div>
              
              <div className="w-full h-px bg-outline/10 mb-10 group-hover:bg-accent/10 transition-colors" />
              
              <ul className="space-y-5 mb-12 flex-1">
                {pkg.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-foreground/50 group-hover:text-foreground/70 transition-colors">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-accent/40 group-hover:text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setIsFormOpen(true)}
                className={`w-full py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all duration-500 ${
                pkg.popular 
                  ? "bg-accent text-background hover:shadow-2xl" 
                  : "bg-background text-foreground border border-outline/10 hover:border-accent hover:text-accent"
              }`}>
                Mulai Investigasi <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Specific Expertise */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-7 bg-surface/20 rounded-[3rem] p-12 border border-outline/10 flex flex-col"
          >
            <h3 className="font-newsreader text-4xl mb-12 text-foreground">Layanan Spesifik <span className="italic text-accent">A La Carte.</span></h3>
            <div className="space-y-10">
              {investigationTiers.map((sp, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-outline/5 pb-8 last:border-0 last:pb-0 group">
                  <div className="max-w-md">
                    <h4 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">{sp.service}</h4>
                    <p className="text-sm text-foreground/40 mt-3 leading-relaxed">{sp.includes}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[10px] text-foreground/20 uppercase font-black tracking-widest mb-2">Estimasi</p>
                    <p className="text-accent font-newsreader font-bold italic text-xl">{sp.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Retainer Architecture */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-accent/5 rounded-[3rem] p-10 border border-accent/10 flex-1 flex flex-col justify-center"
            >
              <h3 className="font-newsreader text-4xl mb-10 text-foreground text-center">Partnership <span className="italic text-accent">Retainer.</span></h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="text-center p-8 bg-background/40 rounded-[2rem] border border-outline/10 hover:border-accent/30 transition-all">
                  <h4 className="font-black text-[10px] text-accent uppercase tracking-[0.4em] mb-4">Strategic Pro</h4>
                  <p className="text-xl font-newsreader font-bold text-foreground mb-2 italic">Tailored Advisory</p>
                  <p className="text-[10px] text-foreground/30 uppercase tracking-[0.4em] font-black">20 Jam Prioritas</p>
                </div>
                <div className="text-center p-8 bg-background/40 rounded-[2rem] border border-outline/10 hover:border-accent/30 transition-all">
                  <h4 className="font-black text-[10px] text-accent uppercase tracking-[0.4em] mb-4">Executive Elite</h4>
                  <p className="text-xl font-newsreader font-bold text-foreground mb-2 italic">Unlimited Impact</p>
                  <p className="text-[10px] text-foreground/30 uppercase tracking-[0.4em] font-black">Full Ecosystem Access</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-surface/30 rounded-[3rem] p-10 border border-outline/10"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20 mb-8 text-center">Protokol Kerjasama</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 text-sm text-foreground/40 leading-relaxed"><div className="w-2 h-[1px] bg-accent mt-2.5 shrink-0" /> Komitmen Awal untuk preservasi jadwal & pengerjaan privat.</li>
                <li className="flex gap-4 text-sm text-foreground/40 leading-relaxed"><div className="w-2 h-[1px] bg-accent mt-2.5 shrink-0" /> Penyelesaian Administratif setelah approval draft final eksekutif.</li>
                <li className="flex gap-4 text-sm text-foreground/40 leading-relaxed"><div className="w-2 h-[1px] bg-accent mt-2.5 shrink-0" /> Garansi Integritas: Revisi mendalam hingga standar otoritas terpenuhi.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialInterest="Investasi Strategis" />
    </section>
  );
}
