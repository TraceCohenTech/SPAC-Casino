import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const benchmarks = [
  { label: 'QQQ', name: 'Invesco QQQ Trust', returnPct: '+118%', period: 'Oct 2019 - Mar 2026', k1: '$2,180', k10: '$21,800' },
  { label: 'SPY', name: 'SPDR S&P 500 ETF', returnPct: '+92%', period: 'Oct 2019 - Mar 2026', k1: '$1,920', k10: '$19,200' },
  { label: 'COMP', name: 'Nasdaq Composite', returnPct: '+103%', period: 'Oct 2019 - Mar 2026', k1: '$2,030', k10: '$20,300' },
];

export default function Benchmarks() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div className="text-[10px] tracking-[4px] uppercase text-accent mb-4 font-medium">
        Benchmark Reference (Same Period Approx.)
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {benchmarks.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-surface border border-border rounded-xl p-5"
          >
            <div className="text-[10px] tracking-[2px] uppercase text-muted mb-2">{b.label}</div>
            <div className="text-[15px] font-bold mb-1">{b.name}</div>
            <div className="text-4xl font-black text-green tracking-tight">{b.returnPct}</div>
            <div className="text-[10px] text-muted mt-1">{b.period}</div>
            <div className="text-[13px] text-muted mt-3">
              $1,000 &rarr; <span className="text-white">{b.k1}</span>
              <span className="mx-2">|</span>
              $10,000 &rarr; <span className="text-white">{b.k10}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
