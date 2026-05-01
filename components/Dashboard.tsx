'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  LineChart, 
  Line, 
  Tooltip, 
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area
} from 'recharts';
import WhatsAppForm from './WhatsAppForm';

const data = [
  { name: 'Jan', organic: 4000, conv: 2400 },
  { name: 'Feb', organic: 3000, conv: 1398 },
  { name: 'Mar', organic: 2000, conv: 9800 },
  { name: 'Apr', organic: 2780, conv: 3908 },
  { name: 'May', organic: 1890, conv: 4800 },
  { name: 'Jun', organic: 2390, conv: 3800 },
  { name: 'Jul', organic: 3490, conv: 4300 },
  { name: 'Aug', organic: 4500, conv: 5000 },
  { name: 'Sep', organic: 5200, conv: 6200 },
  { name: 'Oct', organic: 6100, conv: 7500 },
  { name: 'Nov', organic: 8200, conv: 8900 },
  { name: 'Dec', organic: 12000, conv: 10500 },
];

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="portofolio" 
      className="isolate relative py-40 px-margin bg-background z-10 border-t border-outline/10 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6 mb-10"
            >
              <div className="w-12 h-[1px] bg-accent" />
              <p className="text-[11px] uppercase tracking-[0.6em] font-bold text-accent font-inter">Kinerja Strategis</p>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-newsreader text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.1] text-balance"
            >
              Data yang Berbicara, <br />
              <span className="italic text-accent">Otoritas yang Teruji.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-lg text-foreground/40 max-w-sm mb-4 text-balance"
          >
            Visualisasi pertumbuhan performa klien dalam 12 bulan pertama kerjasama strategi naratif.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Intelligence Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 bg-surface/30 backdrop-blur-md rounded-[3rem] p-10 md:p-12 border border-outline/10 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h3 className="text-2xl font-newsreader font-bold text-foreground mb-2">Organic Authority Index</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold">Traffic & Narrative Engagement Analysis</p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-accent text-4xl font-newsreader italic">+280%</span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold mt-1">Avg. Annual Scalability</p>
              </div>
            </div>
            
            <div className="h-[400px] w-full">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: 'rgba(0,0,0,0.3)', fontWeight: 700 }}
                      dy={10}
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--surface)', 
                        border: '1px solid rgba(0,0,0,0.05)',
                        borderRadius: '1rem',
                        fontSize: '11px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="organic" 
                      stroke="var(--accent)" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorOrganic)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </motion.div>

          {/* Performance Meta stats */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-surface/30 backdrop-blur-md rounded-[3rem] p-10 border border-outline/10 hover:border-accent/20 transition-all duration-700"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/20 mb-10">Conversion Efficiency</p>
              <div className="h-[120px] mb-8">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <LineChart data={data}>
                      <Line type="monotone" dataKey="conv" stroke="var(--accent)" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
              <p className="text-4xl font-newsreader font-bold italic text-foreground mb-4">Peningkatan 4.2x</p>
              <p className="text-[13px] text-foreground/40 leading-relaxed text-balance">Optimalisasi alur konversi yang berfokus pada psikologi audiens premium.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex-1 bg-accent rounded-[3rem] p-10 text-background flex flex-col justify-between shadow-xl shadow-accent/10"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-background/40">Investigasi Lanjutan</p>
              <div>
                <h4 className="text-3xl font-newsreader font-bold italic mb-8 leading-tight">Siap membedah potensi digital Anda?</h4>
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full bg-background text-foreground py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500 shadow-lg"
                >
                  Mulai Investigasi Strategis
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <WhatsAppForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialInterest="Performa Digital" />
    </section>
  );
}
