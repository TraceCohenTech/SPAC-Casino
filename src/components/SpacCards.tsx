import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { spacs } from '../data/spacs';
import type { Spac } from '../data/spacs';

function getBorderColor(s: Spac) {
  if (s.status === 'liquidated') return 'bg-muted';
  if (s.status === 'acquired') return 'bg-accent2';
  if (s.returnPct >= 0) return 'bg-green';
  if (s.returnPct >= -60) return 'bg-gold';
  return 'bg-accent';
}

function getBadge(s: Spac) {
  const base = 'text-[9px] tracking-[2px] uppercase font-bold px-2 py-0.5 rounded border';
  if (s.status === 'active') return `${base} bg-green/10 text-green border-green/20`;
  if (s.status === 'liquidated') return `${base} bg-muted/15 text-muted border-border`;
  if (s.status === 'acquired') return `${base} bg-accent2/15 text-accent2 border-accent2/30`;
  return `${base} bg-accent/15 text-accent border-accent/30`;
}

function getReturnColor(s: Spac) {
  if (s.status === 'liquidated') return 'text-muted';
  if (s.returnPct >= 0) return 'text-green';
  return 'text-accent';
}

export default function SpacCards() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div className="text-[10px] tracking-[4px] uppercase text-accent mb-4 font-medium">Individual SPAC Profiles</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spacs.map((s, i) => (
          <motion.div
            key={s.ticker}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="bg-surface border border-border rounded-xl p-5 relative overflow-hidden hover:border-white/10 transition-colors"
          >
            <div className={`absolute top-0 left-0 right-0 h-[3px] ${getBorderColor(s)}`} />

            <div className="flex justify-between items-start mb-3">
              <span className="text-[28px] font-black tracking-wide">{s.ticker}</span>
              <span className={getBadge(s)}>{s.statusLabel}</span>
            </div>

            <div className="text-[13px] font-semibold mb-0.5">{s.name}</div>
            <div className="text-[10px] tracking-wider uppercase text-muted mb-4">{s.sector}</div>

            <div className={`text-5xl font-black leading-none mb-1 ${getReturnColor(s)}`}>
              {s.returnPct > 0 ? '+' : ''}{s.returnPct}%
            </div>
            <div className="text-[10px] text-muted mb-4">
              from $10 SPAC price &middot; current ~${s.currentPrice}
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
              <div>
                <div className="text-[9px] tracking-[1.5px] uppercase text-muted mb-0.5">SPAC Vehicle</div>
                <div className="text-xs">{s.spac}</div>
              </div>
              <div>
                <div className="text-[9px] tracking-[1.5px] uppercase text-muted mb-0.5">Merger / Event</div>
                <div className="text-xs">{s.merged}</div>
              </div>
              <div>
                <div className="text-[9px] tracking-[1.5px] uppercase text-muted mb-0.5">$1K &rarr; Now</div>
                <div className={`text-xs ${s.returnPct >= 0 ? 'text-green' : 'text-accent'}`}>
                  ${Math.round(1000 * (1 + s.returnPct / 100)).toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-[9px] tracking-[1.5px] uppercase text-muted mb-0.5">$10K &rarr; Now</div>
                <div className={`text-xs ${s.returnPct >= 0 ? 'text-green' : 'text-accent'}`}>
                  ${Math.round(10000 * (1 + s.returnPct / 100)).toLocaleString()}
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-[9px] tracking-[1.5px] uppercase text-muted mb-0.5">Notes</div>
                <div className="text-[11px] text-muted leading-relaxed">{s.notes}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
