import React from 'react';
import SectionWrapper from './SectionWrapper';

const BaselineSection: React.FC = () => {
  return (
    <SectionWrapper title="Where You Stand Today." className="bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          We start with an honest look at where you stand today. No guessing.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <MetricTile 
            category="Getting Found"
            title="How Often You Show Up"
            description="How often you appear versus the top 3 competitors near you."
          />
          <MetricTile 
            category="Views"
            title="Times You Get Seen"
            description="Total times people saw you on Search and Maps."
          />
          <MetricTile 
            category="Reviews"
            title="Your Review Picture"
            description="Your rating, how many you have, and how fresh they are."
          />
          <MetricTile 
            category="Calls"
            title="What People Actually Do"
            description="Calls, website taps, and directions people ask for."
          />
        </div>

        <div className="pt-6 border-t border-gray-200">
           <p className="text-mtg-text font-medium text-center text-2xl">
             We take you from <span className="text-mtg-orange font-bold tracking-wide">guessing</span> to <span className="text-mtg-blue font-bold tracking-wide">knowing what brings the calls</span>.
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