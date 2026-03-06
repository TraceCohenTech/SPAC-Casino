import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { priceHistory, spacColors } from '../data/spacs';
import SectionHeader from './SectionHeader';

// Build unified timeline data
const allDates = [...new Set(priceHistory.flatMap(s => s.data.map(d => d.date)))].sort();
const tickers = priceHistory.map(s => s.ticker);

const timelineData = allDates.map(date => {
  const row: Record<string, number | string> = { date };
  priceHistory.forEach(s => {
    const point = s.data.find(d => d.date === date);
    if (point) row[s.ticker] = point.price;
  });
  return row;
});

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ dataKey: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-4 min-w-[180px]">
      <p className="text-xs font-semibold text-[#6e6e73] mb-2">{label}</p>
      {payload.map(p => (
        <div key={p.dataKey} className="flex justify-between gap-4 text-[13px]">
          <span style={{ color: p.color }} className="font-semibold">{p.dataKey}</span>
          <span className="text-[#1d1d1f] font-medium">${p.value.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

export default function PriceTimeline() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [activeTickers, setActiveTickers] = useState<Set<string>>(new Set(tickers));

  const toggle = (t: string) => {
    setActiveTickers(prev => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });
  };

  return (
    <section>
      <SectionHeader title="Price Over Time" subtitle="Stock price journey from merger to today. All started at $10/share." />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="glass p-6"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {tickers.map(t => (
            <button
              key={t}
              onClick={() => toggle(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTickers.has(t)
                  ? 'text-white shadow-md'
                  : 'bg-black/5 text-[#aeaeb2]'
              }`}
              style={activeTickers.has(t) ? { backgroundColor: spacColors[t] } : {}}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="h-[260px] sm:h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={timelineData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <XAxis
              dataKey="date"
              tick={{ fill: '#aeaeb2', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: '#aeaeb2', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${v}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={10} stroke="#d1d1d6" strokeWidth={1} strokeDasharray="4 4" label={{ value: '$10 SPAC price', fill: '#aeaeb2', fontSize: 10, position: 'right' }} />
            {tickers.filter(t => activeTickers.has(t)).map(t => (
              <Line
                key={t}
                type="monotone"
                dataKey={t}
                stroke={spacColors[t]}
                strokeWidth={2.5}
                dot={false}
                connectNulls
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  );
}
