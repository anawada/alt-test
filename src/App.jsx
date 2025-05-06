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
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <div 
          className="relative bg-brand-secondary w-full mx-auto h-auto min-h-screen/2 lg:min-h-screen/1.5 flex-shrink-0" 
          style={{ 
            backgroundImage: `url(${geometricSvgUrl})`, 
            backgroundPosition: 'center right', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: '' 
          }}
        >
          <DoubleNavbar />
          <Hero />
        </div>
        <ServiceCards />
        <Clients />
        <Banner />
        <div className="relative">
          <Carousel />
          <BannerTwoColText />
        </div>
        <InsightsAndFAQs />
        <ExpertTeamStats />
        <BannerVideo />
        <TextAndForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
