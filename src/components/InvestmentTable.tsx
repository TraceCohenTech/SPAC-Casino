import { useState } from 'react';
import { motion } from 'framer-motion';
import { spacs, mergedSpacs } from '../data/spacs';

function Pill({ value, type }: { value: string; type: 'pos' | 'neg' | 'neutral' }) {
  const cls = type === 'pos'
    ? 'bg-green/10 text-green'
    : type === 'neg'
    ? 'bg-accent/10 text-accent'
    : 'bg-muted/10 text-muted';
  return <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono ${cls}`}>{value}</span>;
}

export default function InvestmentTable() {
  const [amount, setAmount] = useState<1000 | 10000>(1000);

  const merged6Total = mergedSpacs.reduce((sum, s) => sum + Math.round(amount * (1 + s.returnPct / 100)), 0);
  const merged6Invested = mergedSpacs.length * amount;
  const merged6GL = merged6Total - merged6Invested;

  const qqqTotal = merged6Invested * 2.18;
  const spyTotal = merged6Invested * 1.92;

  return (
    <div>
      <div className="text-[10px] tracking-[4px] uppercase text-accent mb-4 font-medium">Capital Simulation</div>

      <div className="flex gap-2 mb-4">
        {([1000, 10000] as const).map((a) => (
          <button
            key={a}
            onClick={() => setAmount(a)}
            className={`px-5 py-2 rounded text-[11px] tracking-wider uppercase font-mono border transition-all ${
              amount === a
                ? 'bg-accent text-white border-accent'
                : 'bg-transparent text-muted border-border hover:border-white/40 hover:text-white'
            }`}
          >
            ${a.toLocaleString()} Invested
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-surface border border-border rounded-xl overflow-hidden"
      >
        <div className="p-5 border-b border-border">
          <h3 className="text-lg font-bold">If You Invested at Merger / SPAC Price ($10/share)</h3>
          <p className="text-[11px] text-muted mt-1">Showing all Social Capital-sponsored SPAC deals. Excludes PIPE-only deals.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-surface2">
                {['Company', 'SPAC', 'Merged', 'Return %', '~Price', `$${amount.toLocaleString()} Now Worth`, 'Gain / Loss', 'Status'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-[10px] tracking-[1.5px] uppercase text-muted border-b border-border whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {spacs.map((s) => {
                const nowVal = Math.round(amount * (1 + s.returnPct / 100));
                const gl = nowVal - amount;
                const isPos = gl >= 0;

                return (
                  <tr key={s.ticker} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-semibold text-[13px]">{s.name}</span>
                      <span className="block text-[11px] text-muted">{s.sector}</span>
                    </td>
                    <td className="px-4 py-3 text-muted">{s.spac}</td>
                    <td className="px-4 py-3 text-muted">{s.merged}</td>
                    <td className="px-4 py-3">
                      <Pill
                        value={`${s.returnPct > 0 ? '+' : ''}${s.returnPct}%`}
                        type={s.returnPct >= 0 ? 'pos' : s.status === 'liquidated' ? 'neutral' : 'neg'}
                      />
                    </td>
                    <td className="px-4 py-3 font-mono">~${s.currentPrice}</td>
                    <td className={`px-4 py-3 text-xl font-black ${isPos ? 'text-green' : 'text-accent'}`}>
                      ${nowVal.toLocaleString()}
                    </td>
                    <td className={`px-4 py-3 text-[13px] ${isPos ? 'text-green' : 'text-accent'}`}>
                      {isPos ? '+' : ''}${gl.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
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
      <div className="mt-4 bg-accent/5 border border-accent/15 rounded-lg px-5 py-4 flex flex-wrap gap-8 items-center">
        <div>
          <div className="text-[10px] tracking-[2px] uppercase text-muted mb-1">Total Invested (${(amount / 1000).toFixed(0)}K x 6 Merged)</div>
          <span className="text-2xl font-black">${merged6Invested.toLocaleString()}</span>
        </div>
        <div>
          <div className="text-[10px] tracking-[2px] uppercase text-muted mb-1">Total Value Now</div>
          <span className="text-2xl font-black text-accent">${merged6Total.toLocaleString()}</span>
        </div>
        <div>
          <div className="text-[10px] tracking-[2px] uppercase text-muted mb-1">Total Gain/Loss</div>
          <span className="text-2xl font-black text-accent">{merged6GL >= 0 ? '+' : ''}${merged6GL.toLocaleString()}</span>
        </div>
        <div>
          <div className="text-[10px] tracking-[2px] uppercase text-muted mb-1">vs. QQQ Same $</div>
          <span className="text-2xl font-black text-green">${Math.round(qqqTotal).toLocaleString()}</span>
        </div>
        <div>
          <div className="text-[10px] tracking-[2px] uppercase text-muted mb-1">vs. SPY Same $</div>
          <span className="text-2xl font-black text-green">${Math.round(spyTotal).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
