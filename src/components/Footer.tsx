export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-border">
      <p className="text-[10px] text-muted leading-[1.8] max-w-3xl mx-auto mb-6">
        * Data sources: Segler Consulting SPAC analysis (Jun 2025), Benzinga, Motley Fool, Investing.com, TradingView. Prices as of approximately March 2026. Returns use $10/share as the SPAC baseline. Some figures adjusted for reverse splits (SPCE did a 1:20 reverse split in 2024). Liquidated SPACs (IPOD, IPOF, DNAB, DNAD) returned approximately $10.35/share to investors including trust interest — those are shown as ~+3.5%. PIPE deals where Chamath was co-investor, not sponsor, are noted separately. This dashboard is informational only — not investment advice.
      </p>
      <p className="text-sm text-muted">
        Built by{' '}
        <a href="https://x.com/Trace_Cohen" target="_blank" rel="noopener noreferrer" className="font-medium text-white/70 hover:text-white transition-colors">
          Trace Cohen
        </a>
      </p>
      <p className="text-xs text-muted/60 mt-2">
        <a href="https://x.com/Trace_Cohen" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">@Trace_Cohen</a>
        <span className="mx-2">&middot;</span>
        <a href="mailto:t@nyvp.com" className="hover:text-muted transition-colors">t@nyvp.com</a>
      </p>
    </footer>
  );
}
