import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Subhero from './components/Subhero';
import Gridcom from './components/Gridcom';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <div>
          <Subhero/>
        </div>
      </div>
      <div>
        <Gridcom/>
      </div>

      <div>
        <Carousel/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
