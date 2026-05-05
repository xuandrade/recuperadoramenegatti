import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AuthorityBar from './components/AuthorityBar.jsx';
import Services from './components/Services.jsx';
import PartsTech from './components/PartsTech.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <Services />
        <PartsTech />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
