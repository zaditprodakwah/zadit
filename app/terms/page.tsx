import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <section className="pt-48 pb-32 px-margin max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent font-inter">
            Master Service Agreement
          </span>
        </div>
        <h1 className="font-newsreader text-6xl md:text-8xl italic text-foreground mb-16">Syarat & Ketentuan Layanan.</h1>
        
        <div className="space-y-16 text-foreground/60 leading-relaxed font-inter">
          <div className="space-y-6">
            <p className="text-xl text-foreground font-medium">PRADIKTIF adalah &quot;Konsultan Eksekusi Strategis & Arsitek Reputasi&quot;.</p>
            <p>Dengan mengakses layanan, mentransfer deposit, atau menyerahkan dokumen awal kepada PRADIKTIF, Anda (&quot;Klien&quot;) secara sadar menyetujui seluruh ketentuan dalam Master Service Agreement (MSA) ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "1. Batasan Peran", 
                content: "PRADIKTIF bukan Penasihat Keuangan/Hukum berlisensi. Seluruh output tidak dapat ditafsirkan sebagai jaminan kesuksesan finansial mutlak. Klien bertanggung jawab atas keabsahan data yang disuplai." 
              },
              { 
                title: "2. HAKI & Ghostwriting", 
                content: "Pasca-pelunasan 100%, seluruh HAKI dan hak moral beralih sepenuhnya kepada Klien. PRADIKTIF melepaskan hak untuk mengklaim dokumen klien secara publik." 
              },
              { 
                title: "3. Kebijakan Pembayaran", 
                content: "Proyek dimulai pasca-Deposit 50%. Tidak ada pengembalian dana (No Refund Policy) pasca-fase Investigasi Strategis dimulai karena alokasi waktu pakar yang bersifat instan." 
              },
              { 
                title: "4. Anggaran Pihak Ketiga", 
                content: "Untuk layanan Ads, Klien wajib membayar anggaran iklan langsung ke platform (Google/Meta). PRADIKTIF hanya mengelola setup dan strategi." 
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-surface/30 rounded-[3rem] border border-outline/10 space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-newsreader italic text-foreground">5. Pelindung Kewajiban & Mitigasi Risiko</h2>
            <div className="space-y-6 text-sm">
              <p><strong className="text-foreground">Capital & ESG Strategy:</strong> Keputusan pendanaan, kelulusan audit, atau denda regulator (OJK) berada di luar kendali PRADIKTIF.</p>
              <p><strong className="text-foreground">Academic Vanguard:</strong> Seluruh dokumen diserahkan sebagai &quot;Referensi Strategis & Draf Model&quot;. Klien bertanggung jawab atas kode etik akademik di institusi masing-masing.</p>
              <p><strong className="text-foreground">Strategic Amplification:</strong> Kami tidak menjamin ROI mutlak atau kedaulatan redaksional media nasional yang memegang hak veto atas headline.</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-newsreader italic text-foreground">6. Indemnifikasi</h2>
            <p className="text-sm italic">Klien setuju untuk membebaskan PT Prisma Digital Kreatif dari segala bentuk tuntutan hukum yang timbul akibat penyediaan data palsu atau penyalahgunaan hasil akhir strategi. Batas maksimal kewajiban PRADIKTIF dibatasi sebesar total nominal kontrak yang telah dibayarkan.</p>
          </div>

          <div className="pt-12 border-t border-outline/10 flex flex-col md:flex-row justify-between gap-6">
            <div className="text-[10px] font-black uppercase tracking-widest">
              Last Updated: Mei 2026 | PRADIKTIF Master Agreement
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-accent">
              Binding Master Agreement (MSA)
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
