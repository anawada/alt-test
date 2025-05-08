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
import geometric1 from './assets/geometric1.png';
import BannerVideo from './components/BannerVideo';
import TextAndForm from './components/TextAndForm';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      {/* Hero section with background */}
      <div
        className="min-h-screen/2 lg:min-h-screen/1.5 relative h-auto w-full flex-shrink-0 bg-brand-secondary"
        style={{
          backgroundImage: `url(${geometricSvgUrl})`,
          backgroundPosition: '100% 0%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '60% auto',
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
      <div
        className="min-h-screen/2 lg:min-h-screen/1.5 relative h-auto w-full flex-shrink-0 bg-form-bg"
        style={{
          backgroundImage: `url(${geometric1})`,
          backgroundPosition: '-5% 130%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '60% auto',
        }}
      >
      <TextAndForm />
      <Footer />
      </div>
    </div>
  );
}

export default App;
