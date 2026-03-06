import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { pipeDeals } from '../data/spacs';

function Pill({ value, type }: { value: string; type: 'pos' | 'neg' | 'neutral' }) {
  const cls = type === 'pos'
    ? 'bg-green/10 text-green'
    : type === 'neg'
    ? 'bg-accent/10 text-accent'
    : 'bg-muted/10 text-muted';
  return <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono ${cls}`}>{value}</span>;
}

export default function PipeDeals() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-[10px] tracking-[4px] uppercase text-accent mb-4 font-medium">
        PIPE Deals — Chamath as Co-Investor (Not Sponsor)
      </div>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="p-5 border-b border-border">
          <h3 className="text-lg font-bold">Social Capital PIPE Investments</h3>
          <p className="text-[11px] text-muted mt-1">Chamath invested in these SPACs as a PIPE participant, not the sponsor. Performance from $10 baseline.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-surface2">
                {['Company', 'Ticker', 'Sector', 'Return from $10', 'Status', 'Notes'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-[10px] tracking-[1.5px] uppercase text-muted border-b border-border whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pipeDeals.map((d) => {
                const isPos = d.returnPct >= 0;
                const statusType = d.status === 'Active' ? 'pos' : d.status === 'Delisted' ? 'neutral' : 'neg';

                return (
                  <tr key={d.ticker} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors">
                    <td className="px-4 py-3 font-semibold">{d.name}</td>
                    <td className="px-4 py-3 text-lg font-black tracking-wide">{d.ticker}</td>
                    <td className="px-4 py-3 text-muted">{d.sector}</td>
                    <td className="px-4 py-3">
                      <Pill
                        value={`${isPos ? '+' : ''}${d.returnPct}%`}
                        type={isPos ? 'pos' : 'neg'}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Pill value={d.status} type={statusType} />
                    </td>
                    <td className="px-4 py-3 text-[10px] text-muted">{d.notes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
