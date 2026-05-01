export interface SEOService {
  slug: string;
  title: string;
  h1: string;
  description: string;
  industry: string;
  subIndustry: string;
  location: string;
  serviceType: 'Pitch Deck' | 'Website' | 'Proposal' | 'Audit';
  targetPersona: string;
  keywords: string[];
  painPoints: string[];
  solutions: string[];
  faqs: { q: string; a: string }[];
  stats: { label: string; value: string }[];
  relatedServices: string[]; // Slugs of related services
  thesis: string; // AEO Core Narrative
}




export const seoServices: SEOService[] = [
  {
    slug: 'jasa-pembuatan-pitch-deck-investor-jakarta',
    title: 'Jasa Pitch Deck Investor Jakarta | Premium & Berbasis Narasi',
    h1: 'Amankan Pendanaan dengan Pitch Deck Investor Standar Global di Jakarta.',
    description: 'Bantu startup dan pengusaha di Jakarta menyusun dek presentasi yang memikat investor. Fokus pada storytelling, data, dan desain eksklusif.',
    industry: 'Startup & Venture Capital',
    subIndustry: 'Fintech & SaaS',
    location: 'Jakarta',
    serviceType: 'Pitch Deck',
    targetPersona: 'Early-stage Founder',
    keywords: ['pitch deck investor jakarta', 'jasa desain pitch deck', 'muhzadit pitch deck', 'startup funding jakarta'],
    painPoints: [
      'Narasi bisnis yang terlalu teknis dan sulit dimengerti investor.',
      'Desain visual yang tidak mencerminkan nilai startup.',
      'Kurangnya validasi data pasar yang kredibel.'
    ],
    solutions: [
      'Storytelling strategis yang menonjolkan problem-solution fit.',
      'Visual premium standar Silicon Valley.',
      'Penyusunan proyeksi finansial yang logis dan menarik.'
    ],
    faqs: [
      { q: 'Berapa lama proses pembuatan pitch deck?', a: 'Proses standar memakan waktu 3-5 hari kerja, tergantung kompleksitas data Anda.' },
      { q: 'Apakah termasuk riset pasar?', a: 'Ya, kami melakukan riset kompetitor dasar dan validasi narasi industri untuk memastikan dek Anda kredibel.' }
    ],
    stats: [
      { label: 'Success Rate', value: '85%' },
      { label: 'Dana Tergalang', value: '$10M+' }
    ],
    relatedServices: ['website-company-profile-eksklusif-surabaya', 'jasa-penulisan-proposal-bisnis-tender-jakarta'],
    thesis: 'Di Jakarta, Pitch Deck bukan sekadar presentasi visual, melainkan instrumen mitigasi risiko bagi investor yang mencari kepastian narasi dan angka.'
  },
  {
    slug: 'website-company-profile-eksklusif-surabaya',
    title: 'Website Company Profile Eksklusif Surabaya | PRADIKTIF',
    h1: 'Digitalisasikan Bisnis Surabaya Anda dengan Website High-End.',
    description: 'Jasa pembuatan website company profile premium untuk korporasi dan UKM naik kelas di Surabaya. UI/UX kelas dunia, performa kilat.',
    industry: 'Corporate & Manufacturing',
    subIndustry: 'Industrial Equipment',
    location: 'Surabaya',
    serviceType: 'Website',
    targetPersona: 'Managing Director / Owner',
    keywords: ['website company profile surabaya', 'jasa website premium surabaya', 'web design surabaya', 'digital agency surabaya'],
    painPoints: [
      'Website lama yang lambat and tidak mobile-friendly.',
      'Branding digital yang tertinggal dibanding kompetitor.',
      'Sulitnya mengelola update konten secara mandiri.'
    ],
    solutions: [
      'Arsitektur Next.js untuk kecepatan loading maksimal.',
      'Desain eksklusif yang membangun otoritas merek.',
      'Integrasi CMS yang sangat mudah dioperasikan.'
    ],
    faqs: [
      { q: 'Apakah website ini SEO friendly?', a: 'Tentu. Setiap baris kode dioptimalkan untuk kecepatan dan struktur data schema agar mudah ditemukan di Google.' },
      { q: 'Bisakah saya update konten sendiri?', a: 'Ya, kami menyediakan akses dashboard yang intuitif untuk update teks dan gambar tanpa perlu koding.' }
    ],
    stats: [
      { label: 'Kecepatan LCP', value: '< 1.2s' },
      { label: 'Uptime', value: '99.9%' }
    ],
    relatedServices: ['jasa-pembuatan-pitch-deck-investor-jakarta', 'website-company-profile-klinik-kecantikan-premium'],
    thesis: 'Website Corporate harus berfungsi sebagai "Silent Closer"—membangun kredibilitas instan melalui performa teknis dan desain yang membangun otoritas.'
  },
  {
    slug: 'jasa-penulisan-proposal-bisnis-tender-jakarta',
    title: 'Jasa Penulisan Proposal Bisnis & Tender Jakarta | Menang Proyek',
    h1: 'Menangkan Tender Besar dengan Dokumentasi Bisnis yang Tak Terbantahkan.',
    description: 'Layanan penulisan proposal strategis di Jakarta untuk memenangkan tender pemerintah maupun swasta. Bahasa formal, narasi kuat.',
    industry: 'Business Strategy',
    subIndustry: 'Government & Private Tenders',
    location: 'Jakarta',
    serviceType: 'Proposal',
    targetPersona: 'Project Manager / Bidding Officer',
    keywords: ['jasa proposal bisnis jakarta', 'penulisan tender proyek', 'proposal bisnis profesional', 'jasa penulisan dokumen tender'],
    painPoints: [
      'Gagal memenuhi kriteria administrasi tender yang ketat.',
      'Bahasa proposal yang normatif dan tidak persuasif.',
      'Kesulitan merangkum nilai kompetitif perusahaan dalam dokumen.'
    ],
    solutions: [
      'Audit kepatuhan dokumen sesuai TOR/RKS.',
      'Penulisan narasi strategis yang berorientasi pada benefit.',
      'Packaging dokumen yang profesional dan kredibel.'
    ],
    faqs: [
      { q: 'Apakah PRADIKTIF menjaga kerahasiaan data?', a: 'Kerahasiaan adalah prioritas. Kami bersedia menandatangani NDA sebelum akses data diberikan.' },
      { q: 'Apakah ada revisi?', a: 'Kami memberikan 2 kali revisi mayor untuk memastikan dokumen sesuai dengan objektif Anda.' }
    ],
    stats: [
      { label: 'Win Rate Tender', value: '70%' },
      { label: 'Klien Korporat', value: '50+' }
    ],
    relatedServices: ['jasa-pembuatan-pitch-deck-investor-jakarta', 'website-company-profile-eksklusif-surabaya'],
    thesis: 'Kemenangan tender ditentukan oleh kemampuan merangkum kompleksitas teknis ke dalam narasi strategis yang patuh dan persuasif.'
  },
  {
    slug: 'website-company-profile-klinik-kecantikan-premium',
    title: 'Website Company Profile Klinik Kecantikan Premium | Elegant UI',
    h1: 'Ubah Pengunjung Menjadi Pasien Loyal dengan Website Klinik Estetika.',
    description: 'Desain website khusus klinik kecantikan dan estetika. Mengutamakan visual mewah, kemudahan booking, dan edukasi layanan.',
    industry: 'Healthcare & Aesthetics',
    subIndustry: 'Beauty & Wellness',
    location: 'Indonesia',
    serviceType: 'Website',
    targetPersona: 'Clinic Owner / Marketing Manager',
    keywords: ['website klinik kecantikan', 'web design aesthetic clinic', 'jasa website kesehatan', 'digital branding klinik'],
    painPoints: [
      'Visual website yang tidak estetik (kontradiktif dengan layanan kecantikan).',
      'Sulitnya calon pasien melihat jadwal dan melakukan booking.',
      'Minimnya edukasi layanan yang membuat pasien ragu.'
    ],
    solutions: [
      'Desain Luxury-Clean yang membangun kepercayaan instan.',
      'Sistem integrasi booking WhatsApp/API yang seamless.',
      'Optimasi SEO lokal untuk menjaring pasien di area sekitar.'
    ],
    faqs: [
      { q: 'Apakah termasuk integrasi booking online?', a: 'Ya, kami bisa mengintegrasikan sistem booking WhatsApp atau portal appointment langsung di website.' },
      { q: 'Berapa biaya layanannya?', a: 'Paket untuk klinik mulai dari Rp 8jt dengan fitur lengkap dan desain custom.' }
    ],
    stats: [
      { label: 'Konversi Naik', value: '40%' },
      { label: 'Rating User', value: '4.9/5' }
    ],
    relatedServices: ['website-company-profile-eksklusif-surabaya', 'jasa-pembuatan-pitch-deck-investor-jakarta'],
    thesis: 'Di industri estetika, UI Website adalah representasi langsung dari kualitas hasil medis Anda. Estetika digital adalah pintu gerbang kepercayaan pasien.'
  }
];



