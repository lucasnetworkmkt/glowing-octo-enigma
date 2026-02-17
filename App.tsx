import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Strategy from './components/Strategy';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TargetAudience />
      <Strategy />
      <Features />
      <Portfolio />
      <Process />
      <WhyChooseUs />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default App;
