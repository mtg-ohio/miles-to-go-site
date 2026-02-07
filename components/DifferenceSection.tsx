import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TrophyIcon, UserIcon, DiamondIcon, GearsIcon } from './Icon';

const DifferenceSection: React.FC = () => {
  return (
    <SectionWrapper title="Designing Your Difference." id="compatibility">
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          Stage 1 (Build) only works if your message converts. We shape your profile around the work you actually want, so the right customers choose you.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <MiniCard 
            icon={<TrophyIcon className="w-5 h-5" />}
            title="The 90-Day North Star"
            text="Our goal is a 30% increase in qualified calls within the first 90 days."
            isHighlighted={true}
          />
          <MiniCard 
            icon={<UserIcon className="w-5 h-5" />}
            title="Ideal Job Targeting"
            text="We don't optimize for volume; we optimize for the specific jobs that drive your highest margins."
          />
          <MiniCard 
            icon={<DiamondIcon className="w-5 h-5" />}
            title="Differentiation"
            text="We'll make it obvious why a customer should choose you over the other options nearby."
          />
          <MiniCard 
            icon={<GearsIcon className="w-5 h-5" />}
            title="Evidence Systems"
            text="We implement workflows for constant job-site proof and a reliable review engine."
          />
        </div>

        <div className="bg-mtg-blue text-white p-8 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform">
            <p className="text-xl italic leading-relaxed">
                A documented <strong className="text-mtg-orange">unique selling proposition</strong> - ready for activation.
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