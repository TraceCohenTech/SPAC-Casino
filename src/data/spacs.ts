export interface Spac {
  ticker: string;
  name: string;
  spac: string;
  sector: string;
  merged: string;
  returnPct: number;
  currentPrice: number;
  status: 'active' | 'liquidated' | 'acquired' | 'bankrupt';
  statusLabel: string;
  notes: string;
  peakPrice: number;
}

export const spacs: Spac[] = [
  {
    ticker: 'SPCE',
    name: 'Virgin Galactic',
    spac: 'IPOA',
    sector: 'Space Tourism',
    merged: 'Oct 2019',
    returnPct: -74,
    currentPrice: 2.61,
    status: 'active',
    statusLabel: 'Active',
    notes: 'Paused flights; Delta-class ships in dev. 1:20 reverse split 2024.',
    peakPrice: 54.00,
  },
  {
    ticker: 'OPEN',
    name: 'Opendoor Technologies',
    spac: 'IPOB',
    sector: 'iBuying / Real Estate',
    merged: 'Dec 2020',
    returnPct: -48,
    currentPrice: 5.18,
    status: 'active',
    statusLabel: 'Active',
    notes: 'Still operating. Q4 2025 surge on Trump mortgage plan. Targeting profitability by end 2026.',
    peakPrice: 35.00,
  },
  {
    ticker: 'CLOV',
    name: 'Clover Health',
    spac: 'IPOC',
    sector: 'Medicare Advantage',
    merged: 'Jan 2021',
    returnPct: -79,
    currentPrice: 2.05,
    status: 'active',
    statusLabel: 'Active',
    notes: '53% membership growth in 2025 AEP. Targeting GAAP profitability in 2026.',
    peakPrice: 28.85,
  },
  {
    ticker: 'SOFI',
    name: 'SoFi Technologies',
    spac: 'IPOE',
    sector: 'Fintech / Banking',
    merged: 'Jun 2021',
    returnPct: 87,
    currentPrice: 18.70,
    status: 'active',
    statusLabel: 'Active',
    notes: 'Only merged SPAC with positive return. Q4 2025: $1B revenue, first $100M+ GAAP quarter. Stock down from $32 peak.',
    peakPrice: 32.73,
  },
  {
    ticker: 'IPOD',
    name: 'SCH Holdings IV',
    spac: 'IPOD',
    sector: 'N/A — Liquidated',
    merged: 'Oct 2022 (Liquidated)',
    returnPct: 3.5,
    currentPrice: 10.35,
    status: 'liquidated',
    statusLabel: 'Liquidated',
    notes: 'Returned ~$10.35/share. Never found merger target. Investors got their money back + trust interest.',
    peakPrice: 15.00,
  },
  {
    ticker: 'IPOF',
    name: 'SCH Holdings VI',
    spac: 'IPOF',
    sector: 'N/A — Liquidated',
    merged: 'Oct 2022 (Liquidated)',
    returnPct: 3.5,
    currentPrice: 10.35,
    status: 'liquidated',
    statusLabel: 'Liquidated',
    notes: '$1B raised. Never found target. Returned ~$10.35/share. Ironically best outcome vs most merged deals.',
    peakPrice: 13.00,
  },
  {
    ticker: 'AKLI',
    name: 'Akili Interactive',
    spac: 'DNAA',
    sector: 'Digital Therapeutics',
    merged: 'Aug 2022',
    returnPct: -95.7,
    currentPrice: 0.43,
    status: 'acquired',
    statusLabel: 'Acquired',
    notes: 'Acquired by Virtual Therapeutics for $0.4340/share in 2024. Effectively delisted.',
    peakPrice: 12.00,
  },
  {
    ticker: 'PROK',
    name: 'ProKidney Corp.',
    spac: 'DNAC',
    sector: 'Cell Therapy / Biotech',
    merged: 'Jul 2022',
    returnPct: -76,
    currentPrice: 2.38,
    status: 'active',
    statusLabel: 'Active',
    notes: 'Clinical-stage kidney cell therapy. Pre-revenue. Future depends on Phase 3 REACT trial outcome.',
    peakPrice: 12.50,
  },
  {
    ticker: 'DNAB',
    name: 'SCS Holdings II',
    spac: 'DNAB',
    sector: 'N/A — Liquidated',
    merged: 'Jun 2023 (Liquidated)',
    returnPct: 3.5,
    currentPrice: 10.35,
    status: 'liquidated',
    statusLabel: 'Liquidated',
    notes: 'Oncology-focused biotech SPAC. Never found a merger target. Returned capital + trust interest.',
    peakPrice: 10.60,
  },
  {
    ticker: 'DNAD',
    name: 'SCS Holdings IV',
    spac: 'DNAD',
    sector: 'N/A — Liquidated',
    merged: 'Jun 2023 (Liquidated)',
    returnPct: 3.5,
    currentPrice: 10.35,
    status: 'liquidated',
    statusLabel: 'Liquidated',
    notes: 'Immunology-focused biotech SPAC. Never found a merger target. Returned capital + trust interest.',
    peakPrice: 10.60,
  },
];

export const pipeDeals = [
  { name: 'Desktop Metal', ticker: 'DM', sector: 'Manufacturing', returnPct: -95, status: 'Delisted', notes: 'Taken private ~$0.49/share' },
  { name: 'Latch Inc.', ticker: 'LTCH', sector: 'PropTech SaaS', returnPct: -98, status: 'Bankrupt', notes: 'Filed Ch. 11 2023' },
  { name: 'Proterra Inc.', ticker: 'PTRA', sector: 'Clean Transport', returnPct: -100, status: 'Bankrupt', notes: 'Filed Ch. 11 Aug 2023' },
  { name: 'Sunlight Financial', ticker: 'SUNL', sector: 'Clean Energy Finance', returnPct: -100, status: 'Bankrupt', notes: 'Filed Ch. 11 Oct 2023' },
  { name: 'MP Materials', ticker: 'MP', sector: 'Mining / Defense Supply', returnPct: 120, status: 'Active', notes: 'Best PIPE performer' },
  { name: 'ReNew Energy Global', ticker: 'RNW', sector: 'Renewable Energy', returnPct: -33, status: 'Delisted', notes: 'Went private 2023' },
  { name: 'Berkshire Grey', ticker: 'BGRY', sector: 'Industrial Robotics', returnPct: -90, status: 'Acquired', notes: 'Acquired by SoftBank ~$0.60/sh' },
  { name: 'Metromile', ticker: 'MILE', sector: 'InsurTech', returnPct: -90, status: 'Acquired', notes: 'Acquired by Lemonade 2022' },
];

export const mergedSpacs = spacs.filter(s => s.status !== 'liquidated');
export const liquidatedSpacs = spacs.filter(s => s.status === 'liquidated');
