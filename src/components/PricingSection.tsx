import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CheckCircleIcon } from './Icon';

const PricingSection: React.FC = () => {
  return (
    <SectionWrapper title="What It Costs." className="bg-mtg-soft-white">
      <div className="max-w-4xl mx-auto space-y-10">
        <p className="text-base md:text-lg text-mtg-charcoal opacity-85 leading-relaxed text-center max-w-2xl mx-auto">
          A one-time <strong>setup</strong>, then a simple <strong>monthly fee</strong>. Clear pricing, no surprises.
        </p>
        
        {/* STAGE 1: BUILD */}
        <div className="relative">
          <div className="absolute -top-3 left-6 bg-mtg-blue text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-lg z-20">Stage 1: Set Up</div>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-mtg-warm-gray/20 shadow-sm relative">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="relative">
                <p className="text-[10px] font-black text-mtg-rust uppercase tracking-[0.2em] mb-2">Phase I</p>
                <h4 className="text-xl font-bold text-mtg-navy mb-2">Fix the Foundation</h4>
                <p className="text-mtg-charcoal opacity-70 text-sm leading-relaxed">We clean up the ranking, trust, and info problems keeping people from finding you.</p>
              </div>
              <div className="relative md:pl-8 md:border-l border-mtg-warm-gray/10">
                <p className="text-[10px] font-black text-mtg-rust uppercase tracking-[0.2em] mb-2">Phase II</p>
                <h4 className="text-xl font-bold text-mtg-navy mb-2">Build Your Presence</h4>
                <p className="text-mtg-charcoal opacity-70 text-sm leading-relaxed">Real photos, posts, and details that help you show up where it counts.</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-mtg-warm-gray/20 text-center">
              <p className="text-[10px] font-black text-mtg-rust uppercase tracking-[0.25em] mb-1">One-Time Setup</p>
              <p className="text-4xl font-black text-mtg-navy">$1,400</p>
              <p className="mt-1 text-[10px] font-bold text-mtg-warm-gray uppercase tracking-widest">Phases I &amp; II, complete</p>
            </div>
          </div>
        </div>

        {/* Transition Arrow */}
        <div className="flex justify-center -my-6 relative z-30">
          <div className="bg-mtg-rust text-white p-2.5 rounded-full shadow-xl border-4 border-mtg-soft-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* STAGE 2: RUN */}
        <div className="relative pt-2">
          <div className="absolute -top-1 left-6 bg-mtg-rust text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-lg z-20">Stage 2: Keep It Going</div>
          <div className="bg-white p-1 pb-1 rounded-2xl border-2 border-mtg-rust/30 shadow-2xl overflow-hidden ring-4 ring-mtg-rust/5">
            <div className="bg-white p-6 md:p-8 rounded-[14px]">
               <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-3 text-left">
                     <h3 className="text-2xl md:text-3xl font-black text-mtg-navy mb-2">Keep the Customers Coming</h3>
                     <p className="text-mtg-charcoal opacity-75 mb-6 leading-relaxed text-base sm:text-lg">
                      Turning views into good, steady calls or store visits – <strong>that 30% goal</strong>.
                    </p>

                     <ul className="grid sm:grid-cols-2 gap-3">
                        <li className="flex items-center text-sm font-medium text-mtg-charcoal opacity-90">
                           <CheckCircleIcon className="w-4 h-4 mr-2.5 text-mtg-rust shrink-0" />
                           4 Posts a Month
                        </li>
                        <li className="flex items-center text-sm font-medium text-mtg-charcoal opacity-90">
                           <CheckCircleIcon className="w-4 h-4 mr-2.5 text-mtg-rust shrink-0" />
                           Review Requests - Handled
                        </li>
                        <li className="flex items-center text-sm font-medium text-mtg-charcoal opacity-90">
                           <CheckCircleIcon className="w-4 h-4 mr-2.5 text-mtg-rust shrink-0" />
                           Simple Monthly Report
                        </li>
                        <li className="flex items-center text-sm font-medium text-mtg-charcoal opacity-90">
                           <CheckCircleIcon className="w-4 h-4 mr-2.5 text-mtg-rust shrink-0" />
                           Stay On Top
                        </li>
                     </ul>
                  </div>
                  <div className="lg:col-span-2 bg-mtg-soft-white p-6 sm:p-8 rounded-xl text-center border border-mtg-warm-gray/10">
                     <p className="text-[10px] font-black text-mtg-rust uppercase tracking-[0.25em] mb-3">Monthly Fee</p>
                     <div className="flex flex-col items-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-black text-mtg-navy tracking-tighter whitespace-nowrap">
                           $625
                        </p>
                     </div>
                     <div className="mt-4 pt-4 border-t border-mtg-warm-gray/20">
                        <p className="text-[10px] text-mtg-warm-gray font-black uppercase tracking-[0.15em]">3-Month Minimum</p>
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
