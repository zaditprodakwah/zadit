import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-margin text-center">
      <h1 className="font-newsreader text-8xl md:text-9xl mb-8 italic text-accent animate-pulse">404</h1>
      <h2 className="font-newsreader text-4xl mb-12 text-foreground">Halaman Tidak Ditemukan.</h2>
      <p className="font-inter text-foreground/40 max-w-md mb-16 leading-relaxed">
        Sepertinya Anda tersesat di labirin strategi kami. Mari kembali ke jalur yang benar untuk membangun bisnis Anda.
      </p>
      <Link 
        href="/"
        className="flex items-center gap-4 bg-foreground text-background px-10 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all shadow-xl"
      >
        <ArrowLeft className="w-5 h-5" /> Kembali ke Beranda
      </Link>
    </div>
  );
}
