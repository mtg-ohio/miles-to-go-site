import React from 'react';
import SectionWrapper from './SectionWrapper';

// The free checkup: what used to be "Stop Losing Local Leads" and
// "Where You Stand Today", said once.
const BaselineSection: React.FC = () => {
  return (
    <SectionWrapper title="Where You Stand Today" className="bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-base md:text-lg text-mtg-charcoal opacity-85 leading-relaxed text-center max-w-2xl mx-auto">
          It starts with our <span className="text-mtg-rust font-bold">Free Checkup</span>. We look at your business from the outside, the way a customer would.
          We don&apos;t log in to anything.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <MetricTile
            category="Your Search Results"
            title="Showing Up"
            description="When people search Google or ask an AI for what you do, where do you land next to the competitors they'd pick instead?"
          />
          <MetricTile
            category="Your Google Profile"
            title="Looking Right"
            description={<>Your <strong>Google Business Profile</strong>: the contact information, hours, categories, photos and recent posts people see before they call. Is it <strong>claimed</strong>, <strong>current</strong> and <strong>complete</strong>?</>}
          />
          <MetricTile
            category="Your Reviews"
            title="Earning Trust"
            description="How many stars do you average, how many reviews do you have, how fresh are they, and are you answering them?"
          />
          <MetricTile
            category="Your Website"
            title="Closing the Deal"
            description="Does your site load as fast as it could? Does it work on a phone? Can people reach you with just one tap?"
          />
        </div>

        <div className="pt-4 border-t border-mtg-warm-gray/10">
          <p className="text-mtg-navy font-medium text-center text-xl sm:text-2xl">
            Your <span className="text-mtg-rust font-bold tracking-wide">Free Checkup</span> is one page: what&apos;s working, what to
            fix, and about how long each fix would take.
          </p>
          <p className="text-mtg-charcoal opacity-70 text-center text-sm mt-3">
            You&apos;ll have it within two business days, and it&apos;s yours to use whether you hire us or not.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

const MetricTile: React.FC<{ category: string; title: string; description: React.ReactNode }> = ({ category, title, description }) => (
  <div className="bg-white p-6 rounded-lg border-l-4 border-mtg-rust shadow-sm hover:shadow-md transition-shadow">
    <span className="text-[10px] font-black uppercase text-mtg-warm-gray tracking-tighter">{category}</span>
    <h3 className="text-xl font-bold text-mtg-navy mt-1 mb-2">{title}</h3>
    <p className="text-mtg-charcoal opacity-70 text-sm leading-relaxed">{description}</p>
  </div>
);

export default BaselineSection;
