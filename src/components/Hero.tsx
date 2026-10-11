import React from 'react';
import { HeroGraphic } from './Icon';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-14 sm:py-16 px-4 bg-mtg-soft-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <HeroGraphic className="mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-mtg-near-black mb-3">
          You&apos;re great at what you do.
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-mtg-navy mb-6">
          Getting you found is what we do.
        </p>

        <div className="w-16 h-1 bg-mtg-rust mx-auto mb-6"></div>

        <p className="text-base md:text-lg text-mtg-charcoal opacity-80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Before people call a business like yours, most of them look it up on Google first. We keep your Google
          listing and your website right, so they find you, like what they see, and pick up the phone.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#checkup"
            className="inline-flex items-center px-10 py-5 bg-mtg-rust text-white rounded font-black tracking-widest hover:brightness-95 hover:scale-105 transition-all transform shadow-xl group"
          >
            Get Your Free Checkup
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-mtg-warm-gray font-semibold uppercase tracking-widest">
            <span>Free. Plain English. No sales pitch.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
