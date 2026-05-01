import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <section className="pt-48 pb-32 px-margin max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent font-inter">
            Security Protocol: Private
          </span>
        </div>
        <h1 className="font-newsreader text-6xl md:text-8xl italic text-foreground mb-16">Kebijakan Privasi Eksekutif.</h1>
        
        <div className="space-y-16 text-foreground/60 leading-relaxed font-inter">
          <div className="space-y-6">
            <p className="text-xl text-foreground font-medium italic">&quot;Privasi Anda bukanlah fitur tambahan; ia adalah fondasi operasional dari firma ini.&quot;</p>
            <p>Sebagai infrastruktur strategis di balik layar (Shadow Agency), PRADIKTIF berkomitmen terhadap Kerahasiaan Mutlak (Zero-Knowledge OpSec) atas seluruh data klien.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 p-10 bg-surface/30 rounded-[3rem] border border-outline/10">
              <h2 className="text-lg font-black uppercase tracking-widest text-accent">1. Pengumpulan Informasi</h2>
              <p className="text-sm">Kami mengumpulkan informasi secara terukur, terbatas hanya pada kebutuhan Investigasi Strategis dan eksekusi layanan: Data Entitas & Eksekutif, serta Data Operasional, Finansial & Reputasi yang diserahkan melalui portal aman kami.</p>
            </div>
            <div className="space-y-6 p-10 bg-surface/30 rounded-[3rem] border border-outline/10">
              <h2 className="text-lg font-black uppercase tracking-widest text-accent">2. Arsitektur Keamanan</h2>
              <p className="text-sm">Kami menerapkan standar keamanan informasi tingkat institusional. Zero-Knowledge Transmission (AES-256) dan Akses Terisolasi (Need-to-Know Basis) yang dikelola secara eksklusif oleh Lead Consultant.</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-newsreader italic text-foreground">3. Protokol Penghancuran Data (30-Day Auto-Destruct)</h2>
            <p>Untuk menetralisir risiko kebocoran data pasca-eksekusi: Seluruh file mentah, draf revisi, dokumen finansial, aset kampanye, dan riwayat komunikasi strategis akan dihancurkan secara permanen (permanently purged) dari server kami maksimal 30 hari kalender setelah penyerahan deliverables final.</p>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-newsreader italic text-foreground">4. Pengecekan Penyingkapan Data</h2>
            <p>Kami tidak memperjualbelikan, menyewakan, atau membagikan data Anda kepada pihak ketiga komersial manapun. Data Anda hanya akan disingkap apabila terdapat perintah pengadilan atau Subpoena yang sah dan berkekuatan hukum tetap.</p>
          </div>

          <div className="pt-12 border-t border-outline/10 flex flex-col md:flex-row justify-between gap-6">
            <div className="text-[10px] font-black uppercase tracking-widest">
              Last Updated: Mei 2026 | PT Prisma Digital Kreatif
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-accent">
              Verified Shadow Agency Protocol
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
