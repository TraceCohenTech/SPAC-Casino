import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { spacs } from '../data/spacs';
import type { Spac } from '../data/spacs';
import SectionHeader from './SectionHeader';

function getBadge(s: Spac) {
  const base = 'text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full';
  if (s.status === 'active') return `${base} bg-[#00d97e]/10 text-[#00d97e]`;
  if (s.status === 'liquidated') return `${base} bg-[#aeaeb2]/10 text-[#aeaeb2]`;
  if (s.status === 'acquired') return `${base} bg-[#ff7a00]/10 text-[#ff7a00]`;
  return `${base} bg-[#ff3b3b]/10 text-[#ff3b3b]`;
}

function getReturnColor(s: Spac) {
  if (s.status === 'liquidated') return 'text-[#aeaeb2]';
  if (s.returnPct >= 0) return 'text-[#00d97e]';
  if (s.returnPct >= -60) return 'text-[#ff7a00]';
  return 'text-[#ff3b3b]';
}

function getAccentBorder(s: Spac) {
  if (s.status === 'liquidated') return '';
  if (s.returnPct >= 0) return 'ring-1 ring-[#00d97e]/15';
  if (s.returnPct >= -60) return 'ring-1 ring-[#ff7a00]/15';
  return 'ring-1 ring-[#ff3b3b]/15';
}

export default function SpacCards() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section>
      <SectionHeader title="Individual SPAC Profiles" subtitle="All 10 Social Capital SPACs at a glance" />
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spacs.map((s, i) => (
          <motion.div
            key={s.ticker}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className={`glass p-5 ${getAccentBorder(s)}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-2xl font-bold text-[#1d1d1f] tracking-tight">{s.ticker}</p>
                <p className="text-sm font-semibold text-[#1d1d1f] mt-0.5">{s.name}</p>
                <p className="text-[11px] text-[#aeaeb2] uppercase tracking-wider">{s.sector}</p>
              </div>
              <span className={getBadge(s)}>{s.statusLabel}</span>
            </div>

            <p className={`text-4xl font-bold ${getReturnColor(s)} mb-1`}>
              {s.returnPct > 0 ? '+' : ''}{s.returnPct}%
            </p>
            <p className="text-[11px] text-[#aeaeb2] mb-4">from $10 SPAC price &middot; ~${s.currentPrice} today</p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-black/5">
              <div>
                <p className="text-[10px] text-[#aeaeb2] uppercase tracking-wider mb-0.5">SPAC Vehicle</p>
                <p className="text-[13px] font-medium text-[#1d1d1f]">{s.spac}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#aeaeb2] uppercase tracking-wider mb-0.5">Merger</p>
                <p className="text-[13px] font-medium text-[#1d1d1f]">{s.merged}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#aeaeb2] uppercase tracking-wider mb-0.5">$1K &rarr; Now</p>
                <p className={`text-[13px] font-semibold ${s.returnPct >= 0 ? 'text-[#00d97e]' : 'text-[#ff3b3b]'}`}>
                  ${Math.round(1000 * (1 + s.returnPct / 100)).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#aeaeb2] uppercase tracking-wider mb-0.5">$10K &rarr; Now</p>
                <p className={`text-[13px] font-semibold ${s.returnPct >= 0 ? 'text-[#00d97e]' : 'text-[#ff3b3b]'}`}>
                  ${Math.round(10000 * (1 + s.returnPct / 100)).toLocaleString()}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] text-[#aeaeb2] uppercase tracking-wider mb-0.5">Notes</p>
                <p className="text-[12px] text-[#6e6e73] leading-relaxed">{s.notes}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
