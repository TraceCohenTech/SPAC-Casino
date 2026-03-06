import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] text-white"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 sm:px-10 py-10 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#ff3b3b] text-white text-[11px] font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse" />
              Social Capital Hedosophia
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.05] mb-4">
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
              className="text-[17px] italic text-white mb-5"
            >
              "There is no crying in the casino."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-white/90 text-[15px] leading-relaxed max-w-md"
            >
              Complete performance record of all 10 Social Capital SPACs + 8 PIPE deals. Prices as of March 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white/80"
            >
              Not financial advice &middot; Returns from $10 SPAC price
            </motion.div>
          </motion.div>
        </div>

        {/* Right — tweet screenshots as "hero image" */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 z-20">
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              src="/tweet-casino.png"
              alt="Chamath: No crying in the casino"
              className="rounded-xl shadow-2xl shadow-black/50 max-w-[320px] w-full"
            />
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              src="/tweet-capital-losses.png"
              alt="Chamath: Capital losses"
              className="rounded-xl shadow-2xl shadow-black/50 max-w-[320px] w-full"
            />
          </div>
          {/* Dark textured bg behind images */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#1a1a1a]" />
        </div>
      </div>

      {/* Mobile — images below text */}
      <div className="lg:hidden flex flex-col items-center gap-3 px-6 pb-8 -mt-2">
        <img src="/tweet-casino.png" alt="Chamath tweet" className="rounded-xl shadow-lg shadow-black/30 max-w-[300px] w-full" />
        <img src="/tweet-capital-losses.png" alt="Chamath tweet" className="rounded-xl shadow-lg shadow-black/30 max-w-[300px] w-full" />
      </div>
    </motion.header>
  );
}
