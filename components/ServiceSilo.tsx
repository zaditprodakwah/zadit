'use client';

import { motion } from 'motion/react';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { SEOService, seoServices } from '@/data/seo-services';

interface ServiceSiloProps {
  currentService: SEOService;
}

export default function ServiceSilo({ currentService }: ServiceSiloProps) {
  const related = seoServices.filter(s => currentService.relatedServices.includes(s.slug));

  if (related.length === 0) return null;

  return (
    <div className="mt-32 pt-20 border-t border-outline/30">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2 bg-accent/10 rounded-lg">
          <LinkIcon className="w-4 h-4 text-accent" />
        </div>
        <h3 className="font-inter text-xs font-bold uppercase tracking-[0.3em] text-foreground/50">Langkah Strategis Selanjutnya</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {related.map((service, i) => (
          <Link key={service.slug} href={`/layanan/${service.slug}`}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group bg-surface border border-outline/30 hover:border-accent/30 rounded-3xl p-8 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent/60 px-3 py-1 bg-accent/5 rounded-full border border-accent/10">
                  {service.serviceType}
                </span>
                <ArrowRight className="w-5 h-5 text-foreground/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
              
              <h4 className="font-newsreader text-2xl font-light text-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title.split(' | ')[0]}
              </h4>
              
              <p className="text-sm text-foreground/40 leading-relaxed line-clamp-2">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
