import React from 'react';
import SectionWrapper from './SectionWrapper';

const BattlefieldSection: React.FC = () => {
  return (
    <SectionWrapper title="Know the Local Battlefield." className="bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          Before building, we identify gaps in your top 3 local competitors. We don't guess—we benchmark their weaknesses to create your advantage.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScorecardItem label="Search Ranking" value="Keyword Gaps" description="We pinpoint where they are invisible so you can rank first." />
          <ScorecardItem label="Review Velocity" value="Recency Lapses" description="Old reviews are an opening for your fresh, active profile." />
          <ScorecardItem label="Visual proof" value="Stock Photo Trap" description="Authentic job photos beat generic stock imagery every time." />
          <ScorecardItem label="Profile Activity" value="Inactive Posts" description="Dormant profiles are easy to displace with structured content." />
          <ScorecardItem label="Service Range" value="Coverage Gaps" description="Exploiting geographic areas your competitors are ignoring." />
          <div className="bg-mtg-orange p-6 rounded-xl flex flex-col justify-center items-center text-center text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Our Focus</p>
            <p className="text-2xl font-black">Strategic Dominance</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ScorecardItem: React.FC<{ label: string; value: string; description: string }> = ({ label, value, description }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col space-y-2">
    <p className="text-[10px] font-black uppercase text-mtg-orange tracking-widest">{label}</p>
    <p className="text-lg font-bold text-mtg-blue">{value}</p>
    <p className="text-gray-500 text-sm leading-snug">{description}</p>
  </div>
);

export default BattlefieldSection;