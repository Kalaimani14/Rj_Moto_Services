import './App.css';
import About from './Componants/About';
import BrandsWeServe from './Componants/BrandsWeServe';
import CustomerReviews from './Componants/CustomerReviews';
import Footer from './Componants/Footer';
import Hero from './Componants/Hero';
import Nav from './Componants/Nav';
import OurValues from './Componants/OurValues';
import Services from './Componants/Services';
import TopNav from './Componants/TopNav';
import WhyChoose from './Componants/WhyChoose';

function App() {
  return (
    <div className="container">
      <div className='max-w'>
        <TopNav/>
        <Hero/>
        <Services/>
        <WhyChoose/>
        <OurValues/>
        <BrandsWeServe/>
        <CustomerReviews/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
