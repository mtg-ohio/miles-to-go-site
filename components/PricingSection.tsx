import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CheckCircleIcon } from './Icon';

const PricingSection: React.FC = () => {
  return (
    <SectionWrapper title="System Investment." className="bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-16">
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          We separate the one-time <strong>System Build</strong> from the monthly <strong>Performance Run</strong> to ensure clear ROI at every stage.
        </p>
        
        {/* STAGE 1: BUILD */}
        <div className="relative">
          <div className="absolute -top-4 left-4 bg-mtg-blue text-white px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">Stage 1: Build</div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <p className="text-xs font-bold text-mtg-orange uppercase tracking-widest mb-1">Phase I</p>
                <h4 className="text-xl font-bold text-mtg-blue mb-2">Technical Installation</h4>
                <p className="text-gray-600 text-sm mb-4">Complete compliance audit and error elimination. We fix the foundation before we build the engine.</p>
                <p className="text-2xl font-black text-mtg-text">$650</p>
              </div>
              <div>
                <p className="text-xs font-bold text-mtg-orange uppercase tracking-widest mb-1">Phase II</p>
                <h4 className="text-xl font-bold text-mtg-blue mb-2">Content Activation</h4>
                <p className="text-gray-600 text-sm mb-4">Strategic visual asset deployment and keyword-rich data integration to jumpstart visibility.</p>
                <p className="text-2xl font-black text-mtg-text">$750</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition */}
        <div className="flex justify-center -my-8 relative z-20">
          <div className="bg-white p-2 rounded-full border border-gray-200 shadow-md">
            <svg className="w-6 h-6 text-mtg-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* STAGE 2: RUN */}
        <div className="relative">
          <div className="absolute -top-4 left-4 bg-mtg-orange text-white px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">Stage 2: Run</div>
          <div className="bg-white p-8 rounded-2xl border border-mtg-orange/20 shadow-xl overflow-hidden">
             <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 text-left">
                   <h3 className="text-2xl font-bold text-mtg-blue">Performance Management</h3>
                   <p className="text-gray-600 mt-2 mb-6">This is where the <strong>30% growth target</strong> is achieved. Full-service GBP management to maintain and grow your lead flow.</p>
                   <ul className="space-y-3">
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 mr-3 text-mtg-orange" />
                        Monthly Content Engine (4 Posts)
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 mr-3 text-mtg-orange" />
                        Managed Review Response Flow
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 mr-3 text-mtg-orange" />
                        ROI Performance Dashboards
                      </li>
                   </ul>
                </div>
                <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl text-center">
                   <p className="text-xs font-bold text-mtg-orange uppercase tracking-widest mb-2">Monthly Engine Fee</p>
                   <p className="text-4xl font-black text-mtg-blue">$550 – $650</p>
                   <p className="text-[10px] text-gray-400 mt-3 font-bold uppercase tracking-wider">3-Month Performance Lock-In</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;