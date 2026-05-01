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
  title: "PRADIKTIF Agency | Hasil Agency Premium. Proses Personal. Tanpa Drama.",
  description: "Shadow Agency & Infrastruktur Strategis oleh Muhzadit. Spesialis Arsitektur Pitch Deck Investor, Academic Vanguard, Bureaucratic Compliance, dan Reputation Engineering.",
  keywords: ["jasa pitch deck premium", "reputation engineering indonesia", "jasa press release media nasional", "Muhzadit PRADIKTIF", "Bappeda strategic lead", "investor pitch deck jakarta", "PRADIKTIF Agency"],
  openGraph: {
    title: "PRADIKTIF Agency | Strategic Amplification & Reputation Engineering",
    description: "Eksklusivitas dalam setiap strategi digital. Hasil Agency Premium, Proses Personal, Tanpa Drama.",
    url: "https://zadit.netlify.app",
    siteName: "PRADIKTIF Agency",
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
    title: "PRADIKTIF Agency | Shadow Agency Infrastructure",
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
                  "@id": "https://zadit.netlify.app/#website",
                  "url": "https://zadit.netlify.app",
                  "name": "PRADIKTIF",
                  "description": "Premium Digital Strategy Boutique for Growth-Oriented Businesses",
                  "publisher": { "@id": "https://zadit.netlify.app/#organization" },
                  "inLanguage": "id-ID"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://zadit.netlify.app/#webpage",
                  "url": "https://zadit.netlify.app",
                  "name": "Arsitek Pertumbuhan Digital | PRADIKTIF",
                  "isPartOf": { "@id": "https://zadit.netlify.app/#website" },
                  "about": { "@id": "https://zadit.netlify.app/#organization" },
                  "description": "Portofolio digital dan pusat strategi pertumbuhan bisnis premium oleh Muhzadit.",
                  "breadcrumb": { "@id": "https://zadit.netlify.app/#breadcrumb" },
                  "mentions": [
                    { "@type": "Thing", "name": "Digital Strategy" },
                    { "@type": "Thing", "name": "Growth Hacking" },
                    { "@type": "Thing", "name": "Pitch Deck Design" }
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://zadit.netlify.app/#founder",
                  "name": "Muhzadit",
                  "jobTitle": "Strategic Director & Founder",
                  "url": "https://zadit.netlify.app",
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
                  "@id": "https://zadit.netlify.app/#organization",
                  "name": "PRADIKTIF Agency (PT Prisma Digital Kreatif)",
                  "url": "https://zadit.netlify.app",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://zadit.netlify.app/logo.png"
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
                  "founder": { "@id": "https://zadit.netlify.app/#founder" }
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
                  "url": "https://zadit.netlify.app",
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
                      "url": "https://zadit.netlify.app/#pitch-deck"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Executive Website",
                      "url": "https://zadit.netlify.app/#web-design"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Brand Narrative",
                      "url": "https://zadit.netlify.app/#brand-narrative"
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
                      "item": "https://zadit.netlify.app"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Layanan",
                      "item": "https://zadit.netlify.app/#services"
                    }
                  ]
                },
                {
                  "@type": "Dataset",
                  "name": "PRADIKTIF Market Pulse - Strategic Impact Index 2026",
                  "description": "Data real-time mengenai dampak strategi digital terhadap pertumbuhan UMKM dan Startup di Indonesia.",
                  "creator": { "@id": "https://zadit.netlify.app/#organization" },
                  "license": "https://zadit.netlify.app/legal"
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
