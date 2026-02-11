import React from 'react';
import SectionWrapper from './SectionWrapper';

const BattlefieldSection: React.FC = () => {
  return (
    <SectionWrapper title="Know the Local Battlefield." id="battlefield" className="bg-slate-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-base md:text-lg text-slate-700 leading-relaxed text-center max-w-2xl mx-auto">
          Before we build, we benchmark your top 3 local competitors. No guessing, just gaps - mapped into your advantage.
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-mtg-orange text-center">
          Competitive Scorecard
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScorecardItem label="Search Ranking" value="Keyword Gaps" description="We pinpoint where they are invisible so you can rank first." />
          <ScorecardItem label="Review Velocity" value="Recency Lapses" description="Old reviews are an opening for your fresh, active profile." />
          <ScorecardItem label="Visual Proof" value="Stock Photo Trap" description="Authentic job photos beat generic stock imagery every time." />
          <ScorecardItem label="Profile Activity" value="Inactive Posts" description="Dormant profiles are easy to displace with structured content." />
          <ScorecardItem label="Service Range" value="Coverage Gaps" description="We target the geographic areas your competitors ignore." />
          <div className="bg-mtg-orange p-6 rounded-xl border border-mtg-orange/40 flex flex-col justify-center items-center text-center text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Our Focus</p>
            <p className="text-2xl font-black">Strategic Dominance</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ScorecardItem: React.FC<{ label: string; value: string; description: string }> = ({ label, value, description }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col space-y-2">
    <p className="text-[10px] font-black uppercase text-mtg-orange tracking-widest">{label}</p>
    <p className="text-lg font-bold text-mtg-blue">{value}</p>
    <p className="text-slate-500 text-sm leading-snug">{description}</p>
  </div>
);

export default BattlefieldSection;