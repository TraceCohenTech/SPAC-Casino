import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { pipeDeals } from '../data/spacs';
import SectionHeader from './SectionHeader';

function Pill({ value, type }: { value: string; type: 'pos' | 'neg' | 'neutral' }) {
  const cls = type === 'pos'
    ? 'bg-[#00d97e]/10 text-[#00d97e]'
    : type === 'neg'
    ? 'bg-[#ff3b3b]/10 text-[#ff3b3b]'
    : 'bg-[#aeaeb2]/10 text-[#aeaeb2]';
  return <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${cls}`}>{value}</span>;
}

export default function PipeDeals() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section>
      <SectionHeader title="PIPE Deals" subtitle="Social Capital as co-investor (not sponsor). Performance from $10 baseline." />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="glass overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-black/5">
                {['Company', 'Ticker', 'Sector', 'Return from $10', 'Status', 'Notes'].map(h => (
                  <th key={h} className="px-5 py-3.5 text-left text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pipeDeals.map((d) => {
                const isPos = d.returnPct >= 0;
                const statusType = d.status === 'Active' ? 'pos' : d.status === 'Delisted' ? 'neutral' : 'neg';

                return (
                  <tr key={d.ticker} className="border-b border-black/[0.03] hover:bg-black/[0.015] transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-[#1d1d1f]">{d.name}</td>
                    <td className="px-5 py-3.5 text-lg font-bold text-[#1d1d1f] tracking-tight">{d.ticker}</td>
                    <td className="px-5 py-3.5 text-[#6e6e73]">{d.sector}</td>
                    <td className="px-5 py-3.5">
                      <Pill value={`${isPos ? '+' : ''}${d.returnPct}%`} type={isPos ? 'pos' : 'neg'} />
                    </td>
                    <td className="px-5 py-3.5">
                      <Pill value={d.status} type={statusType} />
                    </td>
                    <td className="px-5 py-3.5 text-[11px] text-[#6e6e73]">{d.notes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
