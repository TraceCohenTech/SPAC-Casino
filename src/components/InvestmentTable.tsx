import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { spacs, mergedSpacs } from '../data/spacs';
import SectionHeader from './SectionHeader';

function Pill({ value, type }: { value: string; type: 'pos' | 'neg' | 'neutral' }) {
  const cls = type === 'pos'
    ? 'bg-[#00d97e]/10 text-[#00d97e]'
    : type === 'neg'
    ? 'bg-[#ff3b3b]/10 text-[#ff3b3b]'
    : 'bg-[#aeaeb2]/10 text-[#aeaeb2]';
  return <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${cls}`}>{value}</span>;
}

export default function InvestmentTable() {
  const [amount, setAmount] = useState<1000 | 10000>(1000);
  const [ref, inView] = useInView<HTMLDivElement>();

  const merged6Total = mergedSpacs.reduce((sum, s) => sum + Math.round(amount * (1 + s.returnPct / 100)), 0);
  const merged6Invested = mergedSpacs.length * amount;
  const merged6GL = merged6Total - merged6Invested;
  const qqqTotal = merged6Invested * 2.18;
  const spyTotal = merged6Invested * 1.92;

  return (
    <section>
      <SectionHeader title="Capital Simulation" subtitle="If you invested at merger / SPAC price ($10/share)" />

      <div className="flex gap-2 mb-4">
        {([1000, 10000] as const).map((a) => (
          <button
            key={a}
            onClick={() => setAmount(a)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              amount === a
                ? 'bg-[#1d1d1f] text-white shadow-lg'
                : 'bg-white text-[#6e6e73] hover:bg-black/5'
            }`}
          >
            ${a.toLocaleString()} Invested
          </button>
        ))}
      </div>

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
                {['Company', 'SPAC', 'Merged', 'Return', '~Price', `$${amount.toLocaleString()} Now`, 'Gain/Loss', 'Status'].map(h => (
                  <th key={h} className="px-5 py-3.5 text-left text-[10px] font-semibold text-[#aeaeb2] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {spacs.map((s) => {
                const nowVal = Math.round(amount * (1 + s.returnPct / 100));
                const gl = nowVal - amount;
                const isPos = gl >= 0;

                return (
                  <tr key={s.ticker} className="border-b border-black/[0.03] hover:bg-black/[0.015] transition-colors">
                    <td className="px-5 py-3.5">
                      <span className="font-semibold text-[#1d1d1f]">{s.name}</span>
                      <span className="block text-[11px] text-[#aeaeb2]">{s.sector}</span>
                    </td>
                    <td className="px-5 py-3.5 text-[#6e6e73]">{s.spac}</td>
                    <td className="px-5 py-3.5 text-[#6e6e73]">{s.merged}</td>
                    <td className="px-5 py-3.5">
                      <Pill
                        value={`${s.returnPct > 0 ? '+' : ''}${s.returnPct}%`}
                        type={s.returnPct >= 0 ? 'pos' : s.status === 'liquidated' ? 'neutral' : 'neg'}
                      />
                    </td>
                    <td className="px-5 py-3.5 text-[#6e6e73]">~${s.currentPrice}</td>
                    <td className={`px-5 py-3.5 text-lg font-bold ${isPos ? 'text-[#00d97e]' : 'text-[#ff3b3b]'}`}>
                      ${nowVal.toLocaleString()}
                    </td>
                    <td className={`px-5 py-3.5 font-semibold ${isPos ? 'text-[#00d97e]' : 'text-[#ff3b3b]'}`}>
                      {isPos ? '+' : ''}${gl.toLocaleString()}
                    </td>
                    <td className="px-5 py-3.5">
                      <Pill
                        value={s.statusLabel}
                        type={s.status === 'active' ? 'pos' : s.status === 'liquidated' ? 'neutral' : 'neg'}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Totals */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
        {[
          { label: `Total Invested (${amount === 1000 ? '$1K' : '$10K'} x 6)`, value: `$${merged6Invested.toLocaleString()}`, color: 'text-[#1d1d1f]' },
          { label: 'Total Value Now', value: `$${merged6Total.toLocaleString()}`, color: 'text-[#ff3b3b]' },
          { label: 'Total Gain/Loss', value: `${merged6GL >= 0 ? '+' : ''}$${merged6GL.toLocaleString()}`, color: 'text-[#ff3b3b]' },
          { label: 'vs. QQQ Same $', value: `$${Math.round(qqqTotal).toLocaleString()}`, color: 'text-[#00d97e]' },
          { label: 'vs. SPY Same $', value: `$${Math.round(spyTotal).toLocaleString()}`, color: 'text-[#00d97e]' },
        ].map((t) => (
          <div key={t.label} className="glass text-center py-4 px-3">
            <p className="text-[10px] font-medium text-[#aeaeb2] uppercase tracking-wider mb-1">{t.label}</p>
            <p className={`text-xl font-bold ${t.color}`}>{t.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
