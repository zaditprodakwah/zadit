'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: "Dinas Provinsi (Bappeda)",
    category: "LAKIP & SAKIP Optimization",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
    desc: "Rekonstruksi matriks data IKU untuk sinkronisasi target RPJMD. Penyelamatan temuan administratif BPK dalam 3 minggu.",
    results: "DID Aman & Skor SAKIP A"
  },
  {
    title: "Manufaktur Tbk",
    category: "Sustainability (ESG) Report",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    desc: "Penyusunan ESG Report berstandar GRI & OJK POJK 51. Mitigasi risiko greenwashing melalui Materiality Matrix yang divalidasi.",
    results: "Lolos Audit OJK"
  },
  {
    title: "Startup FinTech Elit",
    category: "High-Conversion Pitch Deck",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1000&auto=format&fit=crop",
    desc: "Rekayasa narasi visual dan finansial model (Burn Rate, CAC/LTV) untuk pendanaan ekspansi. Closing deal dalam 3 minggu.",
    results: "Rp8M Seed Funding"
  },
  {
    title: "S3 Kedokteran (Spesialis)",
    category: "Academic Vanguard / Scopus Q2",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
    desc: "AI-Detox Protocol & perombakan total metodologi. Mengubah naskah ditolak menjadi Accepted with Minor Revision.",
    results: "Turnitin 35% → 8%"
  },
  {
    title: "Elite Property Group",
    category: "Feasibility Study & Investor Deck",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    desc: "Transformasi narasi teknis menjadi proyeksi ROI persuasif untuk ekspansi lahan properti elit.",
    results: "Lolos Due Diligence"
  },
  {
    title: "Kementerian Strategis",
    category: "Policy Brief & Kajian Akademik",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    desc: "Penyusunan naskah kebijakan berbasis data komputasional untuk mendukung keputusan tingkat menteri.",
    results: "Regulasi Disahkan"
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.98, 1, 1, 0.98]);
  // Removed blur to maintain text clarity

  return (
    <motion.section ref={containerRef} style={{ opacity, scale }} id="portofolio" className="py-40 px-margin bg-background relative transition-colors duration-500 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 mb-32 relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="h-[1px] w-12 bg-accent/40" />
              <h2 className="text-[13px] uppercase tracking-[0.5em] font-bold text-accent">Selected Case Studies</h2>
            </div>
            <h3 className="font-newsreader text-5xl sm:text-7xl md:text-9xl font-light text-foreground break-normal leading-[0.85] tracking-tighter">
               Hasil Yang <br />
               <span className="italic relative inline-block">Terukur.<span className="absolute bottom-4 left-0 w-full h-2 bg-accent/10 -z-10" /></span> <br />
               Bukan <span className="italic opacity-30">Asumsi.</span>
            </h3>
          </motion.div>
          
          <div className="absolute top-0 right-0 hidden lg:block opacity-[0.03] pointer-events-none">
            <span className="font-newsreader text-[20rem] italic rotate-90 leading-none inline-block origin-top-right">Portfolio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.2 }}
              className={`group relative flex flex-col ${i % 2 === 1 ? 'md:mt-40' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-surface shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] mb-12 border border-outline/50 transition-all duration-1000 group-hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-1000 flex flex-col justify-end p-12">
                   <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                     <span className="inline-block px-4 py-2 bg-accent text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-6 italic">
                       {p.results}
                     </span>
                     <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">{p.category}</p>
                     <h4 className="font-newsreader text-4xl text-white mb-6 leading-tight">{p.title}</h4>
                   </div>
                   <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-1000 delay-100 opacity-0 group-hover:opacity-100">
                     <button className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-white">
                        Eksplorasi Proyek <ArrowRight className="w-4 h-4 text-accent" />
                     </button>
                   </div>
                </div>
              </div>
              <div className="px-8 border-l-2 border-outline/30 group-hover:border-accent transition-colors duration-1000">
                <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-4">{p.results}</p>
                <h4 className="font-newsreader text-2xl mb-4 text-foreground group-hover:text-accent transition-colors duration-500">{p.title}</h4>
                <p className="text-sm text-foreground/40 leading-relaxed max-w-sm transition-colors duration-500">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA for Portfolio */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-60 flex flex-col items-center text-center gap-12"
        >
          <p className="font-newsreader text-3xl md:text-5xl text-foreground italic opacity-60">Punya proyek besar yang butuh sentuhan premium?</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-6 text-[14px] font-bold uppercase tracking-[0.4em] text-foreground border-b-2 border-accent pb-4 group"
          >
            Lihat Lebih Banyak Portofolio <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-4 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
