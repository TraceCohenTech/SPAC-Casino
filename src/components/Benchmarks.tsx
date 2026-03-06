import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const benchmarks = [
  { label: 'QQQ', name: 'Invesco QQQ Trust', returnPct: '+118%', period: 'Oct 2019 - Mar 2026', k1: '$2,180', k10: '$21,800' },
  { label: 'SPY', name: 'SPDR S&P 500 ETF', returnPct: '+92%', period: 'Oct 2019 - Mar 2026', k1: '$1,920', k10: '$19,200' },
  { label: 'COMP', name: 'Nasdaq Composite', returnPct: '+103%', period: 'Oct 2019 - Mar 2026', k1: '$2,030', k10: '$20,300' },
];

export default function Benchmarks() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section>
      <SectionHeader title="Benchmark Reference" subtitle="Same period performance for context (Oct 2019 - Mar 2026)" />
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {benchmarks.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="glass text-center py-6 px-4"
          >
            <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-wider mb-2">{b.label}</p>
            <p className="text-sm font-semibold text-[#1d1d1f] mb-1">{b.name}</p>
            <p className="text-3xl font-bold text-[#00d97e]">{b.returnPct}</p>
            <p className="text-[11px] text-[#aeaeb2] mt-1">{b.period}</p>
            <p className="text-[12px] text-[#6e6e73] mt-3">
              $1K &rarr; <span className="font-semibold text-[#1d1d1f]">{b.k1}</span>
              <span className="mx-1.5">&middot;</span>
              $10K &rarr; <span className="font-semibold text-[#1d1d1f]">{b.k10}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
