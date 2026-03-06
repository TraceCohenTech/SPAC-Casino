import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer, Cell } from 'recharts';
import { spacs } from '../data/spacs';
import SectionHeader from './SectionHeader';

function getBarColor(returnPct: number, status: string) {
  if (status === 'liquidated') return '#aeaeb2';
  if (returnPct >= 0) return '#00d97e';
  if (returnPct >= -60) return '#ffd60a';
  if (returnPct >= -80) return '#ff7a00';
  return '#ff3b3b';
}

const chartData = spacs.map(s => ({
  ticker: s.ticker,
  name: s.name,
  returnPct: s.returnPct,
  status: s.status,
  currentPrice: s.currentPrice,
  spac: s.spac,
}));

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof chartData[0] }> }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  const color = getBarColor(d.returnPct, d.status);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-4 min-w-[200px]">
      <p className="font-bold text-[#1d1d1f] text-sm">{d.name}</p>
      <p className="text-[11px] text-[#6e6e73] mb-3">{d.ticker} &middot; via {d.spac}</p>
      <div className="space-y-1 text-[13px]">
        <div className="flex justify-between"><span className="text-[#6e6e73]">Return</span><span className="font-semibold" style={{ color }}>{d.returnPct > 0 ? '+' : ''}{d.returnPct}%</span></div>
        <div className="flex justify-between"><span className="text-[#6e6e73]">Price</span><span className="text-[#1d1d1f]">~${d.currentPrice}</span></div>
        <div className="flex justify-between"><span className="text-[#6e6e73]">$1K &rarr;</span><span style={{ color }}>${Math.round(1000 * (1 + d.returnPct / 100)).toLocaleString()}</span></div>
        <div className="flex justify-between"><span className="text-[#6e6e73]">$10K &rarr;</span><span style={{ color }}>${Math.round(10000 * (1 + d.returnPct / 100)).toLocaleString()}</span></div>
      </div>
    </div>
  );
}

export default function ReturnChart() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section>
      <SectionHeader title="Return vs. $10 SPAC Price" subtitle="All merged SPACs from Social Capital series. Hover for details." />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="glass p-4 sm:p-6"
      >
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
            <XAxis
              dataKey="ticker"
              tick={{ fill: '#6e6e73', fontSize: 11, fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#aeaeb2', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${v}%`}
              domain={['dataMin - 10', 'dataMax + 20']}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            <ReferenceLine y={0} stroke="#d1d1d6" strokeWidth={1} />
            <ReferenceLine y={118} stroke="#3b82f6" strokeWidth={1.5} strokeDasharray="6 4" label={{ value: 'QQQ +118%', fill: '#3b82f6', fontSize: 10, position: 'right' }} />
            <Bar dataKey="returnPct" radius={[6, 6, 0, 0]} maxBarSize={48}>
              {chartData.map((entry) => (
                <Cell key={entry.ticker} fill={getBarColor(entry.returnPct, entry.status)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="flex flex-wrap gap-4 mt-4 text-[11px] text-[#6e6e73] justify-center">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#ff3b3b]" /> Bankrupt / Near-zero</div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#ff7a00]" /> -80% to -99%</div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#ffd60a]" /> -50% to -80%</div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#00d97e]" /> Positive return</div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#aeaeb2]" /> Liquidated (~$10.35)</div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6]" /> QQQ +118%</div>
        </div>
      </motion.div>
    </section>
  );
}
