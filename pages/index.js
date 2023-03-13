import { Footer } from '../components';
import { About, Scope, Feedback, GetStarted, Hero, Offer, World } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Scope />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <Offer />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
