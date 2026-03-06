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
      <SectionHeader title="Peak to Current Drawdown" subtitle="How far each merged SPAC has fallen from its all-time high" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="glass p-5 sm:p-6 space-y-3"
      >
        {data.map((s, i) => {
          const barWidth = Math.min(Math.abs(s.drawdown), 100);
          return (
            <motion.div
              key={s.ticker}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="w-14 sm:w-20 shrink-0">
                <p className="text-sm font-bold text-[#1d1d1f]">{s.ticker}</p>
                <p className="text-[10px] text-[#6e6e73] hidden sm:block">{s.name}</p>
              </div>
              <div className="flex-1 relative h-7 sm:h-8 bg-black/[0.04] rounded-lg overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-lg opacity-80"
                  style={{ backgroundColor: spacColors[s.ticker] || '#ff3b3b' }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${barWidth}%` } : {}}
                  transition={{ duration: 0.8, delay: i * 0.06 }}
                />
              </div>
              <div className="w-20 sm:w-32 shrink-0 text-right">
                <p className="text-xs font-bold text-[#1d1d1f]">{s.drawdown.toFixed(0)}%</p>
                <p className="text-[10px] text-[#6e6e73] hidden sm:block">
                  ${s.peakPrice} &rarr; ${s.currentPrice}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
