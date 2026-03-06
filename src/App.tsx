import TweetBanner from './components/TweetBanner';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';
import Benchmarks from './components/Benchmarks';
import ReturnChart from './components/ReturnChart';
import SpacCards from './components/SpacCards';
import InvestmentTable from './components/InvestmentTable';
import PipeDeals from './components/PipeDeals';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">
        <TweetBanner />
        <Header />
        <Disclaimer />
        <Benchmarks />
        <ReturnChart />
        <SpacCards />
        <InvestmentTable />
        <PipeDeals />
        <Footer />
      </div>
    </div>
  );
}
