'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import WhatsAppForm from './WhatsAppForm';

interface PremiumCTAProps {
  title: string;
}

export default function PremiumCTA({ title }: PremiumCTAProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-accent rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-accent/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <h2 className="font-newsreader text-3xl md:text-4xl italic mb-10 relative z-10">{title}</h2>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-block z-10 group"
      >
        {/* Bloom Effect */}
        <div className="absolute -inset-4 bg-white opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 rounded-full" />
        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-white opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 rounded-full animate-pulse" />
        
        <button 
          onClick={() => setIsFormOpen(true)}
          className="relative inline-flex items-center gap-3 px-12 py-6 bg-white text-accent rounded-full font-bold text-lg hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all"
        >
          Konsultasi Strategis Sekarang
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
