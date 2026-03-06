import { motion } from 'framer-motion';

export default function TweetBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <img
        src="/tweet-casino.png"
        alt="Chamath tweet: No crying in the casino"
        className="rounded-2xl shadow-lg shadow-black/10 max-w-xs sm:max-w-sm w-full"
      />
      <img
        src="/tweet-capital-losses.png"
        alt="Chamath tweet: Then you generated capital losses"
        className="rounded-2xl shadow-lg shadow-black/10 max-w-xs sm:max-w-sm w-full"
      />
    </motion.div>
  );
}
