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
    <div className="min-h-screen bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
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
