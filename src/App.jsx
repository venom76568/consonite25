

import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nabvar from './components/Navbar'  

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Nabvar />
      <Hero />
      <About /> 


      <Footer   />


    </main>
  )
}

export default App