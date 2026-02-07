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
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We make sure they find you.
        </p>
        <div className="w-24 h-1 bg-mtg-orange mx-auto mb-10"></div>
        <p className="text-xl md:text-2xl font-semibold text-mtg-blue mb-4">
          MTG Brand Promise: Your visibility isn't luck. It's design.
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
          Miles To Go builds local visibility systems for established businesses that depend on predictable inbound demand without chasing leads.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <a 
            href="#compatibility" 
            className="inline-flex items-center px-8 py-4 bg-mtg-blue text-white rounded font-black tracking-widest hover:bg-slate-700 transition-all transform hover:scale-105 shadow-xl group"
          >
            See if this works for your business
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Fit Confirmation</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;