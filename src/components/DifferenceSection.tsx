import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TrophyIcon, UserIcon, DiamondIcon, GearsIcon } from './Icon';

const DifferenceSection: React.FC = () => {
  return (
    <SectionWrapper title="Why They'll Pick You." id="compatibility" className="bg-mtg-soft-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-base md:text-lg text-mtg-charcoal opacity-85 leading-relaxed text-center max-w-2xl mx-auto">
          Showing up is only half of it. We set things up around the jobs or sales you actually want, so the right
          customers pick you.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <MiniCard
            icon={<TrophyIcon className="w-5 h-5" />}
            title="Find the Gaps"
            text="We size up the competitors people would pick instead, and go after what they're leaving open."
            isHighlighted={true}
          />
          <MiniCard
            icon={<UserIcon className="w-5 h-5" />}
            title="The Right Business, Not Just More"
            text="We don't chase every tiny lead. We go after the jobs or sales that pay you best."
          />
          <MiniCard
            icon={<DiamondIcon className="w-5 h-5" />}
            title="Stand Out"
            text="We make it obvious why someone should choose you instead of the other guy."
          />
          <MiniCard
            icon={<GearsIcon className="w-5 h-5" />}
            title="Proof That Sells"
            text="Real photos of your work and a steady stream of fresh reviews beat stock images every time."
          />
        </div>

        <div className="bg-mtg-blue text-white p-6 sm:p-8 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform">
          <p className="text-lg italic leading-relaxed">
            You stay in charge. Anything that <strong className="text-mtg-rust">speaks for you</strong>, like a post or
            a review reply, goes up only after you okay it.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

const MiniCard: React.FC<{ icon: React.ReactNode; title: string; text: string; isHighlighted?: boolean }> = ({ icon, title, text, isHighlighted = false }) => (
  <div className={`flex items-start gap-4 p-5 rounded-xl border transition-all ${isHighlighted ? 'bg-mtg-rust/5 border-mtg-rust shadow-md scale-105 relative z-10' : 'bg-white border-mtg-warm-gray/10 shadow-sm hover:border-mtg-blue/20'}`}>
    <div className={`p-2.5 rounded-lg flex-shrink-0 ${isHighlighted ? 'bg-mtg-rust text-white shadow-lg' : 'bg-mtg-blue/10 text-mtg-blue'}`}>
      {icon}
    </div>
    <div>
      <h4 className={`font-black leading-tight text-lg ${isHighlighted ? 'text-mtg-rust' : 'text-mtg-navy'}`}>{title}</h4>
      <p className="text-mtg-charcoal opacity-75 text-sm mt-2 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default DifferenceSection;
