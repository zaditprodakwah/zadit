import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { seoServices } from '@/data/seo-services';
import Script from 'next/script';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, MessageSquare, Info } from 'lucide-react';
import MarketPulse from '@/components/MarketPulse';
import ServiceSilo from '@/components/ServiceSilo';
import OpportunityBanner from '@/components/OpportunityBanner';
import PremiumCTA from '@/components/PremiumCTA';
import KeyNarratives from '@/components/KeyNarratives';
import FoundingDirectorTake from '@/components/FoundingDirectorTake';
import { getMarketPulse } from '@/lib/external-data';

// Set ISR for 1 hour to keep market data fresh
export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = seoServices.find((s) => s.slug === slug);

  if (!service) return { title: 'Not Found' };

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
      url: `https://pradiktif.id/layanan/${slug}`,
    },
  };
}

export default async function SEOPage({ params }: Props) {
  const { slug } = await params;
  const service = seoServices.find((s) => s.slug === slug);

  if (!service) notFound();

  // Fetch dynamic pulse data
  const pulseData = await getMarketPulse(service.industry);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.serviceType,
    "name": service.h1,
    "description": service.description,
    "provider": {
      "@type": "ProfessionalService",
      "name": "PRADIKTIF",
      "url": "https://pradiktif.id",
      "logo": "https://pradiktif.id/logo.png",
      "founder": {
        "@type": "Person",
        "name": "Muhzadit",
        "jobTitle": "Strategic Director",
        "url": "https://pradiktif.id/#about",
        "sameAs": [
          "https://www.linkedin.com/in/muhzadit"
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jakarta",
        "addressCountry": "ID"
      },
      "knowsAbout": [service.industry, service.subIndustry, "Digital Strategy", "Corporate Branding"]
    },
    "author": {
      "@type": "Person",
      "name": "Muhzadit",
      "description": "Founder & Strategic Director at PRADIKTIF with expertise in corporate digital growth."
    },

    "areaServed": {
      "@type": "City",
      "name": service.location
    },
    "audience": {
      "@type": "Audience",
      "audienceType": service.targetPersona
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Solusi ${service.serviceType} PRADIKTIF`,
      "itemListElement": service.solutions.map((sol, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": sol
        }
      }))
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": service.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  };


  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-margin overflow-hidden">
      <Script
        id="seo-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header Section (GEO Optimized) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/20">
              {service.serviceType} Specialist
            </span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span className="text-[10px] text-foreground/40 font-medium uppercase tracking-widest">
              {service.location}
            </span>
          </div>
          
          <h1 className="font-newsreader text-4xl md:text-6xl font-light text-foreground leading-[1.1] mb-8">
            {service.h1.split(' ').map((word, i) => (
              <span key={i} className={i === 2 || i === 3 ? 'italic text-accent' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Key Takeaways (GEO Tip: AI Bots love summaries) */}
          <div className="bg-surface border border-outline/50 rounded-3xl p-8 mb-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Info className="w-12 h-12 text-accent" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">Key Takeaways</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.keywords.slice(0, 4).map((kw, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {kw}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Authority Section (AEO Optimized) */}
        <div className="prose prose-invert max-w-none mb-20">
          <p className="text-xl text-foreground/60 leading-relaxed font-inter italic border-l-2 border-accent pl-8">
            "{service.description}"
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {service.stats.map((stat, i) => (
              <div key={i} className="border-t border-outline/30 pt-6">
                <p className="text-3xl font-newsreader font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] text-foreground/40 uppercase tracking-widest mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pain Points & Strategic Solutions (AEO/GEO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8">
            <h3 className="font-inter text-xs font-bold uppercase tracking-widest text-red-400 mb-6 flex items-center gap-2">
              <Info className="w-4 h-4" /> Masalah Umum
            </h3>
            <ul className="space-y-4">
              {service.painPoints.map((point, i) => (
                <li key={i} className="text-sm text-foreground/60 leading-relaxed flex gap-3">
                  <span className="text-red-400 font-bold">•</span> {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-3xl p-8">
            <h3 className="font-inter text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Solusi PRADIKTIF
            </h3>
            <ul className="space-y-4">
              {service.solutions.map((sol, i) => (
                <li key={i} className="text-sm text-foreground/80 leading-relaxed flex gap-3 font-medium">
                  <span className="text-emerald-400 font-bold">✓</span> {sol}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founding Director's Take - E-E-A-T Signature Content */}
        <FoundingDirectorTake thesis={service.thesis} />

        {/* Dynamic Market Pulse - Programmatic Data Enrichment */}
        <MarketPulse data={pulseData} industry={service.industry} />

        {/* AEO Core Narrative Component */}
        <KeyNarratives service={service} />


        {/* FAQ Section (AEO optimized for rich snippets) */}
        <div className="mb-20">
          <h2 className="font-newsreader text-3xl font-light italic mb-10">Pertanyaan Umum (FAQ)</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-b border-outline/30 pb-6 group">
                <h3 className="font-inter text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                  {faq.q}
                </h3>
                <p className="text-foreground/50 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Silo - Internal Linking Optimization */}
        <ServiceSilo currentService={service} />

        {/* Dynamic Growth Trigger */}
        <OpportunityBanner 
          currencyFormatted={pulseData.currency.formatted} 
          serviceH1={service.h1} 
          industry={service.industry} 
        />

        {/* Global CTA */}
        <PremiumCTA title={`Wujudkan ${service.serviceType} Standar Global Anda Hari Ini.`} />
      </div>
    </main>
  );
}
