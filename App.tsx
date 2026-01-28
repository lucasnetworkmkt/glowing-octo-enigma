import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Features from './components/Features';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TargetAudience />
      <Features />
      <Process />
      <WhyChooseUs />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default App;