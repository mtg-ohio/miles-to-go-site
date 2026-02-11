import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CheckCircleIcon } from './Icon';

const PricingSection: React.FC = () => {
  return (
    <SectionWrapper title="System Investment." className="bg-slate-50">
      <div className="max-w-4xl mx-auto space-y-16">
        <p className="text-base md:text-lg text-slate-700 leading-relaxed text-center max-w-2xl mx-auto">
          One-time <strong>System Build</strong>. Monthly <strong>Performance Run</strong>. Clear ROI, stage by stage.
        </p>
        
        {/* STAGE 1: BUILD */}
        <div className="relative">
          <div className="absolute -top-3 left-6 bg-mtg-blue text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-lg z-20">Stage 1: Build</div>
          <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm relative">
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="relative">
                <p className="text-[10px] font-black text-mtg-orange uppercase tracking-[0.2em] mb-2">Phase I</p>
                <h4 className="text-xl font-bold text-mtg-blue mb-3">Technical Installation</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">Fixing the ranking, trust, and data issues that keep customers from finding you. Foundation first.</p>
                <p className="text-3xl font-black text-mtg-blue">$650</p>
              </div>
              <div className="relative md:pl-12 md:border-l border-slate-100">
                <p className="text-[10px] font-black text-mtg-orange uppercase tracking-[0.2em] mb-2">Phase II</p>
                <h4 className="text-xl font-bold text-mtg-blue mb-3">Content Activation</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">Geo-aligned assets and structured content built for discovery and momentum.</p>
                <p className="text-3xl font-black text-mtg-blue">$750</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Arrow */}
        <div className="flex justify-center -my-10 relative z-30">
          <div className="bg-mtg-orange text-white p-3 rounded-full shadow-xl border-4 border-slate-50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* STAGE 2: RUN */}
        <div className="relative pt-4">
          <div className="absolute -top-0 left-6 bg-mtg-orange text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-lg z-20">Stage 2: Run</div>
          <div className="bg-white p-1 pb-1 rounded-2xl border-2 border-mtg-orange/30 shadow-2xl overflow-hidden ring-4 ring-mtg-orange/5">
            <div className="bg-white p-10 rounded-[14px]">
               <div className="grid lg:grid-cols-5 gap-10 items-center">
                  <div className="lg:col-span-3 text-left">
                     <h3 className="text-2xl md:text-3xl font-black text-mtg-blue mb-3">Performance Management</h3>
                     <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                      Turning visibility into consistent, qualified calls - <strong>the 30% growth benchmark</strong>.
                    </p>

                     <ul className="grid sm:grid-cols-2 gap-4">
                        <li className="flex items-center text-sm font-medium text-slate-700">
                          <CheckCircleIcon className="w-5 h-5 mr-3 text-mtg-orange shrink-0" />
                          Content Engine (4 Posts)
                        </li>
                        <li className="flex items-center text-sm font-medium text-slate-700">
                          <CheckCircleIcon className="w-5 h-5 mr-3 text-mtg-orange shrink-0" />
                          Managed Review Flows
                        </li>
                        <li className="flex items-center text-sm font-medium text-slate-700">
                          <CheckCircleIcon className="w-5 h-5 mr-3 text-mtg-orange shrink-0" />
                          ROI Performance Data
                        </li>
                        <li className="flex items-center text-sm font-medium text-slate-700">
                          <CheckCircleIcon className="w-5 h-5 mr-3 text-mtg-orange shrink-0" />
                          Local Ranking Defense
                        </li>
                     </ul>
                  </div>
                  <div className="lg:col-span-2 bg-slate-50 p-10 rounded-xl text-center border border-slate-100">
                     <p className="text-[10px] font-black text-mtg-orange uppercase tracking-[0.25em] mb-4">Monthly Management Fee</p>
                     <div className="flex flex-col items-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-black text-mtg-blue tracking-tighter whitespace-nowrap">
                          $550 – $650
                        </p>
                        <p className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Based on market density</p>
                     </div>
                     <div className="mt-6 pt-6 border-t border-slate-200">
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">3-Month Performance Commitment</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;