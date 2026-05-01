'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, User, Building2, ChevronRight, ChevronLeft, ShieldCheck, MapPin, Mail, MessageSquare, Zap } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface WhatsAppFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export default function WhatsAppForm({ isOpen, onClose, initialInterest = '' }: WhatsAppFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    interest: initialInterest || 'Investigasi Strategis',
    city: '',
    contact: '',
    message: ''
  });

  const interests = [
    'Investigasi Strategis',
    'Arsitektur Website Elite',
    'Pitch Deck Investor',
    'Protokol Eksekusi Elite',
    'Audit Investigatif 360°'
  ];

  // Reset form on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setCurrentStep(0), 500);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    // Netlify Forms capture via hidden input and POST
    // We can also trigger WhatsApp after the form is technically submitted
    const waMessage = `Halo Muhzadit, saya ${formData.name} dari ${formData.business} (${formData.city}).\n\nKontak: ${formData.contact}\nFokus: ${formData.interest}.\n\nKonteks: ${formData.message || 'N/A'}`;
    
    // In a real scenario, we might want to preventDefault, use fetch to submit to Netlify, 
    // then window.open WA. For simplicity and standard Netlify capture, we can do a hybrid.
    
    window.open(getWhatsAppLink(waMessage), '_blank');
    onClose();
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const isStepValid = () => {
    switch(currentStep) {
      case 0: return formData.name.trim().length > 2 && formData.business.trim().length > 2;
      case 2: return formData.city.trim().length > 2 && formData.contact.trim().length > 5;
      default: return true;
    }
  };

  const stepVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-3xl z-[200]"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className="fixed inset-x-4 inset-y-10 md:inset-y-auto m-auto w-full max-w-2xl md:h-fit bg-surface border border-outline/10 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-[210] overflow-hidden flex flex-col"
          >
            {/* Header: Fixed Height */}
            <div className="bg-accent/5 p-8 md:p-12 border-b border-outline/5 relative flex-shrink-0">
              <button 
                onClick={onClose}
                aria-label="Close form"
                className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-background/50 border border-outline/10 rounded-full hover:border-accent/40 transition-all text-foreground/40 hover:text-accent z-10"
              >
                <X className="w-4 h-4 md:w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1">
                  {[0, 1, 2, 3].map(s => (
                    <div key={s} className={cn("h-1 rounded-full transition-all duration-500", s <= currentStep ? "w-6 bg-accent" : "w-2 bg-foreground/10")} />
                  ))}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-accent/60">Step {currentStep + 1} of 4</span>
              </div>
              
              <h3 className="font-newsreader text-3xl md:text-4xl italic text-foreground leading-none">
                {currentStep === 0 && "Identitas Strategis"}
                {currentStep === 1 && "Fokus Protokol"}
                {currentStep === 2 && "Parameter Lokasi"}
                {currentStep === 3 && "Finalisasi Visi"}
              </h3>
            </div>

            {/* Scrollable Form Content */}
            <form 
              name="investigasi-strategis"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto p-8 md:p-12 flex flex-col scrollbar-hide"
            >
              <input type="hidden" name="form-name" value="investigasi-strategis" />
              
              <div className="flex-1 flex flex-col justify-center min-h-[250px] md:min-h-[300px] relative overflow-hidden">
                <AnimatePresence mode="wait" custom={currentStep}>
                  <motion.div
                    key={currentStep}
                    custom={currentStep}
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                  >
                    {/* Step 1: Identity */}
                    {currentStep === 0 && (
                      <div className="space-y-6">
                        <div className="relative group">
                          <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20 group-focus-within:text-accent transition-colors" />
                          <input
                            required
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Nama Lengkap Eksekutif"
                            aria-label="Nama Lengkap"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-background border border-outline/10 rounded-2xl py-5 pl-16 pr-6 text-sm md:text-base focus:border-accent/40 focus:ring-1 focus:ring-accent/20 focus:outline-none transition-all placeholder:text-foreground/20"
                          />
                        </div>
                        <div className="relative group">
                          <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20 group-focus-within:text-accent transition-colors" />
                          <input
                            required
                            type="text"
                            name="business"
                            autoComplete="organization"
                            placeholder="Entitas Bisnis / Institusi"
                            aria-label="Nama Entitas Bisnis"
                            value={formData.business}
                            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                            className="w-full bg-background border border-outline/10 rounded-2xl py-5 pl-16 pr-6 text-sm md:text-base focus:border-accent/40 focus:ring-1 focus:ring-accent/20 focus:outline-none transition-all placeholder:text-foreground/20"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Interest */}
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 ml-2">Pilih Satu Fokus Utama</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                          {interests.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, interest: item });
                                nextStep();
                              }}
                              className={cn(
                                "group flex items-center justify-between px-6 py-5 rounded-2xl border text-xs font-bold transition-all duration-500",
                                formData.interest === item 
                                  ? 'bg-accent text-background border-accent' 
                                  : 'bg-background border-outline/10 text-foreground/40 hover:border-accent/40 hover:text-foreground'
                              )}
                            >
                              {item}
                              <ChevronRight className={cn("w-4 h-4 opacity-0 -translate-x-2 transition-all", formData.interest === item ? "opacity-100 translate-x-0" : "group-hover:opacity-40 group-hover:translate-x-0")} />
                            </button>
                          ))}
                        </div>
                        <input type="hidden" name="interest" value={formData.interest} />
                      </div>
                    )}

                    {/* Step 3: Location & Contact */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="relative group">
                          <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20 group-focus-within:text-accent transition-colors" />
                          <input
                            required
                            type="text"
                            name="city"
                            autoComplete="address-level2"
                            placeholder="Kota Domisili Saat Ini"
                            aria-label="Kota Domisili"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full bg-background border border-outline/10 rounded-2xl py-5 pl-16 pr-6 text-sm md:text-base focus:border-accent/40 focus:outline-none transition-all placeholder:text-foreground/20"
                          />
                        </div>
                        <div className="relative group">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20 group-focus-within:text-accent transition-colors" />
                          <input
                            required
                            type="text"
                            name="contact"
                            autoComplete="email"
                            placeholder="WhatsApp atau Email Privat"
                            aria-label="Kontak"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            className="w-full bg-background border border-outline/10 rounded-2xl py-5 pl-16 pr-6 text-sm md:text-base focus:border-accent/40 focus:outline-none transition-all placeholder:text-foreground/20"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Context */}
                    {currentStep === 3 && (
                      <div className="relative group">
                        <MessageSquare className="absolute left-6 top-8 w-4 h-4 text-foreground/20 group-focus-within:text-accent transition-colors" />
                        <textarea
                          name="message"
                          placeholder="Konteks strategis tambahan atau tantangan utama Anda (Opsional)..."
                          aria-label="Konteks Strategis"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-background border border-outline/10 rounded-3xl py-6 pl-16 pr-6 text-sm md:text-base min-h-[160px] focus:border-accent/40 focus:outline-none transition-all placeholder:text-foreground/20 resize-none"
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Actions */}
              <div className="pt-8 md:pt-12 mt-auto border-t border-outline/5">
                <div className="flex gap-4">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center justify-center w-16 h-16 rounded-full border border-outline/20 text-foreground/40 hover:text-foreground hover:border-accent transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}
                  
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      disabled={!isStepValid()}
                      onClick={nextStep}
                      className={cn(
                        "flex-1 py-5 rounded-full font-black uppercase tracking-[0.4em] text-[11px] transition-all flex items-center justify-center gap-4",
                        isStepValid() 
                          ? "bg-accent text-background shadow-lg shadow-accent/20" 
                          : "bg-foreground/5 text-foreground/20 cursor-not-allowed border border-outline/5"
                      )}
                    >
                      Lanjutkan <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex-1 py-5 bg-foreground text-background rounded-full font-black uppercase tracking-[0.4em] text-[11px] shadow-2xl hover:bg-accent hover:text-background transition-all flex items-center justify-center gap-4 group"
                    >
                      Kirim Parameter <Zap className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    </button>
                  )}
                </div>
                
                <div className="flex items-center justify-center gap-4 mt-8 opacity-20">
                  <ShieldCheck className="w-3 h-3" />
                  <p className="text-[8px] font-black uppercase tracking-[0.3em]">End-to-End Encrypted Protocol</p>
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
