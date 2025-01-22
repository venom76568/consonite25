
import About from './components/About';
import Register from './components/Form';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nabvar from './components/Navbar';

import Example from './components/Artist';



const App = () => {
  return (
    
    <main className="relative overflow-x-hidden bg-black min-h-screen w-screen">
      
    
      {/* Main Content */}

      <Nabvar />
      <Hero />
      <About />
      <Example />
      <Register />
     
      
      <Footer />
      
    </main>
  );
};

export default App;
