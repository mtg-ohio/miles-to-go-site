import React from 'react';
import SectionWrapper from './SectionWrapper';

// The free checkup: what used to be "Stop Losing Local Leads" and
// "Where You Stand Today", said once.
const BaselineSection: React.FC = () => {
  return (
    <SectionWrapper title="Where You Stand Today." className="bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-base md:text-lg text-mtg-charcoal opacity-85 leading-relaxed text-center max-w-2xl mx-auto">
          It starts with a free checkup. We look at your business from the outside, the way a customer would.
          We don&apos;t log in to anything.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <MetricTile
            category="Getting Found"
            title="How Often You Show Up"
            description="Where you land when people search for what you do, next to the competitors they'd pick instead."
          />
          <MetricTile
            category="Your Google Listing"
            title="What People See First"
            description="Your hours, categories, photos and phone number. Is it all right, and is it all yours?"
          />
          <MetricTile
            category="Reviews"
            title="Your Review Picture"
            description="Your rating, how many you have, how fresh they are, and whether anyone's answering them."
          />
          <MetricTile
            category="Your Website"
            title="Does It Close the Deal?"
            description="Does it load fast, work on a phone, and make it easy to call you?"
          />
        </div>

        <div className="pt-4 border-t border-mtg-warm-gray/10">
          <p className="text-mtg-navy font-medium text-center text-xl sm:text-2xl">
            You get <span className="text-mtg-rust font-bold tracking-wide">one page</span>: what&apos;s working, what to
            fix, and about how long each fix takes.
          </p>
          <p className="text-mtg-charcoal opacity-70 text-center text-sm mt-3">
            Within two business days. It&apos;s yours to keep, whether you hire us or not.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

const MetricTile: React.FC<{ category: string; title: string; description: string }> = ({ category, title, description }) => (
  <div className="bg-white p-6 rounded-lg border-l-4 border-mtg-rust shadow-sm hover:shadow-md transition-shadow">
    <span className="text-[10px] font-black uppercase text-mtg-warm-gray tracking-tighter">{category}</span>
    <h3 className="text-xl font-bold text-mtg-navy mt-1 mb-2">{title}</h3>
    <p className="text-mtg-charcoal opacity-70 text-sm leading-relaxed">{description}</p>
  </div>
);

export default BaselineSection;
