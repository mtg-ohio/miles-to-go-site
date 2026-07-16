import React from 'react';
import SectionWrapper from './SectionWrapper';

const BattlefieldSection: React.FC = () => {
  return (
    <SectionWrapper title="See How You Stack Up." id="battlefield" className="bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-base md:text-lg text-mtg-charcoal opacity-85 leading-relaxed text-center max-w-2xl mx-auto">
          Before we start, we size up your top 3 local competitors. We find the gaps they&apos;re leaving open - and use them.
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-mtg-rust text-center">
          The Scorecard
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScorecardItem label="Search Ranking" value="Where They're Weak" description="We find the search terms they're missing so you can win them." />
          <ScorecardItem label="Reviews" value="Old and Stale" description="When their reviews go quiet, your fresh ones win." />
          <ScorecardItem label="Photos" value="Generic Stock" description="Real photos of your work beat stock images every time." />
          <ScorecardItem label="Activity" value="Gone Quiet" description="A profile that's gone quiet is easy to pass with steady updates." />
          <ScorecardItem label="Service Area" value="Spots They Miss" description="We go after the areas your competitors ignore." />
          <div className="bg-mtg-rust p-6 rounded-xl border border-mtg-rust/40 flex flex-col justify-center items-center text-center text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Your Edge</p>
            <p className="text-2xl font-black">You Show Up First</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ScorecardItem: React.FC<{ label: string; value: string; description: string }> = ({ label, value, description }) => (
  <div className="bg-white p-6 rounded-xl border border-mtg-warm-gray/20 shadow-sm flex flex-col space-y-2">
    <p className="text-[10px] font-black uppercase text-mtg-rust tracking-widest">{label}</p>
    <p className="text-lg font-bold text-mtg-blue">{value}</p>
    <p className="text-mtg-charcoal opacity-70 text-sm leading-snug">{description}</p>
  </div>
);

export default BattlefieldSection;
