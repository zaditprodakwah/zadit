import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <section className="pt-48 pb-32 px-margin max-w-4xl mx-auto">
        <h1 className="font-newsreader text-6xl md:text-8xl italic text-foreground mb-16">Privacy Protocol.</h1>
        
        <div className="space-y-12 text-foreground/60 leading-relaxed font-inter">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">1. Shadow Agency Commitment</h2>
            <p>PRADIKTIF beroperasi dengan standar kerahasiaan absolut. Kami memahami bahwa data yang Anda berikan (riset, parameter bisnis, draf akademik) adalah aset intelektual yang sangat sensitif.</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">2. Zero-Knowledge Infrastructure</h2>
            <p>Kami tidak menggunakan penyimpanan cloud publik untuk data mentah klien tanpa enkripsi AES-256. Akses terhadap dokumen proyek dibatasi hanya kepada Lead Consultant (Muhzadit) dan tim inti yang terikat NDA ketat.</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">3. Auto-Destruct Protocol</h2>
            <p>Sesuai dengan protokol operasional kami, seluruh data mentah, riwayat revisi, dan dokumen kerja akan dihapus secara permanen (purge) dari server internal kami dalam waktu maksimal 30 hari kalender setelah proyek dinyatakan selesai.</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">4. Anonymized Portfolio</h2>
            <p>Jika kami menampilkan studi kasus, seluruh nama entitas, angka krusial, dan identitas individu akan dianonimkan secara fundamental sehingga mustahil dilacak kembali ke sumber aslinya.</p>
          </div>

          <div className="pt-12 border-t border-outline/10 text-[10px] font-black uppercase tracking-widest">
            Last Updated: Mei 2026 | Verified Security Standard
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
