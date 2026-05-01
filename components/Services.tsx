'use client';

import { motion } from 'motion/react';
import { getWhatsAppLink } from '@/lib/constants';

const services = [
  {
    title: "Company Profile Website & Landing Page",
    desc: "Website profesional yang mencerminkan kredibilitas dan nilai bisnis Anda. Desain modern, responsif, SEO-ready, dan siap live dalam waktu singkat.",
    price: "Rp 12.000.000",
    cta: "Konsultasi Website",
    details: ["5–7 Hari", "Properti / Klinik / Retail", "Konversi Sales Tinggi"]
  },
  {
    title: "Pitch Deck & Proposal Investor / Tender",
    desc: "Presentasi ringkas yang memenangkan hati investor atau tim tender. Narasi strategis + desain elegan yang persuasif untuk closing deal lebih cepat.",
    price: "Rp 8.500.000",
    cta: "Siapkan Proposal",
    details: ["3–5 Hari", "Startup & Eksapnsi Bisnis", "Narasi Bisnis Kredibel"]
  },
  {
    title: "Penulisan Strategis & Dokumentasi Bisnis",
    desc: "Proposal, business plan, whitepaper, laporan tahunan, dan copywriting marketing dengan tone premium yang tepat sasaran.",
    price: "Rp 5.500.000",
    cta: "Pesan Proposal",
    details: ["3–5 Hari", "Hemat Puluhan Jam", "Siap Untuk Ekspansi"]
  },
  {
    title: "Mini Audit & Konsultasi Strategis",
    desc: "Review mendalam terhadap pitch deck, website, atau proposal Anda + rekomendasi actionable dan insight bisnis instan.",
    price: "Rp 2.500.000",
    cta: "Mulai Audit",
    details: ["1–2 Hari", "Identifikasi Kelemahan", "Insight Cepat"]
  }
];

export default function Services() {
  return (
    <section id="layanan" className="py-80 px-margin bg-background relative transition-colors duration-500 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="flex items-center gap-6 mb-10">
               <div className="w-12 h-[1px] bg-accent" />
               <h2 className="text-[13px] uppercase tracking-[0.6em] font-bold text-accent">Strategic Ecosystem</h2>
            </div>
            <h3 className="font-newsreader text-5xl sm:text-7xl md:text-9xl font-light text-foreground leading-[0.85] tracking-tighter mb-12">
               Eksklusivitas <br />
               Dalam Setiap <span className="italic relative inline-block text-accent">Langkah.</span>
            </h3>
            <p className="font-inter text-foreground/40 text-xl leading-relaxed max-w-xl transition-colors duration-500 border-l-2 border-accent/20 pl-8">
              Kami tidak sekadar membangun aset digital; kami merancang sistem persuasi tingkat tinggi yang mengonversi attention menjadi revenue.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-surface p-12 sm:p-16 rounded-[3rem] border border-outline hover:border-accent hover:shadow-[0_40px_100px_rgba(var(--accent-rgb),0.1)] transition-all duration-700 flex flex-col justify-between h-full min-h-[580px] relative overflow-hidden"
            >
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-all duration-700" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-12">
                  <span className="font-mono text-[10px] text-accent font-bold tracking-widest bg-accent/5 px-4 py-2 rounded-full uppercase">MOD_0{i+1}</span>
                  <div className="w-12 h-[1px] bg-accent/20 group-hover:bg-accent transition-all duration-700" />
                </div>
                
                <h4 className="font-newsreader text-4xl sm:text-5xl mb-8 leading-[1.1] tracking-tight group-hover:text-accent transition-colors duration-500">
                  {s.title}
                </h4>
                <p className="font-inter text-foreground/40 text-base sm:text-lg leading-relaxed mb-10 transition-colors duration-500 group-hover:text-foreground/70">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  {s.details.map((detail) => (
                    <span key={detail} className="text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 bg-foreground/5 rounded-full text-foreground/40 border border-outline/30 group-hover:border-accent/30 group-hover:text-accent transition-all">
                      {detail}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
                   <div>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-foreground/20 mb-2">Investment Start At</p>
                     <p className="font-newsreader text-3xl sm:text-4xl italic text-foreground group-hover:text-accent transition-colors ">{s.price}</p>
                   </div>
                   <a 
                     href={getWhatsAppLink(`Halo Muhzadit, saya tertarik dengan layanan ${s.title}`)}
                     className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500 shadow-xl shadow-accent/20 group-hover:shadow-accent/40 text-center"
                   >
                      {s.cta}
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-32 pt-16 border-t border-outline/50 text-center"
        >
          <p className="font-newsreader text-2xl md:text-3xl italic text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            &quot;Semua layanan ditangani <span className="text-accent underline decoration-accent/20 transition-all hover:decoration-accent">langsung oleh Muhzadit</span> — personal, cepat, dan selalu ada insight bisnis tambahan untuk setiap kemitraan.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
