export interface Spac {
  ticker: string;
  name: string;
  spac: string;
  sector: string;
  merged: string;
  mergedDate: string; // ISO for timeline
  returnPct: number;
  currentPrice: number;
  status: 'active' | 'liquidated' | 'acquired' | 'bankrupt';
  statusLabel: string;
  notes: string;
  peakPrice: number;
  peakDate: string;
  capitalRaised: number; // $M
}

export const spacs: Spac[] = [
  {
    ticker: 'SPCE',
    name: 'Virgin Galactic',
    spac: 'IPOA',
    sector: 'Space Tourism',
    merged: 'Oct 2019',
    mergedDate: '2019-10-28',
    returnPct: -74.6,
    currentPrice: 2.54,
    status: 'active',
    statusLabel: 'Active',
    notes: 'Paused flights; Delta-class ships in dev. 1:20 reverse split 2024.',
    peakPrice: 54.00,
    peakDate: '2021-02',
    capitalRaised: 800,
  },
  {
    ticker: 'OPEN',
    name: 'Opendoor Technologies',
    spac: 'IPOB',
    sector: 'iBuying / Real Estate',
    merged: 'Dec 2020',
    mergedDate: '2020-12-21',
    returnPct: -49.7,
    currentPrice: 5.03,
    status: 'active',
    statusLabel: 'Active',
    notes: 'Still operating. Q4 2025 surge on Trump mortgage plan. Targeting profitability by end 2026.',
    peakPrice: 35.00,
    peakDate: '2021-02',
    capitalRaised: 600,
  },
  {
    ticker: 'CLOV',
    name: 'Clover Health',
    spac: 'IPOC',
    sector: 'Medicare Advantage',
    merged: 'Jan 2021',
    mergedDate: '2021-01-08',
    returnPct: -79.9,
    currentPrice: 2.015,
    status: 'active',
    statusLabel: 'Active',
    notes: '53% membership growth in 2025 AEP. Targeting GAAP profitability in 2026.',
    peakPrice: 28.85,
    peakDate: '2021-06',
    capitalRaised: 720,
  },
  {
    ticker: 'SOFI',
    name: 'SoFi Technologies',
    spac: 'IPOE',
    sector: 'Fintech / Banking',
    merged: 'Jun 2021',
    mergedDate: '2021-06-01',
    returnPct: 88,
    currentPrice: 18.80,
    status: 'active',
    statusLabel: 'Active',
    notes: 'Only merged SPAC with positive return. Q4 2025: $1B revenue, first $100M+ GAAP quarter.',
    peakPrice: 32.73,
    peakDate: '2025-02',
    capitalRaised: 2400,
  },
  {
    ticker: 'IPOD',
    name: 'SCH Holdings IV',
    spac: 'IPOD',
    sector: 'N/A — Liquidated',
    merged: 'Oct 2022 (Liquidated)',
    mergedDate: '2022-10-15',
    returnPct: 3.5,
    currentPrice: 10.35,
    status: 'liquidated',
    statusLabel: 'Liquidated',
    notes: 'Returned ~$10.35/share. Never found merger target.',
    peakPrice: 15.00,
    peakDate: '2021-02',
    capitalRaised: 400,
  },
  {
    ticker: 'IPOF',
    name: 'SCH Holdings VI',
    spac: 'IPOF',
    sector: 'N/A — Liquidated',
    merged: 'Oct 2022 (Liquidated)',
    mergedDate: '2022-10-15',
    returnPct: 3.5,
    currentPrice: 10.35,
    status: 'liquidated',
    statusLabel: 'Liquidated',
    notes: '$1B raised. Never found target. Ironically best outcome vs most merged deals.',
    peakPrice: 13.00,
    peakDate: '2021-02',
    capitalRaised: 1150,
  },
  {
    ticker: 'AKLI',
    name: 'Akili Interactive',
    spac: 'DNAA',
    sector: 'Digital Therapeutics',
    merged: 'Aug 2022',
    mergedDate: '2022-08-19',
    returnPct: -95.7,
    currentPrice: 0.43,
    status: 'acquired',
    statusLabel: 'Acquired',
    notes: 'Acquired by Virtual Therapeutics for $0.4340/share in 2024.',
    peakPrice: 12.00,
    peakDate: '2022-08',
    capitalRaised: 340,
  },
  {
    ticker: 'PROK',
    name: 'ProKidney Corp.',
    spac: 'DNAC',
    sector: 'Cell Therapy / Biotech',
    merged: 'Jul 2022',
    mergedDate: '2022-07-11',
    returnPct: -76.9,
    currentPrice: 2.315,
    status: 'active',
    statusLabel: 'Active',
    notes: 'Clinical-stage kidney cell therapy. Pre-revenue. Phase 3 REACT trial pending.',
    peakPrice: 12.50,
    peakDate: '2022-07',
    capitalRaised: 375,
  },
  {
    ticker: 'DNAB',
    name: 'SCS Holdings II',
    spac: 'DNAB',
    sector: 'N/A — Liquidated',
    merged: 'Jun 2023 (Liquidated)',
    mergedDate: '2023-06-15',
    returnPct: 3.5,
    currentPrice: 10.35,
    status: 'liquidated',
    statusLabel: 'Liquidated',
    notes: 'Oncology-focused biotech SPAC. Never found merger target.',
    peakPrice: 10.60,
    peakDate: '2021-02',
    capitalRaised: 200,
  },
  {
    ticker: 'DNAD',
    name: 'SCS Holdings IV',
    spac: 'DNAD',
    sector: 'N/A — Liquidated',
    merged: 'Jun 2023 (Liquidated)',
    mergedDate: '2023-06-15',
    returnPct: 3.5,
    currentPrice: 10.35,
    status: 'liquidated',
    statusLabel: 'Liquidated',
    notes: 'Immunology-focused biotech SPAC. Never found merger target.',
    peakPrice: 10.60,
    peakDate: '2021-02',
    capitalRaised: 200,
  },
];

