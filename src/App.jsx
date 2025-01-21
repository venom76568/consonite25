import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nabvar from './components/Navbar';


const App = () => {
  return (
    <main className="relative bg-slate-500 overflow-x-hidden min-h-screen w-screen">
      {/* Particles Background */}
     

      {/* Main Content */}
      <Nabvar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
};

export default App;
