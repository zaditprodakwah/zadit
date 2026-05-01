import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Megaphone, Target, Zap, CheckCircle2, Award, Users, Search } from 'lucide-react';

export default function StrategicAmplification() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Service Section */}
      <section className="pt-48 pb-32 px-margin border-b border-outline/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent font-inter">
              Service Pillar: SV-04
            </span>
          </div>
          <h1 className="font-newsreader text-7xl md:text-[9rem] italic text-foreground leading-[0.8] mb-12 tracking-tighter">
            Reputation <br />
            <span className="text-accent">Engineering.</span>
          </h1>
          <p className="font-inter text-2xl md:text-3xl text-foreground/40 max-w-3xl leading-tight text-balance">
            Dominasi Narasi Publik dan Akuisisi Klien High-Ticket. Mengubah budget iklan menjadi arsitektur konversi presisi.
          </p>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-32 px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <Megaphone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Media Syndication</h3>
            <p className="text-foreground/40 leading-relaxed">Distribusi rilis pers di media nasional Tier-1 (Forbes, Kompas, dll). Tidak sekadar tayang, tapi direkayasa untuk mendominasi sentimen kata kunci.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Algorithmic Ads</h3>
            <p className="text-foreground/40 leading-relaxed">Manajemen Meta/Google/LinkedIn Ads dengan funnel eksklusif. Memfilter prospek low-budget dan hanya mengonversi klien elit bermodal besar.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Crisis Management</h3>
            <p className="text-foreground/40 leading-relaxed">Grey PR & SEO Reputasi. Kami merekayasa apa yang dunia lihat di mesin pencari (Google/SGE) ketika mereka melakukan due diligence pada nama Anda.</p>
          </div>
        </div>
      </section>

      {/* Case Study: Real Estate Ads */}
      <section className="py-32 bg-surface/30 border-y border-outline/10 px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-10">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                 <Award className="w-4 h-4" /> Case Study: CS-AMP-05
              </div>
              <h2 className="font-newsreader text-5xl md:text-6xl italic text-foreground">High-Ticket Ads: Closing Rate 12%.</h2>
              <div className="space-y-6 text-foreground/50">
                 <p className="text-lg">Developer properti elit menghabiskan Rp 50 Juta/bulan dengan leads berkualitas rendah. KPR prospek sering ditolak.</p>
                 <div className="p-8 bg-background border border-outline/10 rounded-3xl">
                    <p className="text-accent font-bold mb-2">PRADIKTIF Action:</p>
                    <p className="italic leading-relaxed">Audit funnel total. Mengganti copywriting 'Promo Murah' menjadi 'Investasi Eksklusif'. Implementasi Diagnostic Intake Form untuk memfilter audiens low-budget.</p>
                 </div>
                 <div className="flex items-center gap-4 text-foreground font-bold">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Hasil: Terjual 8 unit premium dalam 2 bulan. CAC turun 60%.
                 </div>
              </div>
           </div>
           <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-outline/20">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop" alt="Real Estate Success" className="object-cover w-full h-full grayscale opacity-60" />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
           </div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <section className="py-32 px-margin bg-background">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
          <div className="max-w-3xl space-y-8">
            <h2 className="font-newsreader text-5xl md:text-6xl italic text-foreground">Thought Leadership Engineering.</h2>
            <p className="text-xl text-foreground/40 leading-relaxed italic">Kami membangun otoritas digital bagi C-Level dan Tokoh Publik melalui sindikasi artikel opini strategis yang dioptimasi untuk Answer Engines (AEO).</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="p-12 bg-surface/50 rounded-[3rem] border border-outline/10 flex flex-col items-center gap-6">
              <Users className="w-12 h-12 text-accent/40" />
              <h4 className="font-newsreader text-2xl text-foreground">Executive Profiling</h4>
              <p className="text-sm text-foreground/40 leading-relaxed">Membangun rekam jejak digital yang kredibel untuk mempermudah proses due diligence investor.</p>
            </div>
            <div className="p-12 bg-surface/50 rounded-[3rem] border border-outline/10 flex flex-col items-center gap-6">
              <Search className="w-12 h-12 text-accent/40" />
              <h4 className="font-newsreader text-2xl text-foreground">SGE/AEO Mastery</h4>
              <p className="text-sm text-foreground/40 leading-relaxed">Memastikan AI dan Search Engine merekomendasikan entitas Anda sebagai otoritas nomor satu di industrinya.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