export interface PipeDeal {
  name: string;
  ticker: string;
  sector: string;
  returnPct: number;
  currentPrice: number;
  status: string;
  notes: string;
}

export const pipeDeals: PipeDeal[] = [
  { name: 'Desktop Metal', ticker: 'DM', sector: 'Manufacturing', returnPct: -95, currentPrice: 0.49, status: 'Delisted', notes: 'Taken private ~$0.49/share' },
  { name: 'Latch Inc.', ticker: 'LTCH', sector: 'PropTech SaaS', returnPct: -100, currentPrice: 0, status: 'Bankrupt', notes: 'Filed Ch. 11 2023' },
  { name: 'Proterra Inc.', ticker: 'PTRA', sector: 'Clean Transport', returnPct: -100, currentPrice: 0, status: 'Bankrupt', notes: 'Filed Ch. 11 Aug 2023' },
  { name: 'Sunlight Financial', ticker: 'SUNL', sector: 'Clean Energy Finance', returnPct: -100, currentPrice: 0, status: 'Bankrupt', notes: 'Filed Ch. 11 Oct 2023' },
  { name: 'MP Materials', ticker: 'MP', sector: 'Mining / Defense Supply', returnPct: 490, currentPrice: 59.00, status: 'Active', notes: 'Best performer across all deals. $59/share.' },
  { name: 'ReNew Energy Global', ticker: 'RNW', sector: 'Renewable Energy', returnPct: -33, currentPrice: 6.70, status: 'Delisted', notes: 'Went private 2023' },
  { name: 'Berkshire Grey', ticker: 'BGRY', sector: 'Industrial Robotics', returnPct: -94, currentPrice: 0.60, status: 'Acquired', notes: 'Acquired by SoftBank ~$0.60/sh' },
  { name: 'Metromile', ticker: 'MILE', sector: 'InsurTech', returnPct: -90, currentPrice: 1.00, status: 'Acquired', notes: 'Acquired by Lemonade 2022' },
];

