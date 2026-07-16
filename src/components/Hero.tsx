import React from 'react';
import { HeroGraphic } from './Icon';

interface HeroProps {
  onOpenScan: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenScan }) => {
  return (
    <section className="text-center py-14 sm:py-16 px-4 bg-mtg-soft-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <HeroGraphic className="mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-mtg-near-black mb-3">
          Local Customers Are Already Searching For Solutions.
        </h1>

        <p className="text-lg md:text-xl text-mtg-charcoal opacity-80 mb-6">
          We make sure they find you first.
        </p>

        <div className="w-16 h-1 bg-mtg-rust mx-auto mb-6"></div>

        <p className="text-xl md:text-2xl font-semibold text-mtg-near-black mb-3">
          Showing up first isn&apos;t luck. It&apos;s built on purpose.
        </p>

        <p className="text-base md:text-lg text-mtg-charcoal opacity-80 leading-relaxed mb-10">
          When someone nearby needs what you sell or do, they search on Google or ask an AI assistant. If they don&apos;t find you, they&apos;ll call or visit a competitor. We make sure they find you instead.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={onOpenScan}
            className="inline-flex items-center px-10 py-5 bg-mtg-rust text-white rounded font-black tracking-widest hover:brightness-95 hover:scale-105 transition-all transform shadow-xl group cursor-pointer"
          >
            Get a Free Local Visibility Scan
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-mtg-warm-gray font-semibold uppercase tracking-widest">
            <span>No retainer. No contract. No sales pitch.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
