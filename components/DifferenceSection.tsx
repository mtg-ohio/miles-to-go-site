import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TrophyIcon, UserIcon, DiamondIcon, GearsIcon } from './Icon';

const DifferenceSection: React.FC = () => {
  return (
    <SectionWrapper title="Why They'll Pick You." id="compatibility">
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          Showing up is only half of it. We set up your profile around the jobs you actually want—so the right customers pick you.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <MiniCard 
            icon={<TrophyIcon className="w-5 h-5" />}
            title="The 90-Day Goal"
            text="The aim: 30% more good calls in your first 90 days."
            isHighlighted={true}
          />
          <MiniCard 
            icon={<UserIcon className="w-5 h-5" />}
            title="The Right Jobs, Not Just More"
            text="We don't chase every call. We go after the jobs that pay you best."
          />
          <MiniCard 
            icon={<DiamondIcon className="w-5 h-5" />}
            title="Stand Out"
            text="We make it obvious why someone should call you instead of the other guy."
          />
          <MiniCard 
            icon={<GearsIcon className="w-5 h-5" />}
            title="Proof That Sells"
            text="A simple habit of job-site photos and a steady stream of fresh reviews."
          />
        </div>

        <div className="bg-mtg-blue text-white p-8 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform">
            <p className="text-xl italic leading-relaxed">
                A clear, simple reason for people to <strong className="text-mtg-orange">choose you</strong>—ready to put to work.
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

const MiniCard: React.FC<{ icon: React.ReactNode; title: string; text: string; isHighlighted?: boolean }> = ({ icon, title, text, isHighlighted = false }) => (
  <div className={`flex items-start gap-4 p-5 rounded-xl border transition-all ${isHighlighted ? 'bg-mtg-orange/5 border-mtg-orange shadow-md scale-105 relative z-10' : 'bg-white border-gray-100 shadow-sm hover:border-mtg-blue/20'}`}>
    <div className={`p-2.5 rounded-lg flex-shrink-0 ${isHighlighted ? 'bg-mtg-orange text-white shadow-lg' : 'bg-mtg-blue/10 text-mtg-blue'}`}>
      {icon}
    </div>
    <div>
      <h4 className={`font-black leading-tight text-lg ${isHighlighted ? 'text-mtg-orange' : 'text-mtg-blue'}`}>{title}</h4>
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default DifferenceSection;