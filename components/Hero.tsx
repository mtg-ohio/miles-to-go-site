import React from 'react';
import { HeroGraphic } from './Icon';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 px-4 bg-[#f9fafb] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <HeroGraphic className="mb-8" />

        <h1 className="text-4xl md:text-5xl font-bold text-mtg-text mb-4">
          Local Customers Are Already Searching For Solutions.
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8">
          We make sure they find you first.
        </p>

        <div className="w-24 h-1 bg-mtg-orange mx-auto mb-10"></div>

        <p className="text-xl md:text-2xl font-semibold text-mtg-blue mb-4">
          MTG Brand Promise: Your visibility isn&apos;t luck. It&apos;s design.
        </p>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-20">
          Miles To Go builds local visibility systems for established businesses that depend on predictable inbound demand. If your phone isn&apos;t ringing, it&apos;s because the map customers are using doesn&apos;t point to you.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href="#battlefield"
            className="inline-flex items-center px-10 py-5 bg-mtg-orange text-white rounded font-black tracking-widest hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl group"
          >
            Preview the Lens We Use to Evaluate Your Local Market
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest max-w-sm">
            No retainers. No contracts. We look first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;