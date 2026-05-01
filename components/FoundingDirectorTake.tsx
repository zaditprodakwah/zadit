'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Quote, CheckCircle } from 'lucide-react';

interface FoundingDirectorTakeProps {
  thesis: string;
}

export default function FoundingDirectorTake({ thesis }: FoundingDirectorTakeProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="isolate relative my-32 flex flex-col md:flex-row gap-12 lg:gap-24 items-center bg-surface border border-outline/10 rounded-[4rem] p-12 lg:p-24 overflow-hidden group/take shadow-2xl transition-all duration-1000 hover:border-accent/30"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      <div className="relative w-56 h-56 lg:w-72 lg:h-72 flex-shrink-0">
        <motion.div 
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-accent/20 rounded-[3.5rem] blur-2xl opacity-20" 
        />
        <div className="absolute inset-0 overflow-hidden rounded-[3.5rem] border border-outline/10 z-10 bg-background">
          <Image 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
            alt="Muhzadit" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover/take:scale-100 brightness-[0.9] hover:brightness-100"
          />
        </div>
        
        {/* Verification Architecture */}
        <div className="absolute -bottom-6 -right-6 bg-background border border-outline/10 p-4 rounded-[2rem] shadow-2xl z-20 flex items-center gap-3">
           <CheckCircle className="w-5 h-5 text-accent fill-accent/10" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Verified Director</span>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left relative z-10">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
          <div className="p-3 bg-accent/5 rounded-2xl border border-accent/10">
            <Quote className="w-6 h-6 text-accent fill-accent/10" />
          </div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Perspektif Direktur</h4>
        </div>
        
        <p className="font-newsreader text-3xl lg:text-5xl italic text-foreground leading-[1.2] mb-12 tracking-tight text-balance">
          &quot;{thesis}&quot;
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <p className="text-2xl font-bold text-foreground mb-2">Muhzadit</p>
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-foreground/30">Founding Director, PRADIKTIF</p>
          </div>
          
          {/* Executive Signature Terminal */}
          <div className="flex flex-col items-center md:items-end opacity-60 group-hover/take:opacity-100 transition-opacity duration-1000">
            <svg width="180" height="70" viewBox="0 0 180 70" className="text-accent transform -rotate-2">
              <motion.path
                d="M20,50 C30,40 40,20 50,35 C60,50 70,55 80,40 C90,25 100,20 110,45 C120,70 140,20 150,30 C160,40 170,50 175,45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>
            <span className="text-[9px] font-black text-foreground/10 mt-2 uppercase tracking-[0.5em]">Strategist Signature</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
