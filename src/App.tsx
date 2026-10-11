import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BaselineSection from './components/BaselineSection';
import DifferenceSection from './components/DifferenceSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import ScaleSection from './components/ScaleSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-mtg-soft-white font-sans text-mtg-text">
      <Header />
      <main>
        <Hero />
        <BaselineSection />
        <DifferenceSection />
        <PricingSection />
        <AboutSection />
        <ScaleSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
