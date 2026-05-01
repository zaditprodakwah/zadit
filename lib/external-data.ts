import { XMLParser } from 'fast-xml-parser';

export interface MarketPulseData {
  currency: {
    base: string;
    target: string;
    rate: number;
    trend: 'up' | 'down' | 'stable';
    formatted: string;
  };
  news: {
    title: string;
    link: string;
    source: string;
    date: string;
  }[];
  insight: string;
  technical: {
    volatility: string;
    sentiment: number; // 0-100
    momentum: string;
    rsi: number;
  };
}

export async function getMarketPulse(industry: string): Promise<MarketPulseData> {
  // 1. Fetch Exchange Rate (USD to IDR)
  let rate = 16250; // Default fallback
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD', { next: { revalidate: 3600 } });
    const data = await res.json();
    rate = data.rates.IDR;
  } catch (e) {
    console.error('Failed to fetch exchange rate', e);
  }

  // 2. Fetch Business News (Simplified Mock for now)
  const mockNews = [
    {
      title: `Trend Strategi Bisnis ${industry} 2026: Mengapa Narasi Menjadi Kunci`,
      link: "#",
      source: "PRADIKTIF Intel",
      date: new Date().toLocaleDateString()
    },
    {
      title: `Update Pendanaan Startup SE Asia: Fokus pada Profitabilitas`,
      link: "#",
      source: "Market Pulse",
      date: new Date().toLocaleDateString()
    }
  ];

  // 3. Generate Strategic Insight based on data
  let insight = "Kondisi pasar saat ini menuntut narasi yang lebih transparan dan berbasis data.";
  if (rate > 16000) {
    insight = "Dolar yang kuat menandakan urgensi bagi bisnis lokal untuk tampil dengan standar internasional guna menarik investasi asing.";
  }
  if (industry.includes('Startup')) {
    insight = "VC saat ini lebih selektif. Pitch Deck Anda harus mampu membuktikan path-to-profitability secara konkret.";
  }

  return {
    currency: {
      base: 'USD',
      target: 'IDR',
      rate: rate,
      trend: rate > 15500 ? 'up' : 'stable',
      formatted: `1 USD = Rp ${rate.toLocaleString('id-ID')}`
    },
    news: mockNews,
    insight: insight,
    technical: {
      volatility: rate > 16000 ? "HIGH" : "MODERATE",
      sentiment: 78,
      momentum: "BULLISH",
      rsi: 62.4
    }
  };
}
