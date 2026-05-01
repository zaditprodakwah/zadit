import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, BookOpen, Search, Zap, CheckCircle2, Award } from 'lucide-react';
import WhatsAppForm from '@/components/WhatsAppForm';

export default function AcademicVanguard() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Service Section */}
      <section className="pt-48 pb-32 px-margin border-b border-outline/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent font-inter">
              Service Pillar: SV-01
            </span>
          </div>
          <h1 className="font-newsreader text-7xl md:text-[9rem] italic text-foreground leading-[0.8] mb-12 tracking-tighter">
            Academic <br />
            <span className="text-accent">Vanguard.</span>
          </h1>
          <p className="font-inter text-2xl md:text-3xl text-foreground/40 max-w-3xl leading-tight text-balance">
            Pengawal Integritas Akademik. Solusi riset tingkat tinggi untuk Mahasiswa Pascasarjana, Dosen, dan Peneliti Elit.
          </p>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-32 px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Forensic Integrity</h3>
            <p className="text-foreground/40 leading-relaxed">Garansi Turnitin &lt; 15% (No-Repository). Setiap kalimat dirancang organik untuk lolos dari deteksi AI dan audit akademik ketat.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Scopus Mastery</h3>
            <p className="text-foreground/40 leading-relaxed">Navigasi publikasi Jurnal Internasional Q1-Q4. Penyesuaian metodologi dan narasi bab pembahasan sesuai standar peer-reviewer global.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <Search className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Methodology QA</h3>
            <p className="text-foreground/40 leading-relaxed">Analisis statistik lanjut menggunakan SPSS, PLS, dan AMOS. Membangun kerangka logika yang kebal terhadap bantahan promotor/penguji.</p>
          </div>
        </div>
      </section>

      {/* Case Study: The Medical Specialist */}
      <section className="py-32 bg-surface/30 border-y border-outline/10 px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-10">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                 <Award className="w-4 h-4" /> Case Study: CS-ACA-04
              </div>
              <h2 className="font-newsreader text-5xl md:text-6xl italic text-foreground">Penyelamatan Disertasi S3 Kedokteran.</h2>
              <div className="space-y-6 text-foreground/50">
                 <p className="text-lg">Klien menghadapi penolakan Scopus Q2 berulang kali dengan catatan &quot;Poor Language & Methodology Gap&quot;. Sisa waktu studi: 1 bulan.</p>
                 <div className="p-8 bg-background border border-outline/10 rounded-3xl">
                    <p className="text-accent font-bold mb-2">PRADIKTIF Action:</p>
                    <p className="italic leading-relaxed">Eksekusi AI-Detox Protocol. Perombakan total Bab Pembahasan. Sintesis 20 literatur global terbaru. Pengecekan sitasi manual.</p>
                 </div>
                 <div className="flex items-center gap-4 text-foreground font-bold">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Hasil: Turnitin 35% → 8%. Accepted in 14 Days.
                 </div>
              </div>
           </div>
           <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-outline/20">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop" alt="Academic Success" className="object-cover w-full h-full grayscale opacity-60" />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
           </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-32 px-margin text-center">
         <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="font-newsreader text-5xl italic text-foreground">Mulai Kemitraan Akademik.</h2>
            <p className="text-foreground/40 text-xl leading-relaxed italic">Investasi mulai dari Rp 8.500.000 untuk pendampingan penuh. Kualitas adalah garansi mutlak kami.</p>
            <div className="flex justify-center">
              <button className="bg-accent text-background px-12 py-6 rounded-full font-black uppercase tracking-[0.4em] text-[12px] shadow-2xl hover:bg-foreground hover:text-background transition-all">
                Amankan Gelar Anda
              </button>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
