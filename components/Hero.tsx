import React from 'react';
import { HeroGraphic } from './Icon';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 px-4 bg-[#f9fafb] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <HeroGraphic className="mb-8" />
        <h1 className="text-4xl md:text-5xl font-bold text-mtg-text mb-4">
          Your Best Customers Are Searching For You.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We make sure they find you first.
        </p>
        <div className="w-24 h-1 bg-mtg-orange mx-auto mb-10"></div>
        <p className="text-xl md:text-2xl font-semibold text-mtg-blue mb-4">
          MTG Brand Promise: Your online visibility isn't luck - it's design.
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          We build the systems and structure that turn your Google Business Profile into your most reliable, predictable source of new business.
        </p>
      </div>
    </section>
  );
};

export default Hero;