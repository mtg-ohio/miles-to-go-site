import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import BaselineSection from './components/BaselineSection';
import DifferenceSection from './components/DifferenceSection';
import RoadmapSection from './components/RoadmapSection';
import BattlefieldSection from './components/BattlefieldSection';
import PricingSection from './components/PricingSection';
import ScaleSection from './components/ScaleSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-mtg-text">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <BaselineSection />
        <DifferenceSection />
        < RoadmapSection />
        <BattlefieldSection />
        <PricingSection />
        <ScaleSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;