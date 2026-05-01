import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "PRADIKTIF | Hasil Agency Premium. Proses Personal. Tanpa Drama.",
  description: "Strategic Advisory Boutique oleh Muhzadit. Spesialis Arsitektur Pitch Deck Investor, Website Eksklusif, dan Penjaminan Orisinalitas Naratif untuk Eksekutif & Founder visioner.",
  keywords: ["jasa pitch deck premium", "company profile website eksklusif", "arsitek pertumbuhan digital", "Muhzadit PRADIKTIF", "proposal bisnis profesional", "investor pitch deck jakarta", "premium digital agency indonesia"],
  openGraph: {
    title: "PRADIKTIF | Digital Strategy Boutique by Muhzadit",
    description: "Eksklusivitas dalam setiap strategi digital. Hasil Agency Premium, Proses Personal, Tanpa Drama.",
    url: "https://pradiktif.id",
    siteName: "PRADIKTIF",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRADIKTIF | Digital Strategy Boutique",
    description: "Hasil Agency Premium. Proses Personal. Tanpa Drama.",
    images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${newsreader.variable} antialiased selection:bg-accent selection:text-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://pradiktif.id/#website",
                  "url": "https://pradiktif.id",
                  "name": "PRADIKTIF",
                  "description": "Premium Digital Strategy Boutique for Growth-Oriented Businesses",
                  "publisher": { "@id": "https://pradiktif.id/#organization" },
                  "inLanguage": "id-ID"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://pradiktif.id/#webpage",
                  "url": "https://pradiktif.id",
                  "name": "Arsitek Pertumbuhan Digital | PRADIKTIF",
                  "isPartOf": { "@id": "https://pradiktif.id/#website" },
                  "about": { "@id": "https://pradiktif.id/#organization" },
                  "description": "Portofolio digital dan pusat strategi pertumbuhan bisnis premium oleh Muhzadit.",
                  "breadcrumb": { "@id": "https://pradiktif.id/#breadcrumb" },
                  "mentions": [
                    { "@type": "Thing", "name": "Digital Strategy" },
                    { "@type": "Thing", "name": "Growth Hacking" },
                    { "@type": "Thing", "name": "Pitch Deck Design" }
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://pradiktif.id/#founder",
                  "name": "Muhzadit",
                  "jobTitle": "Strategic Director & Founder",
                  "url": "https://pradiktif.id",
                  "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
                  "sameAs": [
                    "https://linkedin.com/in/muhzadit",
                    "https://kontak.link/muhzadit"
                  ],
                  "knowsAbout": [
                    "Business Strategy",
                    "SEO Copywriting",
                    "Investor Pitch Deck Design",
                    "High-Conversion Landing Pages",
                    "Digital Growth Hacking",
                    "Brand Narrative Engineering"
                  ],
                  "description": "Founder of PRADIKTIF and expert in digital strategy, helping high-end businesses scale through narrative-driven design."
                },
                {
                  "@type": "Organization",
                  "@id": "https://pradiktif.id/#organization",
                  "name": "PRADIKTIF (PT Prisma Digital Kreatif)",
                  "url": "https://pradiktif.id",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://pradiktif.id/logo.png"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+62-823-1636-3177",
                    "contactType": "strategic consulting",
                    "areaServed": "Global",
                    "availableLanguage": ["id", "en"]
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "SCBD District 8, Lt. 12",
                    "addressLocality": "Jakarta Selatan",
                    "postalCode": "12190",
                    "addressCountry": "ID"
                  },
                  "founder": { "@id": "https://pradiktif.id/#founder" }
                },
                {
                  "@type": "ProfessionalService",
                  "name": "PRADIKTIF Strategic Advisory",
                  "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
                  "description": "Premium Strategic Advisory for Investor Pitch Decks, Executive Portfolios, and Forensic Narrative Assurance.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "SCBD District 8, Lt. 12",
                    "addressLocality": "Jakarta Selatan",
                    "postalCode": "12190",
                    "addressCountry": "ID"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -6.2241,
                    "longitude": 106.8091
                  },
                  "url": "https://pradiktif.id",
                  "telephone": "+62-823-1636-3177",
                  "priceRange": "Rp$$$$",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Berapa lama pengerjaan Pitch Deck di PRADIKTIF?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pengerjaan Pitch Deck standar kami diselesaikan dalam 3-5 hari kerja dengan kualitas premium."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Apa yang dimaksud dengan High-Conversion Landing Page?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Landing page yang dirancang khusus dengan psikologi marketing dan SEO copywriting untuk memaksimalkan angka konversi pengunjung menjadi prospek."
                      }
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "name": "Layanan Strategis PRADIKTIF",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Investor Pitch Deck",
                      "url": "https://pradiktif.id/#pitch-deck"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Executive Website",
                      "url": "https://pradiktif.id/#web-design"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Brand Narrative",
                      "url": "https://pradiktif.id/#brand-narrative"
                    }
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://pradiktif.id"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Layanan",
                      "item": "https://pradiktif.id/#services"
                    }
                  ]
                },
                {
                  "@type": "Dataset",
                  "name": "PRADIKTIF Market Pulse - Strategic Impact Index 2026",
                  "description": "Data real-time mengenai dampak strategi digital terhadap pertumbuhan UMKM dan Startup di Indonesia.",
                  "creator": { "@id": "https://pradiktif.id/#organization" },
                  "license": "https://pradiktif.id/legal"
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
