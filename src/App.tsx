import Header from './components/Header';
import Disclaimer from './components/Disclaimer';
import ScoreCard from './components/ScoreCard';
import Benchmarks from './components/Benchmarks';
import ReturnChart from './components/ReturnChart';
import PriceTimeline from './components/PriceTimeline';
import PeakToCurrent from './components/PeakToCurrent';
import BubbleChart from './components/BubbleChart';
import HypotheticalPortfolio from './components/HypotheticalPortfolio';
import SpacCards from './components/SpacCards';
import InvestmentTable from './components/InvestmentTable';
import PipeDeals from './components/PipeDeals';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">
        <Header />
        <Disclaimer />
        <ScoreCard />
        <Benchmarks />
        <ReturnChart />
        <PriceTimeline />
        <PeakToCurrent />
        <BubbleChart />
        <HypotheticalPortfolio />
        <SpacCards />
        <InvestmentTable />
        <PipeDeals />
        <Footer />
      </div>
    </div>
  );
}
