import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ZAxis } from 'recharts';
import { mergedSpacs, spacColors } from '../data/spacs';
import SectionHeader from './SectionHeader';

const bubbleData = mergedSpacs.map(s => ({
  name: s.ticker,
  fullName: s.name,
  x: new Date(s.mergedDate).getTime(),
  y: s.returnPct,
  z: s.capitalRaised,
  price: s.currentPrice,
  status: s.statusLabel,
}));

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof bubbleData[0] }> }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-4 min-w-[200px]">
      <p className="font-bold text-[#1d1d1f] text-sm">{d.fullName} ({d.name})</p>
      <div className="space-y-1 text-[13px] mt-2">
        <div className="flex justify-between"><span className="text-[#6e6e73]">Return</span><span className="font-semibold" style={{ color: d.y >= 0 ? '#00d97e' : '#ff3b3b' }}>{d.y > 0 ? '+' : ''}{d.y}%</span></div>
        <div className="flex justify-between"><span className="text-[#6e6e73]">Capital Raised</span><span className="text-[#1d1d1f]">${d.z}M</span></div>
        <div className="flex justify-between"><span className="text-[#6e6e73]">Current Price</span><span className="text-[#1d1d1f]">~${d.price}</span></div>
        <div className="flex justify-between"><span className="text-[#6e6e73]">Status</span><span className="text-[#1d1d1f]">{d.status}</span></div>
      </div>
    </div>
  );
}

export default function BubbleChart() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section>
      <SectionHeader
        title="Capital vs. Returns"
        subtitle="Bubble size = capital raised. More money raised didn't mean better results."
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="glass p-6"
      >
        <ResponsiveContainer width="100%" height={380}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <XAxis
              dataKey="x"
              type="number"
              domain={['dataMin - 5000000000', 'dataMax + 5000000000']}
              tick={{ fill: '#aeaeb2', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => {
                const d = new Date(v);
                return `${d.toLocaleString('en', { month: 'short' })} ${d.getFullYear()}`;
              }}
              name="Merger Date"
            />
            <YAxis
              dataKey="y"
              type="number"
              tick={{ fill: '#aeaeb2', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${v}%`}
              name="Return %"
              domain={['dataMin - 10', 'dataMax + 20']}
            />
            <ZAxis dataKey="z" range={[200, 1400]} name="Capital Raised ($M)" />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#d1d1d6' }} />
            <Scatter data={bubbleData}>
              {bubbleData.map(entry => (
                <Cell
                  key={entry.name}
                  fill={spacColors[entry.name] || '#6e6e73'}
                  fillOpacity={0.7}
                  stroke={spacColors[entry.name] || '#6e6e73'}
                  strokeWidth={2}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {mergedSpacs.map(s => (
            <div key={s.ticker} className="flex items-center gap-1.5 text-[11px] text-[#6e6e73]">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: spacColors[s.ticker] || '#6e6e73' }} />
              {s.ticker}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
