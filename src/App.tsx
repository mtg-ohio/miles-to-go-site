import React, { useState } from 'react';
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
import { ScanModal } from './components/ScanModal';
import { LeadsDashboard } from './components/LeadsDashboard';

const App: React.FC = () => {
  const [isScanOpen, setIsScanOpen] = useState(false);

  return (
    <div className="bg-mtg-soft-white font-sans text-mtg-text">
      <Header />
      <main>
        <Hero onOpenScan={() => setIsScanOpen(true)} />
        <ProblemSection />
        <BaselineSection />
        <DifferenceSection />
        <RoadmapSection />
        <BattlefieldSection />
        <PricingSection />
        <ScaleSection />
      </main>
      <LeadsDashboard />
      <Footer />
      <ScanModal isOpen={isScanOpen} onClose={() => setIsScanOpen(false)} />
    </div>
  );
};

export default App;