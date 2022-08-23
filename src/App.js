import About from './components/About.jsx';
import AllInOne from './components/AllInOne.jsx';
import CountUp from './components/CountUp.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx'
import Pricing from './components/Pricing.jsx';
import Support from './components/Support.jsx'

function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <CountUp/>
      <Support />
      <AllInOne />
      <Pricing />
      <Footer /> 
    </>
  );
}

export default App;