export const mergedSpacs = spacs.filter(s => s.status !== 'liquidated');
export const liquidatedSpacs = spacs.filter(s => s.status === 'liquidated');

// Historical price data for timeline chart (approximate month-end prices, adjusted for splits)
export const priceHistory = [
  // SPCE (adjusted for 1:20 reverse split in 2024)
  { ticker: 'SPCE', data: [
    { date: '2019-10', price: 10 }, { date: '2020-01', price: 14 }, { date: '2020-06', price: 16 },
    { date: '2020-12', price: 25 }, { date: '2021-02', price: 54 }, { date: '2021-06', price: 42 },
    { date: '2021-12', price: 12 }, { date: '2022-06', price: 6.5 }, { date: '2022-12', price: 4 },
    { date: '2023-06', price: 5 }, { date: '2023-12', price: 2.4 }, { date: '2024-06', price: 3.2 },
    { date: '2024-12', price: 2.8 }, { date: '2025-06', price: 2.6 }, { date: '2025-12', price: 2.6 },
    { date: '2026-03', price: 2.54 },
  ]},
  // OPEN
  { ticker: 'OPEN', data: [
    { date: '2020-12', price: 10 }, { date: '2021-02', price: 35 }, { date: '2021-06', price: 17 },
    { date: '2021-12', price: 10.5 }, { date: '2022-06', price: 4 }, { date: '2022-12', price: 3 },
    { date: '2023-06', price: 3.5 }, { date: '2023-12', price: 4.5 }, { date: '2024-06', price: 2 },
    { date: '2024-12', price: 5.5 }, { date: '2025-06', price: 5.2 }, { date: '2025-12', price: 5.0 },
    { date: '2026-03', price: 5.03 },
  ]},
  // CLOV
  { ticker: 'CLOV', data: [
    { date: '2021-01', price: 10 }, { date: '2021-06', price: 28.85 }, { date: '2021-12', price: 3.5 },
    { date: '2022-06', price: 2.5 }, { date: '2022-12', price: 1.2 }, { date: '2023-06', price: 0.8 },
    { date: '2023-12', price: 0.9 }, { date: '2024-06', price: 1.0 }, { date: '2024-12', price: 3.2 },
    { date: '2025-06', price: 2.5 }, { date: '2025-12', price: 2.1 }, { date: '2026-03', price: 2.015 },
  ]},
  // SOFI
  { ticker: 'SOFI', data: [
    { date: '2021-06', price: 10 }, { date: '2021-12', price: 15 }, { date: '2022-06', price: 5.5 },
    { date: '2022-12', price: 4.5 }, { date: '2023-06', price: 8.5 }, { date: '2023-12', price: 9 },
    { date: '2024-06', price: 7.5 }, { date: '2024-12', price: 16 }, { date: '2025-02', price: 32.73 },
    { date: '2025-06', price: 20 }, { date: '2025-12', price: 19 }, { date: '2026-03', price: 18.80 },
  ]},
  // AKLI
  { ticker: 'AKLI', data: [
    { date: '2022-08', price: 10 }, { date: '2022-12', price: 3 }, { date: '2023-06', price: 1 },
    { date: '2023-12', price: 0.5 }, { date: '2024-06', price: 0.43 }, { date: '2026-03', price: 0.43 },
  ]},
  // PROK
  { ticker: 'PROK', data: [
    { date: '2022-07', price: 10 }, { date: '2022-12', price: 5 }, { date: '2023-06', price: 2 },
    { date: '2023-12', price: 1.5 }, { date: '2024-06', price: 2 }, { date: '2024-12', price: 2.5 },
    { date: '2025-06', price: 2.3 }, { date: '2025-12', price: 2.3 }, { date: '2026-03', price: 2.315 },
  ]},
];

// Colors for each SPAC
export const spacColors: Record<string, string> = {
  SPCE: '#ff3b3b',
  OPEN: '#ff7a00',
  CLOV: '#ffd60a',
  SOFI: '#00d97e',
  AKLI: '#ff3b3b',
  PROK: '#8b5cf6',
};
