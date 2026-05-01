'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Dashboard from '@/components/Dashboard';
import BrandStrategy from '@/components/BrandStrategy';
import LeadMagnet from '@/components/LeadMagnet';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

import ScrollProgress from '@/components/ScrollProgress';
import MobileNav from '@/components/MobileNav';

// Growth Hacking Components
import MarketPulse from '@/components/MarketPulse';
import OpportunityBanner from '@/components/OpportunityBanner';
import ServiceSilo from '@/components/ServiceSilo';
import FoundingDirectorTake from '@/components/FoundingDirectorTake';
import KeyNarratives from '@/components/KeyNarratives';
import AEOStructure from '@/components/AEOStructure';
import FloatingNav from '@/components/FloatingNav';

import { getMarketPulse, MarketPulseData } from '@/lib/external-data';
import { seoServices } from '@/data/seo-services';
import { useState, useEffect } from 'react';

export default function Home() {
  const [pulseData, setPulseData] = useState<MarketPulseData | null>(null);
  const defaultService = seoServices[0];

  useEffect(() => {
    getMarketPulse('Startup & Venture Capital').then(setPulseData);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <MobileNav />
      <FloatingNav />
      <Header />
      <Hero />
      <About />
      <div className="container mx-auto px-6">
        <FoundingDirectorTake thesis="Pertumbuhan bukan tentang volume, tapi tentang presisi arsitektur data." />
      </div>
      <Services />
      <div className="container mx-auto px-6">
        <ServiceSilo currentService={defaultService} />
      </div>
      <Process />
      <Dashboard />
      <BrandStrategy />
      <Portfolio />
      
      {/* Growth Hack Section */}
      <div className="container mx-auto px-6">
        {pulseData && (
          <>
            <MarketPulse data={pulseData} industry="Digital Strategy" />
            <OpportunityBanner 
              currencyFormatted={pulseData.currency.formatted} 
              serviceH1={defaultService.h1}
              industry={pulseData.technical.volatility === 'HIGH' ? 'High-Risk Tech' : 'Growth Venture'}
            />
          </>
        )}
      </div>

      <Pricing />
      
      {/* AEO Section */}
      <AEOStructure service={defaultService} />
      <KeyNarratives service={defaultService} />

      <LeadMagnet />
      <Testimonials />
      <Footer />
    </main>
  );
}

