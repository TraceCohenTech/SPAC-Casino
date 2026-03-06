import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { mergedSpacs, spacColors } from '../data/spacs';
import SectionHeader from './SectionHeader';

const AMOUNT = 10000;
const totalInvested = mergedSpacs.length * AMOUNT;
const portfolioData = mergedSpacs.map(s => {
  const currentVal = Math.round(AMOUNT * (1 + s.returnPct / 100));
  return {
    name: s.ticker,
    fullName: s.name,
    invested: AMOUNT,
    currentVal,
    returnPct: s.returnPct,
  };
});
const totalValue = portfolioData.reduce((sum, p) => sum + p.currentVal, 0);
const totalReturn = ((totalValue - totalInvested) / totalInvested) * 100;

// What if you put the same total in QQQ, SPY, or SOFI?
const alternatives = [
  { label: 'Equal-weight SPACs', value: totalValue, color: '#ff3b3b' },
  { label: 'All-in SOFI', value: Math.round(totalInvested * (1 + 88 / 100)), color: '#00d97e' },
  { label: 'QQQ (same period)', value: Math.round(totalInvested * 2.18), color: '#3b82f6' },
  { label: 'SPY (same period)', value: Math.round(totalInvested * 1.92), color: '#6366f1' },
  { label: 'Cash (0%)', value: totalInvested, color: '#aeaeb2' },
];

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof portfolioData[0] }> }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-4">
      <p className="font-bold text-sm text-[#1d1d1f]">{d.fullName} ({d.name})</p>
      <p className="text-[13px] text-[#6e6e73] mt-1">Invested: ${d.invested.toLocaleString()}</p>
      <p className={`text-[13px] font-semibold ${d.currentVal >= d.invested ? 'text-[#00d97e]' : 'text-[#ff3b3b]'}`}>
        Now: ${d.currentVal.toLocaleString()} ({d.returnPct > 0 ? '+' : ''}{d.returnPct}%)
      </p>
    </div>
  );
}

export default function HypotheticalPortfolio() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section>
      <SectionHeader title="Hypothetical Portfolio" subtitle={`$${(AMOUNT / 1000).toFixed(0)}K in each of the 6 merged SPACs ($${(totalInvested / 1000).toFixed(0)}K total)`} />
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass p-6 flex flex-col items-center"
        >
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={portfolioData}
                dataKey="currentVal"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                innerRadius={60}
                strokeWidth={2}
                stroke="#ffffff"
              >
                {portfolioData.map(entry => (
                  <Cell key={entry.name} fill={spacColors[entry.name] || '#6e6e73'} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-2">
            <p className="text-3xl font-bold text-[#ff3b3b]">${totalValue.toLocaleString()}</p>
            <p className="text-sm text-[#6e6e73]">from ${totalInvested.toLocaleString()} invested ({totalReturn.toFixed(0)}%)</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {portfolioData.map(p => (
              <div key={p.name} className="flex items-center gap-1.5 text-[11px] text-[#6e6e73]">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: spacColors[p.name] || '#6e6e73' }} />
                {p.name}: ${p.currentVal.toLocaleString()}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Alternative comparison */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass p-6"
        >
          <h3 className="text-lg font-bold text-[#1d1d1f] mb-1">What If You Invested ${(totalInvested / 1000).toFixed(0)}K Instead In...</h3>
          <p className="text-[13px] text-[#aeaeb2] mb-5">The same ${(totalInvested / 1000).toFixed(0)}K, different destinations.</p>
          <div className="space-y-3">
            {alternatives.map((alt, i) => {
              const pct = (alt.value / totalInvested) * 100;
              const maxPct = Math.max(...alternatives.map(a => (a.value / totalInvested) * 100));
              const barW = (pct / maxPct) * 100;
              return (
                <motion.div
                  key={alt.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="flex justify-between text-[13px] mb-1">
                    <span className="font-medium text-[#1d1d1f]">{alt.label}</span>
                    <span className="font-bold" style={{ color: alt.color }}>${alt.value.toLocaleString()}</span>
                  </div>
                  <div className="h-6 bg-black/[0.03] rounded-lg overflow-hidden">
                    <motion.div
                      className="h-full rounded-lg"
                      style={{ backgroundColor: alt.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${barW}%` } : {}}
                      transition={{ duration: 0.8, delay: i * 0.07 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
