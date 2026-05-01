import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <section className="pt-48 pb-32 px-margin max-w-4xl mx-auto">
        <h1 className="font-newsreader text-6xl md:text-8xl italic text-foreground mb-16">Terms of Execution.</h1>
        
        <div className="space-y-12 text-foreground/60 leading-relaxed font-inter">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">1. Engagement Definition</h2>
            <p>Setiap layanan yang diberikan oleh PRADIKTIF didefinisikan sebagai &quot;Bantuan Strategis & Penyusunan Dokumen&quot;. Tanggung jawab akhir atas penggunaan, implementasi, dan verifikasi data tetap berada di tangan klien.</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">2. Ghostwriting & IP Rights</h2>
            <p>PRADIKTIF secara permanen melepaskan seluruh hak moral dan hak cipta atas produk akhir kepada klien. Klien adalah pemilik sah 100% dari dokumen yang telah dilunasi biayanya.</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">3. Liability Limitation</h2>
            <p>PRADIKTIF tidak bertanggung jawab atas keputusan pihak ketiga (Auditor, Regulator, Investor, Promotor). Kami menjamin kualitas proses dan metodologi, namun tidak dapat menjamin hasil di luar kendali teknis kami.</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">4. Payment & Commitment</h2>
            <p>Proyek dimulai setelah pembayaran deposit (DP) sesuai tier investasi yang disepakati. Pembatalan sepihak setelah proses riset dimulai akan dikenakan biaya proporsional atas jam kerja yang telah dikeluarkan.</p>
          </div>

          <div className="pt-12 border-t border-outline/10 text-[10px] font-black uppercase tracking-widest">
            Last Updated: Mei 2026 | Strategic Master Agreement (SMA)
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
