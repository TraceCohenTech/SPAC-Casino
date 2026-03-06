import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { mergedSpacs, spacColors } from '../data/spacs';
import SectionHeader from './SectionHeader';

export default function PeakToCurrent() {
  const [ref, inView] = useInView<HTMLDivElement>();

  const data = mergedSpacs
    .map(s => {
      const drawdown = ((s.currentPrice - s.peakPrice) / s.peakPrice) * 100;
      return { ...s, drawdown };
    })
    .sort((a, b) => a.drawdown - b.drawdown);

  return (
    <section>
      <SectionHeader title="Peak to Current Drawdown" subtitle="How far each SPAC has fallen from its all-time high price" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="glass p-6 space-y-3"
      >
        {data.map((s, i) => {
          const barWidth = Math.min(Math.abs(s.drawdown), 100);
          return (
            <motion.div
              key={s.ticker}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-4"
            >
              <div className="w-16 shrink-0">
                <p className="text-sm font-bold text-[#1d1d1f]">{s.ticker}</p>
                <p className="text-[10px] text-[#aeaeb2]">{s.name}</p>
              </div>
              <div className="flex-1 relative h-8 bg-black/[0.03] rounded-lg overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-lg"
                  style={{ backgroundColor: spacColors[s.ticker] || '#ff3b3b' }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${barWidth}%` } : {}}
                  transition={{ duration: 0.8, delay: i * 0.06 }}
                />
                <div className="absolute inset-0 flex items-center px-3">
                  <span className="text-xs font-bold text-white drop-shadow-sm">
                    {s.drawdown.toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="w-28 shrink-0 text-right">
                <p className="text-[11px] text-[#aeaeb2]">
                  ${s.peakPrice.toFixed(2)} &rarr; ${s.currentPrice.toFixed(2)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
