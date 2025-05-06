import './index.css';
import DoubleNavbar from './components/DoubleNavbar';
import Hero from './components/Hero';
import Banner from './components/BannerVideoAndText';
import ServiceCards from './components/ServiceCards';
import Clients from './components/Clients';
import Carousel from './components/Carousel';
import BannerTwoColText from './components/BannerTwoColText';
import InsightsAndFAQs from './components/InsightsAndFAQs';
import ExpertTeamStats from './components/ExpertTeamStats';
import geometricSvgUrl from './assets/geometric.svg';
import BannerVideo from './components/BannerVideo';
import TextAndForm from './components/TextAndForm';

function App() {
  return (
    <>
      {/* Hero section with background */}
      <div
        className="min-h-screen/2 lg:min-h-screen/1.5 relative h-auto w-full flex-shrink-0 bg-brand-secondary pt-5"
        style={{
          backgroundImage: `url(${geometricSvgUrl})`,
          backgroundPosition: '100% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50% auto',
        }}
      >
        {/* Content container with max width */}
        <DoubleNavbar />
        <Hero />
      </div>
      <ServiceCards />
      <Clients />
      <Banner />

      <div className="relative">
        <Carousel />
        <BannerTwoColText />
        <InsightsAndFAQs />
      </div>
      <ExpertTeamStats />
      <BannerVideo />
      <TextAndForm />
    </>
  );
}

export default App;
