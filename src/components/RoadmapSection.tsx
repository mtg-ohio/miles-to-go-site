import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FoundationIcon, RocketIcon, AutomationIcon } from './Icon';

const RoadmapSection: React.FC = () => {
  return (
    <SectionWrapper title="How It Works." className="bg-mtg-soft-white">
      <div className="max-w-4xl mx-auto relative">
        <p className="text-base md:text-lg text-mtg-charcoal opacity-80 mb-8 -mt-4 font-medium leading-relaxed">
          A clear path from getting found to staying ahead.
        </p>
        
        {/* Progress Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-mtg-warm-gray/20 -translate-x-1/2 z-0"></div>

        <div className="space-y-8 relative z-10">
          {/* STAGE 1 GROUP */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-mtg-blue/10 md:hidden"></div>
            <div className="mb-4 flex items-center justify-center">
              <span className="bg-mtg-blue text-white px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest">Stage 1: Set Up</span>
            </div>
            <div className="space-y-8">
              <PathStep 
                icon={<FoundationIcon className="w-6 h-6" />}
                number="01"
                title="Fix the Foundation"
                action="We clean up the ranking, trust, and info problems keeping people from finding you."
                deliverable="A fully verified profile"
                alignment="left"
              />
              <PathStep 
                icon={<RocketIcon className="w-6 h-6" />}
                number="02"
                title="Build Your Presence"
                action="Real photos, posts, and details that help you show up where it counts."
                deliverable="Measurable ranking improvement"
                alignment="right"
              />
            </div>
          </div>

          {/* STAGE 2 GROUP */}
          <div className="relative pt-2">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-mtg-rust/10 md:hidden"></div>
            <div className="mb-4 flex items-center justify-center">
              <span className="bg-mtg-rust text-white px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest">Stage 2: Keep It Going</span>
            </div>
            <PathStep 
              icon={<AutomationIcon className="w-6 h-6" />}
              number="03"
              title="Keep the Customers Coming"
              action="Ongoing posts, reviews, and tune-ups that keep you near the top."
              deliverable="Consistent month-over-month growth"
              alignment="left"
            />
          </div>
          
          {/* The 30% Milestone */}
          <div className="flex flex-col items-center justify-center pt-2">
            <div className="bg-white border-2 border-mtg-rust text-mtg-rust px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
              The 30% Mark
            </div>
            <div className="mt-3 text-center">
              <h4 className="text-2xl font-black text-mtg-navy">More Customers & Calls, Month After Month</h4>
              <p className="mt-2 text-base font-medium text-mtg-charcoal opacity-90">Only then does it make sense to expand.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

interface PathStepProps {
  number: string;
  title: string;
  action: string;
  deliverable: string;
  icon: React.ReactNode;
  alignment: 'left' | 'right';
}

const PathStep: React.FC<PathStepProps> = ({ number, title, action, deliverable, icon, alignment }) => {
  const isLeft = alignment === 'left';
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center w-full gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 text-center md:text-left hidden md:block">
        {!isLeft && (
          <div className="pl-12">
            <h4 className="font-bold text-mtg-navy text-lg">{title}</h4>
            <p className="text-mtg-charcoal opacity-70 text-sm mt-1 leading-relaxed">{action}</p>
            <p className="text-mtg-rust font-bold text-[11px] mt-2 uppercase tracking-wider">You get: {deliverable}</p>
          </div>
        )}
      </div>

      <div className="relative flex-shrink-0">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center z-10 relative shadow-xl border-4 border-white ${number === '03' ? 'bg-mtg-rust text-white' : 'bg-mtg-blue text-white'}`}>
          {icon}
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        {isLeft ? (
          <div className="md:pr-12 md:text-right">
            <h4 className="font-bold text-mtg-navy text-lg">{title}</h4>
            <p className="text-mtg-charcoal opacity-70 text-sm mt-1 leading-relaxed">{action}</p>
            <p className="text-mtg-rust font-bold text-[11px] mt-2 uppercase tracking-wider">You get: {deliverable}</p>
          </div>
        ) : (
          <div className="md:hidden">
             <h4 className="font-bold text-mtg-navy text-lg">{title}</h4>
             <p className="text-mtg-charcoal opacity-70 text-sm mt-1 leading-relaxed">{action}</p>
             <p className="text-mtg-rust font-bold text-[11px] mt-2 uppercase tracking-wider">You get: {deliverable}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapSection;