import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { spacs, mergedSpacs, pipeDeals } from '../data/spacs';
import SectionHeader from './SectionHeader';

export default function ScoreCard() {
  const [ref, inView] = useInView<HTMLDivElement>();

  const mergedCount = mergedSpacs.length;
  const liquidatedCount = spacs.filter(s => s.status === 'liquidated').length;
  const positiveCount = mergedSpacs.filter(s => s.returnPct > 0).length;
  const avgReturn = mergedSpacs.reduce((s, v) => s + v.returnPct, 0) / mergedCount;
  const medianReturn = [...mergedSpacs].sort((a, b) => a.returnPct - b.returnPct)[Math.floor(mergedCount / 2)].returnPct;
  const bestSpac = mergedSpacs.reduce((a, b) => a.returnPct > b.returnPct ? a : b);
  const worstSpac = mergedSpacs.reduce((a, b) => a.returnPct < b.returnPct ? a : b);
  const totalCapital = spacs.reduce((s, v) => s + v.capitalRaised, 0);
  const pipePositive = pipeDeals.filter(d => d.returnPct > 0).length;
  const pipeBankrupt = pipeDeals.filter(d => d.returnPct <= -100).length;
  const stats = [
    { label: 'Total SPACs', value: '10', sub: `${mergedCount} merged, ${liquidatedCount} liquidated`, color: 'text-[#1d1d1f]' },
    { label: 'Positive Returns', value: `${positiveCount} / ${mergedCount}`, sub: 'Only SOFI in the green', color: 'text-[#00d97e]' },
    { label: 'Avg Return', value: `${avgReturn.toFixed(0)}%`, sub: `Median: ${medianReturn}%`, color: 'text-[#ff3b3b]' },
    { label: 'Best', value: bestSpac.ticker, sub: `+${bestSpac.returnPct}%`, color: 'text-[#00d97e]' },
    { label: 'Worst', value: worstSpac.ticker, sub: `${worstSpac.returnPct}%`, color: 'text-[#ff3b3b]' },
    { label: 'Capital Raised', value: `$${(totalCapital / 1000).toFixed(1)}B`, sub: 'Across all 10 SPACs', color: 'text-[#1d1d1f]' },
    { label: 'Down 90%+', value: `${mergedSpacs.filter(s => s.returnPct <= -90).length}`, sub: `of ${mergedCount} merged SPACs`, color: 'text-[#ff3b3b]' },
    { label: 'PIPE Deals', value: `${pipeDeals.length}`, sub: `${pipePositive} up, ${pipeBankrupt} bankrupt`, color: 'text-[#1d1d1f]' },
  ];

  return (
    <section>
      <SectionHeader title="The Score Card" subtitle="Key stats across all Social Capital deals" />
      <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="glass text-center py-5 px-3"
          >
            <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-2">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[11px] text-[#6e6e73] mt-1">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
