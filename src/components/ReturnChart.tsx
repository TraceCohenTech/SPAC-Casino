import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { spacs } from '../data/spacs';

function getBarColor(s: typeof spacs[0]) {
  if (s.status === 'liquidated') return '#3a3a4d';
  if (s.returnPct >= 0) return '#00d97e';
  if (s.returnPct >= -60) return '#ffd60a';
  if (s.returnPct >= -80) return '#ff7a00';
  return '#ff3b3b';
}

export default function ReturnChart() {
  const [ref, inView] = useInView<HTMLDivElement>();

  const vals = spacs.map(s => s.returnPct);
  const minVal = Math.min(...vals);
  const maxVal = Math.max(...vals);
  const totalRange = maxVal - minVal;
  const zeroFraction = maxVal / totalRange;

  return (
    <div ref={ref} className="bg-surface border border-border rounded-xl p-6">
      <div className="text-[10px] tracking-[4px] uppercase text-accent mb-4 font-medium">Performance Overview</div>
      <h3 className="text-lg font-bold mb-1">Return vs. $10 SPAC Offering Price</h3>
      <p className="text-[11px] text-muted mb-6">All merged SPACs from Social Capital series. Gray bars = liquidated. Green = positive return.</p>

      <div className="relative h-[300px] border-b border-border flex items-end gap-2">
        {/* Zero line */}
        <div
          className="absolute left-0 right-0 h-px bg-border"
          style={{ bottom: `${(1 - zeroFraction) * 100}%` }}
        />
        {/* QQQ reference line */}
        <div
          className="absolute left-0 right-0 h-[2px] bg-blue-500/40"
          style={{ bottom: `${((118 - minVal) / totalRange) * 100}%` }}
        >
          <span className="absolute right-1 -top-4 text-[9px] tracking-wider text-blue-400/70">QQQ +118%</span>
        </div>

        {spacs.map((s, i) => {
          const color = getBarColor(s);
          const barHeight = (Math.abs(s.returnPct) / totalRange) * 100;
          const isPositive = s.returnPct >= 0;

          return (
            <motion.div
              key={s.ticker}
              className="flex-1 flex flex-col items-center justify-end h-full relative group"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#1e1e28] border border-border rounded-lg p-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 min-w-[170px] text-left text-[11px] whitespace-nowrap">
                <strong className="text-sm block mb-1">{s.name} ({s.ticker})</strong>
                <div className="flex justify-between text-muted"><span>SPAC</span><span className="text-white">{s.spac}</span></div>
                <div className="flex justify-between text-muted"><span>Merged</span><span className="text-white">{s.merged}</span></div>
                <div className="flex justify-between text-muted"><span>Return</span><span style={{ color }}>{s.returnPct > 0 ? '+' : ''}{s.returnPct}%</span></div>
                <div className="flex justify-between text-muted"><span>Price</span><span className="text-white">~${s.currentPrice}</span></div>
                <div className="flex justify-between text-muted mt-1">
                  <span>$1K &rarr;</span>
                  <span style={{ color }}>${Math.round(1000 * (1 + s.returnPct / 100)).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>$10K &rarr;</span>
                  <span style={{ color }}>${Math.round(10000 * (1 + s.returnPct / 100)).toLocaleString()}</span>
                </div>
              </div>

              <motion.div
                className={`w-full cursor-pointer transition-all hover:brightness-125 ${isPositive ? 'rounded-t' : 'rounded-b'}`}
                style={{
                  height: `${barHeight}%`,
                  background: color,
                  opacity: 0.85,
                  ...(isPositive
                    ? { position: 'absolute', bottom: `${(1 - zeroFraction) * 100}%` }
                    : { position: 'absolute', top: `${zeroFraction * 100}%` }
                  ),
                }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
              <div className="absolute bottom-0 translate-y-full pt-1 text-center">
                <div className="text-[13px] font-black" style={{ color }}>
                  {s.returnPct > 0 ? '+' : ''}{s.returnPct}%
                </div>
                <div className="text-[9px] tracking-wider text-muted mt-0.5">{s.ticker}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-14 flex flex-wrap gap-4 text-[11px] text-muted">
        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-accent" /> Bankrupt / Near-zero</div>
        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-accent2" /> -80% to -99%</div>
        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-gold" /> -50% to -80%</div>
        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-green" /> Positive return</div>
        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#3a3a4d]" /> Liquidated (~$10.35)</div>
        <div className="flex items-center gap-1.5 ml-auto"><div className="w-2.5 h-2.5 rounded-sm bg-blue-500/60" /> QQQ +118%</div>
      </div>
    </div>
  );
}
