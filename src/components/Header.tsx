import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] text-white"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-10 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#ff3b3b] text-white text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse" />
              Social Capital Hedosophia &middot; 10 SPACs
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-3">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block"
              >
                The
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="block text-[#ff3b3b]"
              >
                SPACtacular Casino
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-xl italic text-white/60 mb-5 font-light"
            >
              "There is no crying in the casino."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/40 text-[15px] leading-relaxed max-w-md"
            >
              Complete performance record of all 10 Social Capital SPACs + 8 PIPE deals. Merger dates through 2022. Prices as of March 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap gap-6 mt-8"
            >
              {[
                { value: '-74%', label: 'Avg. Return', color: 'text-[#ff3b3b]' },
                { value: '6 / 10', label: 'Mergers', color: 'text-white' },
                { value: '4', label: 'Liquidated', color: 'text-[#ffd60a]' },
                { value: '1', label: 'Positive', color: 'text-[#00d97e]' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-[11px] text-white/35 uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/35"
            >
              Not financial advice &middot; Returns based on $10 SPAC listing price
            </motion.div>
          </motion.div>
        </div>

        {/* Right — tweet screenshots */}
        <div className="relative hidden lg:flex flex-col items-center justify-center gap-4 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent z-0" />
          <motion.img
            initial={{ opacity: 0, y: -10, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            src="/tweet-casino.png"
            alt="Chamath: No crying in the casino"
            className="relative z-10 rounded-xl shadow-2xl shadow-black/40 max-w-[340px] w-full"
          />
          <motion.img
            initial={{ opacity: 0, y: 10, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            src="/tweet-capital-losses.png"
            alt="Chamath: Capital losses"
            className="relative z-10 rounded-xl shadow-2xl shadow-black/40 max-w-[340px] w-full"
          />
        </div>
      </div>

      {/* Mobile images */}
      <div className="lg:hidden flex flex-col items-center gap-3 px-6 pb-8">
        <img src="/tweet-casino.png" alt="Chamath tweet" className="rounded-xl shadow-lg max-w-[320px] w-full" />
        <img src="/tweet-capital-losses.png" alt="Chamath tweet" className="rounded-xl shadow-lg max-w-[320px] w-full" />
      </div>
    </motion.header>
  );
}
