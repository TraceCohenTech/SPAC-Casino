export default function Footer() {
  return (
    <footer className="space-y-6 pb-10">
      <div className="glass p-6">
        <h3 className="text-sm font-bold text-[#1d1d1f] mb-2">Sources &amp; Methodology</h3>
        <div className="space-y-2 text-[13px] text-[#6e6e73] leading-relaxed">
          <p>
            <strong className="text-[#1d1d1f]">Data sources:</strong> Segler Consulting SPAC analysis (Jun 2025), Benzinga, Motley Fool, Investing.com, TradingView. Prices as of approximately March 2026.
          </p>
          <p>
            <strong className="text-[#1d1d1f]">Methodology:</strong> Returns use $10/share as the SPAC baseline. Some figures adjusted for reverse splits (SPCE did a 1:20 reverse split in 2024). Liquidated SPACs (IPOD, IPOF, DNAB, DNAD) returned approximately $10.35/share to investors including trust interest. PIPE deals where Chamath was co-investor, not sponsor, are noted separately.
          </p>
          <p>
            <strong className="text-[#1d1d1f]">Disclaimer:</strong> This dashboard is informational only — not investment advice.
          </p>
        </div>
      </div>

      <div className="text-center space-y-3">
        <p className="text-[12px] text-[#aeaeb2]">
          Independent analysis &middot; For educational purposes only
        </p>
        <div className="flex items-center justify-center gap-5 text-sm">
          <a
            href="https://x.com/Trace_Cohen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            Twitter
          </a>
          <span className="w-1 h-1 rounded-full bg-[#d1d1d6]" />
          <a
            href="mailto:t@nyvp.com"
            className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            t@nyvp.com
          </a>
        </div>
      </div>
    </footer>
  );
}
