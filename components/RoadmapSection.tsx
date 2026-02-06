import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FoundationIcon, RocketIcon, AutomationIcon } from './Icon';

const RoadmapSection: React.FC = () => {
  return (
    <SectionWrapper title="The System Lifecycle.">
      <div className="max-w-4xl mx-auto relative">
        {/* Progress Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 z-0"></div>

        <div className="space-y-16 relative z-10">
          {/* STAGE 1 GROUP */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-mtg-blue/10 md:hidden"></div>
            <div className="mb-8 flex items-center justify-center">
              <span className="bg-mtg-blue text-white px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest">Stage 1: Build</span>
            </div>
            <div className="space-y-12">
              <PathStep 
                icon={<FoundationIcon className="w-6 h-6" />}
                number="01"
                title="Compliance Audit"
                action="Technical correction and error elimination."
                deliverable="100% Verified Profile"
                alignment="left"
              />
              <PathStep 
                icon={<RocketIcon className="w-6 h-6" />}
                number="02"
                title="Content Activation"
                action="Geo-tagged assets and keyword-rich data."
                deliverable="Active Ranking Growth"
                alignment="right"
              />
            </div>
          </div>

          {/* STAGE 2 GROUP */}
          <div className="relative pt-8">
            <div className="mb-8 flex items-center justify-center">
              <span className="bg-mtg-orange text-white px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest">Stage 2: Run</span>
            </div>
            <PathStep 
              icon={<AutomationIcon className="w-6 h-6" />}
              number="03"
              title="Performance Management"
              action="Review workflows and structured content engine."
              deliverable="The 90-Day Growth Engine"
              alignment="left"
            />
          </div>
          
          {/* The 30% Milestone */}
          <div className="flex flex-col items-center justify-center pt-8">
            <div className="bg-white border-2 border-mtg-orange text-mtg-orange px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
              The 30% Growth Benchmark
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-2xl font-black text-mtg-blue">Qualified Call Volume Peak</h4>
              <p className="text-gray-500 text-sm italic">Prerequisite for Stage 3: Scale</p>
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
            <h4 className="font-bold text-mtg-blue text-xl">{title}</h4>
            <p className="text-gray-600 text-sm mt-1">{action}</p>
            <p className="text-mtg-orange font-bold text-[10px] mt-2 uppercase tracking-tight">Deliverable: {deliverable}</p>
          </div>
        )}
      </div>

      <div className="relative flex-shrink-0">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center z-10 relative shadow-xl border-4 border-white ${number === '03' ? 'bg-mtg-orange text-white' : 'bg-mtg-blue text-white'}`}>
          {icon}
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        {isLeft ? (
          <div className="md:pr-12 md:text-right">
            <h4 className="font-bold text-mtg-blue text-xl">{title}</h4>
            <p className="text-gray-600 text-sm mt-1">{action}</p>
            <p className="text-mtg-orange font-bold text-[10px] mt-2 uppercase tracking-tight">Deliverable: {deliverable}</p>
          </div>
        ) : (
          <div className="md:hidden">
             <h4 className="font-bold text-mtg-blue text-xl">{title}</h4>
             <p className="text-gray-600 text-sm mt-1">{action}</p>
             <p className="text-mtg-orange font-bold text-[10px] mt-2 uppercase tracking-tight">Deliverable: {deliverable}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapSection;