import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Model from './components/Model';
import Process from './components/Process';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Model />
        <Process />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
