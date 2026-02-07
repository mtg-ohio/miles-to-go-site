import React from 'react';
import SectionWrapper from './SectionWrapper';

const BaselineSection: React.FC = () => {
  return (
    <SectionWrapper title="Your Visibility Baseline." className="bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          Every system starts with an honest baseline. No guessing. No assumptions.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <MetricTile 
            category="Discovery"
            title="Visibility Score"
            description="How often you appear compared to your top 3 local competitors."
          />
          <MetricTile 
            category="Volume"
            title="Total Profile Views"
            description="Total search and map views, combined."
          />
          <MetricTile 
            category="Trust"
            title="Review Health"
            description="Analysis of rating, volume, and recency of customer feedback."
          />
          <MetricTile 
            category="Conversion"
            title="High-Intent Actions"
            description="Phone calls, website clicks, and direction requests."
          />
        </div>

        <div className="pt-6 border-t border-gray-200">
           <p className="text-mtg-text font-medium text-center text-2xl">
             We move the needle from <span className="text-mtg-orange font-bold tracking-wide">feeling busy</span> to <span className="text-mtg-blue font-bold tracking-wide">knowing what converts</span>.
           </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

const MetricTile: React.FC<{ category: string; title: string; description: string }> = ({ category, title, description }) => (
  <div className="bg-white p-6 rounded-lg border-l-4 border-mtg-orange shadow-sm hover:shadow-md transition-shadow">
    <span className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">{category}</span>
    <h3 className="text-xl font-bold text-mtg-blue mt-1 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default BaselineSection;