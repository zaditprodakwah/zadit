import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, BarChart3, TrendingUp, Zap, CheckCircle2, Award, Briefcase } from 'lucide-react';

export default function CapitalStrategy() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Service Section */}
      <section className="pt-48 pb-32 px-margin border-b border-outline/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent font-inter">
              Service Pillar: SV-03
            </span>
          </div>
          <h1 className="font-newsreader text-7xl md:text-[9rem] italic text-foreground leading-[0.8] mb-12 tracking-tighter">
            Capital & <br />
            <span className="text-accent">ESG Strategy.</span>
          </h1>
          <p className="font-inter text-2xl md:text-3xl text-foreground/40 max-w-3xl leading-tight text-balance">
            Strategi Kapital untuk Founder & Korporasi. Mengamankan pendanaan, kepatuhan ESG, dan proyeksi ROI otoritatif.
          </p>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-32 px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Investor-Ready Pitch</h3>
            <p className="text-foreground/40 leading-relaxed">Dekonstruksi narasi operasional menjadi storyline persuasif 12-15 slide dengan visual tingkat agensi elit. Fokus pada metrik VC (CAC, LTV, Burn Rate).</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">ESG & Sustainability</h3>
            <p className="text-foreground/40 leading-relaxed">Penyusunan Sustainability Report standar GRI & OJK POJK 51. Mencegah tuduhan greenwashing dengan data yang divalidasi (Assurance-Ready).</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <BarChart3 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Feasibility Study</h3>
            <p className="text-foreground/40 leading-relaxed">Studi kelayakan bisnis dan infrastruktur yang komprehensif. Mengubah variabel teknis menjadi proyeksi finansial yang mengunci keputusan investor.</p>
          </div>
        </div>
      </section>

      {/* Case Study: Startup Funding */}
      <section className="py-32 bg-surface/30 border-y border-outline/10 px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-10">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                 <Award className="w-4 h-4" /> Case Study: CS-CAP-03
              </div>
              <h2 className="font-newsreader text-5xl md:text-6xl italic text-foreground">Seed Round Funding: Rp 8 Miliar.</h2>
              <div className="space-y-6 text-foreground/50">
                 <p className="text-lg">Founder Startup FinTech gagal di 7 VC karena pitch deck terlalu teknis. Burn rate dan unit economics tidak tersampaikan dengan jelas.</p>
                 <div className="p-8 bg-background border border-outline/10 rounded-3xl">
                    <p className="text-accent font-bold mb-2">PRADIKTIF Action:</p>
                    <p className="italic leading-relaxed">Rekayasa narasi visual. Memangkas 30 slide menjadi 12 slide High-Conversion. Injeksi metrik keuangan krusial dan desain Dark Theme + Gold Accent.</p>
                 </div>
                 <div className="flex items-center gap-4 text-foreground font-bold">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Hasil: Funding Secured dalam 3 minggu pasca-rekonstruksi dokumen.
                 </div>
              </div>
           </div>
           <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-outline/20">
              <img src="https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1000&auto=format&fit=crop" alt="Capital Success" className="object-cover w-full h-full grayscale opacity-60" />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
