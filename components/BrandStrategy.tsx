'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Search, Cpu, User, ShieldCheck, FileCheck, ArrowRight, Zap } from 'lucide-react';
import WhatsAppForm from './WhatsAppForm';

const pipelineStages = [
  {
    number: '01',
    title: 'Intelligence Intake\n& Gap Analysis.',
    tag: 'Diagnosis & Scoping',
    desc: 'Kami melakukan bedah risiko instan untuk memetakan kelemahan metodologi atau risiko audit pada data Anda sebelum memberikan penawaran.',
    impact: 'Risk Exposure Mapping',
    icon: Search
  },
  {
    number: '02',
    title: 'Computational\nSynthesis Engine.',
    tag: 'The Engine Synthesis',
    desc: 'Ekstraksi literatur global dan data crunching secara kilat. Memangkas waktu riset fundamental hingga 70% dengan akurasi traceable.',
    impact: 'Logika Deduktif Solid',
    icon: Cpu
  },
  {
    number: '03',
    title: 'Lead Consultant\nExpert Injection.',
    tag: 'Strategic Narrative',
    desc: 'Muhzadit menyuntikkan analisis mendalam dan business storytelling. Mengubah data kuantitatif menjadi narasi persuasif tingkat C-Level.',
    impact: 'Otoritas Naratif Absolut',
    icon: User
  },
  {
    number: '04',
    title: 'Forensic QA\n& Syntax Detox.',
    tag: 'The Laundering',
    desc: 'Pembersihan kosakata generik dan pengujian ketat Turnitin No-Repository. Menjamin Similarity Index < 15% dengan rasa organik 100%.',
    impact: 'Bebas Artifak Digital',
    icon: ShieldCheck
  },
  {
    number: '05',
    title: 'Secure Handover\n& Auto-Destruct.',
    tag: 'Liability Shift',
    desc: 'Penyerahan file via tautan terenkripsi. Sesuai protokol Shadow, seluruh data mentah akan dihancurkan permanen dalam 30 hari.',
    impact: 'Zero-Knowledge OpSec',
    icon: FileCheck
  }
];

export default function BrandStrategy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <section 
      ref={containerRef} 
      id="pendekatan" 
      className="isolate relative bg-[#0a0a0a] z-10 border-t border-white/5 py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-margin mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-accent font-inter">
              Execution Framework
            </span>
          </div>
          <h2 className="font-newsreader text-[clamp(2.5rem,7vw,6rem)] text-white font-light leading-[1] text-balance">
            Protokol Eksekusi <br />
            <span className="italic text-accent">Forensik.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div 
          ref={sliderRef}
          className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-margin pb-20"
        >
          {pipelineStages.map((stage, i) => (
            <div key={i} className="relative flex-shrink-0 snap-center group">
              <div className="w-[320px] md:w-[480px] h-[600px] bg-[#111111] border border-white/10 rounded-[3rem] p-12 md:p-16 flex flex-col justify-between transition-all duration-700 hover:border-accent/40 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <stage.icon className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">{stage.number}</span>
                  </div>
                  
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block">{stage.tag}</span>
                  <h3 className="font-newsreader text-4xl md:text-5xl font-light text-white leading-[1.1] mb-10 text-balance">{stage.title}</h3>
                  <p className="font-inter text-lg text-white/50 leading-relaxed italic text-balance mb-12">&quot;{stage.desc}&quot;</p>
                </div>

                <div className="flex items-center gap-4 pt-10 border-t border-white/5">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-accent/80 italic">{stage.impact}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-[320px] md:w-[560px] snap-center">
            <motion.div
              className="relative h-full p-16 md:p-20 rounded-[3rem] bg-accent text-black overflow-hidden shadow-2xl flex flex-col justify-center"
            >
              <div className="relative z-10 space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-black/60">Security Finalization</span>
                </div>

                <h4 className="font-newsreader text-5xl md:text-7xl leading-[1] font-light text-balance">
                  Shadow <br />
                  <span className="italic text-black/60">Privasi Mutlak.</span>
                </h4>
                
                <p className="font-inter text-xl text-black/80 leading-relaxed text-balance">
                  Eksekusi tak terlihat dengan jaminan kerahasiaan mutlak & protokol penghancuran data otomatis kelas militer.
                </p>

                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="group bg-black text-white px-12 py-7 rounded-full font-black text-[12px] uppercase tracking-[0.5em] flex items-center justify-center gap-6 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transition-all w-full"
                >
                  Mulai Investigasi Strategis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center gap-2 md:hidden">
          {pipelineStages.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-background/10" />
          ))}
        </div>
      </div>
      
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialInterest="Pipeline Strategis" />
    </section>
  );
}
