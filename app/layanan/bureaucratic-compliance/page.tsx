import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, FileText, Gavel, Zap, CheckCircle2, Award } from 'lucide-react';

export default function BureaucraticCompliance() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Service Section */}
      <section className="pt-48 pb-32 px-margin border-b border-outline/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent font-inter">
              Service Pillar: SV-02
            </span>
          </div>
          <h1 className="font-newsreader text-7xl md:text-[9rem] italic text-foreground leading-[0.8] mb-12 tracking-tighter">
            Bureaucratic <br />
            <span className="text-accent">Compliance.</span>
          </h1>
          <p className="font-inter text-2xl md:text-3xl text-foreground/40 max-w-3xl leading-tight text-balance">
            Dokumen Audit-Ready untuk Instansi Pemerintah & NGO. Memastikan sinkronisasi kinerja yang kebal temuan BPK.
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
            <h3 className="font-newsreader text-3xl italic text-foreground">Audit-Ready Standard</h3>
            <p className="text-foreground/40 leading-relaxed">Penyusunan LAKIP/LKjIP dan Renstra dengan prinsip forensic traceability. Setiap IKU sinkron dengan data sumber.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <FileText className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">Policy Architecture</h3>
            <p className="text-foreground/40 leading-relaxed">Kajian Akademik dan Policy Brief untuk Eksekutif. Mengubah kompleksitas teknokratis menjadi narasi kebijakan yang persuasif.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
               <Gavel className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-newsreader text-3xl italic text-foreground">BPK & SAKIP Support</h3>
            <p className="text-foreground/40 leading-relaxed">Mitigasi risiko temuan administratif. Kami membantu mengamankan skor SAKIP A/AA dan Dana Insentif Daerah (DID).</p>
          </div>
        </div>
      </section>

      {/* Case Study: The Government Agency */}
      <section className="py-32 bg-surface/30 border-y border-outline/10 px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-10">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                 <Award className="w-4 h-4" /> Case Study: CS-GOV-01
              </div>
              <h2 className="font-newsreader text-5xl md:text-6xl italic text-foreground">Penyelamatan LAKIP Dinas Provinsi.</h2>
              <div className="space-y-6 text-foreground/50">
                 <p className="text-lg">LAKIP tahun sebelumnya mendapat catatan kuning BPK karena ketidaksesuaian target RPJMD. Waktu revisi tersisa 3 minggu.</p>
                 <div className="p-8 bg-background border border-outline/10 rounded-3xl">
                    <p className="text-accent font-bold mb-2">PRADIKTIF Action:</p>
                    <p className="italic leading-relaxed">Audit-Readiness Assessment kilat. Rekonstruksi matriks data dan penelusuran IKU dari hulu ke hilir. Justifikasi analitik variansi data.</p>
                 </div>
                 <div className="flex items-center gap-4 text-foreground font-bold">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Hasil: Disetujui BPK tanpa temuan. DID Aman. Skor SAKIP A.
                 </div>
              </div>
           </div>
           <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-outline/20">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop" alt="Government Success" className="object-cover w-full h-full grayscale opacity-60" />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
