'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ScanSearch, PenTool, Layers, Send } from 'lucide-react';
import WhatsAppForm from './WhatsAppForm';

const steps = [
  {
    num: '01',
    icon: ScanSearch,
    label: 'Website & Landing Page',
    title: 'Company Profile\n& Landing Page.',
    bullets: [
      'Kickoff Investigasi',
      'Strategi User Journey',
      'Copywriting SEO Elite',
      'UI/UX Design Boutique',
      'Development & Launch'
    ],
    duration: '5-7 Hari',
    output: 'Otoritas & Konversi',
  },
  {
    num: '02',
    icon: PenTool,
    label: 'Pitch Deck & Proposal',
    title: 'Proposal Bisnis\nInvestor / Tender.',
    bullets: [
      'Objektif Pendanaan',
      'Riset Kompetitor Forensik',
      'Storytelling Slide Elite',
      'Desain Premium',
      'Final Rehearsal'
    ],
    duration: '3-5 Hari',
    output: 'Closing Investasi',
  },
  {
    num: '03',
    icon: Layers,
    label: 'Penulisan & Dokumentasi',
    title: 'Penulisan Strategis\n& Dokumen Bisnis.',
    bullets: [
      'Deep Briefing',
      'Riset Industri Mendalam',
      'Outlining Strategis',
      'Full Draft Revision',
      'Executive Summary Polish'
    ],
    duration: '3-5 Hari',
    output: 'Kredibilitas Naratif',
  },
  {
    num: '04',
    icon: Send,
    label: 'Audit & Konsultasi',
    title: 'Investigasi &\nKonsultasi Strategis.',
    bullets: [
      'Submit Materi',
      'Audit Mendalam Muhzadit',
      'Laporan Strategis PDF',
      'Debrief Call (45 Menit)'
    ],
    duration: '1-2 Hari',
    output: 'Evaluasi Ahli',
  },
];

export default function Process() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="isolate relative py-40 px-margin bg-background z-10 border-t border-outline/10 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"
    >
      {/* Refined Ambient Light */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-accent/20" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-accent/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <p className="text-[11px] uppercase tracking-[0.6em] font-bold text-accent font-inter">
              Protokol Eksekusi Elite
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-newsreader text-[clamp(2.5rem,6vw,5rem)] font-light text-foreground leading-[1.1] max-w-2xl text-balance"
            >
              Dari Brief ke <span className="italic text-accent">Aset Otoritatif</span> dalam 3–7 hari kerja.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-inter text-base text-foreground/40 max-w-xs leading-relaxed lg:text-right hidden lg:block text-balance"
            >
              Setiap proyek melewati fase investigasi yang terukur — transparan, terstruktur, dan tepat waktu.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const gridClasses = 
              i === 0 ? "lg:col-span-8 lg:row-span-2" :
              i === 1 ? "lg:col-span-4 lg:row-span-1" :
              i === 2 ? "lg:col-span-4 lg:row-span-1" :
              "lg:col-span-12 lg:row-span-1";

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`${gridClasses} relative group`}
              >
                <div className="relative h-full overflow-hidden rounded-[3rem] border border-outline/10 bg-surface/40 backdrop-blur-md group-hover:border-accent/30 transition-all duration-700 p-10 md:p-12 flex flex-col shadow-sm">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center border border-accent/10 group-hover:bg-accent/10 transition-all duration-500">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="font-newsreader text-6xl font-black text-foreground/[0.03] group-hover:text-accent/[0.05] transition-colors duration-500">
                      {step.num}
                    </span>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent/60 mb-4">
                    {step.label}
                  </p>

                  <h3 className={`${i === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'} font-newsreader font-bold text-foreground leading-tight mb-8 group-hover:text-accent transition-colors duration-500 text-balance`}>
                    {step.title}
                  </h3>

                  <ul className={`${i === 0 ? 'grid grid-cols-1 md:grid-cols-2 gap-x-8' : 'space-y-4'} flex-1 mb-12`}>
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-4 text-sm text-foreground/40 group-hover:text-foreground/60 transition-colors duration-300 py-1">
                        <span className="mt-2 w-1.5 h-[1px] bg-accent/30 group-hover:bg-accent flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8 border-t border-outline/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">{step.duration}</span>
                    </div>
                    <div className="text-right">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-accent/60 italic">{step.output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12 pt-16 border-t border-outline/10"
        >
          <div className="max-w-xl">
            <p className="font-newsreader text-2xl md:text-4xl font-light text-foreground/80 leading-tight text-balance">
              Siap memulainya dengan <span className="italic text-accent">Investigasi Strategis</span>?
            </p>
            <p className="font-inter text-sm text-foreground/30 mt-4 leading-relaxed">
              Kita akan membedah visi Anda dalam sesi privat 30 menit — tanpa kewajiban, murni untuk mengukur kecocokan strategis.
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex-shrink-0 bg-accent text-background px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-[0.4em] hover:shadow-2xl transition-all duration-500 whitespace-nowrap"
          >
            Mulai Investigasi →
          </button>
        </motion.div>
      </div>
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialInterest="Investigasi Strategis" />
    </section>
  );
}
