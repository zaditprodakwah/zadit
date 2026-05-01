'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { Instagram, Linkedin, Figma, ArrowUpRight, Globe, Mail } from 'lucide-react';
import { useRef, useState } from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import WhatsAppForm from './WhatsAppForm';

export default function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const footerTextY = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <footer 
      ref={containerRef} 
      id="kontak" 
      className="isolate relative bg-background pt-40 pb-32 md:pb-20 overflow-hidden z-[70] border-t border-outline/10 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"
    >
      
      {/* Cinematic Background Text */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none opacity-[0.02] select-none -z-10">
        <motion.h2 
          style={{ y: footerTextY }}
          className="text-[28vw] font-black tracking-tighter leading-none mb-[-5vw] text-foreground"
        >
          PRADIKTIF.
        </motion.h2>
      </div>

      <div className="px-margin relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Executive CTA Block */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 border-b border-outline/10 pb-24">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-10"
              >
                <div className="w-12 h-[1px] bg-accent" />
                <p className="text-[11px] uppercase tracking-[0.6em] font-bold text-accent font-inter">Let's Secure the Future</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="font-newsreader text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[0.9] text-foreground tracking-tighter text-balance"
              >
                Inisiasi Investigasi <br />
                <span className="italic text-accent">Strategis Anda.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <button 
                onClick={() => setIsFormOpen(true)}
                className="group relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-accent rounded-full text-background overflow-hidden transition-all duration-700 hover:scale-105 shadow-2xl"
              >
                <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-full" />
                <div className="flex flex-col items-center gap-2 relative z-10 transition-colors duration-700 group-hover:text-foreground">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Connect</span>
                  <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-700" />
                </div>
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Brand Intelligence */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="font-newsreader text-4xl text-foreground font-bold mb-8">PRADI<span className="italic text-accent">KTIF.</span></h3>
                <p className="font-inter text-foreground/40 text-lg leading-relaxed max-w-sm italic text-balance">
                  Digital Portal Strategis untuk Founder & Korporasi yang Mengejar Presisi dan Estetika Tanpa Kompromi.
                </p>
              </div>

              <div className="flex items-center gap-10">
                {[
                  { icon: Instagram, href: CONTACT_INFO.instagram },
                  { icon: Linkedin, href: CONTACT_INFO.linkedin },
                  { icon: Figma, href: CONTACT_INFO.figma }
                ].map((social, i) => (
                  <Link key={i} href={social.href} className="text-foreground/20 hover:text-accent transition-colors duration-500">
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>

              <div className="space-y-5 pt-12 border-t border-outline/10">
                <div className="flex items-center gap-4 text-foreground/30">
                  <Globe className="w-4 h-4 text-accent/40" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Jakarta, Indonesia — GMT+7</span>
                </div>
                <div className="flex items-center gap-4 text-foreground/30">
                  <Mail className="w-4 h-4 text-accent/40" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{CONTACT_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Structured Navigation */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-10">
                <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-accent">Layanan</h4>
                <ul className="space-y-6">
                  {['Pitch Deck Investor', 'Arsitektur Website', 'Dokumentasi Strategis', 'Audit Investigatif'].map(item => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-foreground/40 hover:text-accent transition-colors duration-500">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-10">
                <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-accent">Perusahaan</h4>
                <ul className="space-y-6">
                  {['Investigasi Strategis', 'Protokol Eksekusi', 'Kinerja Nyata', 'Kontak Privat'].map(item => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-foreground/40 hover:text-accent transition-colors duration-500">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1 space-y-10">
                <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-accent">Headquarters</h4>
                <p className="text-sm text-foreground/40 leading-relaxed font-inter">
                  SCBD District 8, Lt. 12 <br />
                  Jakarta Selatan, 12190 <br />
                  Indonesia
                </p>
                <div className="pt-6 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Active Collaboration Pool</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-40 pt-12 border-t border-outline/10 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/10">
              © {new Date().getFullYear()} PRADIKTIF. PT PRISMA DIGITAL KREATIF. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-12">
              <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/10 hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/10 hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialInterest="Konsultasi Strategis" />
    </footer>
  );
}
