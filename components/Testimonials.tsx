'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Pitch deck dari PRADIKTIF langsung membuat investor kami terkesan. Narasi strategisnya sangat tajam dan kami berhasil closing dalam 3 minggu.",
      author: "CEO PayFlow Fintech",
      title: "Founder",
      company: "PayFlow"
    },
    {
      text: "Website klinik kami sekarang terlihat sangat profesional dan berkelas. Booking pasien meningkat drastis sejak re-design ini live.",
      author: "Dr. Amanda",
      title: "Pemilik",
      company: "Klinik Spesialis XYZ"
    },
    {
      text: "Prosesnya sangat efisien, personal, dan hasilnya selalu melebihi ekspektasi. Ini adalah standar agensi internasional dengan sentuhan owner.",
      author: "Direktur Elite Residences",
      title: "Director",
      company: "Elite Residences"
    }
  ];

  return (
    <section className="py-60 px-margin bg-background transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-6 mb-8">
               <div className="w-12 h-[1px] bg-accent" />
               <h2 className="text-[12px] uppercase tracking-[0.4em] font-bold text-accent">Social Proof</h2>
            </div>
            <h3 className="font-newsreader text-6xl md:text-8xl font-light text-foreground leading-[1.1] tracking-tighter">
              Apa Kata Mereka <br />
              Tentang <span className="italic text-accent">PRADIKTIF.</span>
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-inter text-foreground/40 text-lg max-w-sm mb-4 border-l-2 border-accent/20 pl-8"
          >
            Kepercayaan adalah mata uang tertinggi. Kami bangga menjadi bagian dari pertumbuhan bisnis klien-klien kami.
          </motion.p>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.author}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-surface p-12 rounded-[3.5rem] border border-outline hover:border-accent/40 transition-all duration-700 flex flex-col min-h-[400px]"
            >
              <div className="mb-10 text-accent opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote className="w-12 h-12" />
              </div>
              <p className="font-newsreader text-2xl text-foreground/80 leading-relaxed italic mb-12 flex-1">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-5 pt-8 border-t border-outline/30 mt-auto">
                <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center text-background font-bold text-[10px] group-hover:bg-accent transition-colors">
                  {t.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-inter text-[11px] font-bold text-foreground uppercase tracking-[0.1em]">{t.author}</span>
                  <span className="font-inter text-[9px] text-accent uppercase tracking-widest font-bold">{t.title} @ {t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
