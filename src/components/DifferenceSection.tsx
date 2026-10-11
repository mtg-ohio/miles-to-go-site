import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TrophyIcon, UserIcon, DiamondIcon, GearsIcon } from './Icon';

const DifferenceSection: React.FC = () => {
  return (
    <SectionWrapper title="Why They'll Choose You" id="compatibility" className="bg-mtg-soft-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-base md:text-lg text-mtg-charcoal opacity-85 leading-relaxed text-center max-w-2xl mx-auto">
          Showing up is only half of it. We set things up around the jobs or sales you actually want, so the right
          customers pick you.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <MiniCard
            icon={<TrophyIcon className="w-5 h-5" />}
            title="Find the Gaps"
            text="When a competitor shows up above you on Google, we identify what they're leaving open and we take it."
            isHighlighted={true}
          />
          <MiniCard
            icon={<UserIcon className="w-5 h-5" />}
            title="Win the Right Work"
            text="Not every lead is worth chasing. We focus on the work you want most."
          />
          <MiniCard
            icon={<DiamondIcon className="w-5 h-5" />}
            title="Stand Out"
            text="We'll work together to make it obvious why someone should choose you over the other guy."
          />
          <MiniCard
            icon={<GearsIcon className="w-5 h-5" />}
            title="Show the Proof"
            text="Real work and fresh five-star reviews are your proof. We turn your job photos into posts you approve, and make asking for reviews easy."
          />
        </div>

        <div className="bg-mtg-blue text-white p-6 sm:p-8 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform">
          <p className="text-lg italic leading-relaxed">
            We do the online work. You keep the <strong className="text-mtg-rust">final say</strong>. Nothing goes out in your name without your approval.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

const MiniCard: React.FC<{ icon: React.ReactNode; title: string; text: string; isHighlighted?: boolean }> = ({ icon, title, text, isHighlighted = false }) => (
  <div className={`flex items-start gap-4 p-5 rounded-xl border transition-all ${isHighlighted ? 'bg-mtg-rust/5 border-mtg-rust shadow-md relative z-10' : 'bg-white border-mtg-warm-gray/10 shadow-sm hover:border-mtg-blue/20'}`}>
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
