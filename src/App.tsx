import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import HowWeWork from './components/HowWeWork/HowWeWork';
import Team from './components/Team/Team';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-amber-400 selection:text-neutral-950 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <HowWeWork />
        <Team />
        <Services />
        <Products />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
