import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function Header() {
  const stats = [
    { value: '-74%', label: 'Avg. Return (Merged SPACs)', color: 'text-accent' },
    { value: '6 / 10', label: 'SPACs Completed Mergers', color: 'text-accent' },
    { value: '4', label: 'Liquidated (Capital Returned)', color: 'text-gold' },
    { value: '2', label: 'Bankrupt / Taken Private', color: 'text-accent' },
    { value: '1', label: 'Positive Return (SOFI)', color: 'text-green' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0a0e] via-[#12121a] to-[#1a0a0a] p-8 md:p-12 border border-border"
    >
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,59,59,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-accent/15 border border-accent/30 rounded-full text-[11px] font-medium tracking-widest uppercase text-accent">
            <TrendingDown size={13} />
            Social Capital Hedosophia
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-2">
          THE
          <br />
          <span className="text-accent">SPACtacular Casino</span>
        </h1>

        <p className="text-sm text-muted mt-4 max-w-2xl">
          Complete performance record of all 10 Social Capital SPACs + 8 PIPE deals. Merger dates through 2022. Prices as of Mar 2026.
        </p>

        <div className="flex flex-wrap gap-6 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className={`text-3xl font-black tracking-tight ${s.color}`}>{s.value}</span>
              <span className="text-[10px] tracking-[2px] uppercase text-muted">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg text-accent">
            <XCircle size={12} /> 2 Bankrupt
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent2/10 border border-accent2/20 rounded-lg text-accent2">
            <AlertTriangle size={12} /> 3 Down 70%+
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 border border-gold/20 rounded-lg text-gold">
            <AlertTriangle size={12} /> 4 Liquidated
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green/10 border border-green/20 rounded-lg text-green">
            <CheckCircle size={12} /> 1 Positive (SOFI)
          </div>
        </div>
      </div>
    </motion.div>
  );
}
