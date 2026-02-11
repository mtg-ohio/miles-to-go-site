import React from 'react';
import { PhoneIcon, MessageIcon, EmailIcon } from './Icon';

const ScaleSection: React.FC = () => {
  return (
    <section className="py-28 px-4 bg-mtg-blue relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mtg-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-5 py-2 bg-white/10 border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
          Phase III: High Volume Expansion
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tight">
          Stage 3: Scale
        </h2>
        
        <div className="bg-white/[0.03] border border-white/10 p-1 md:p-1.5 rounded-3xl backdrop-blur-md max-w-2xl mx-auto shadow-2xl overflow-hidden ring-1 ring-white/10">
          <div className="bg-mtg-blue/40 p-10 rounded-[22px] border border-white/5">
            <div className="inline-block px-3 py-1 bg-mtg-orange text-white text-[9px] font-black uppercase tracking-widest rounded mb-6">
              Prerequisite: 30% Growth Benchmark Achieved
            </div>
            
            <p className="text-2xl md:text-3xl text-white leading-tight mb-6 font-bold">
              Ready for <span className="text-mtg-orange">Strategic Dominance?</span>
            </p>

            <p className="text-slate-300 mb-12 text-base md:text-lg leading-relaxed font-medium">
              Once the system is proven and stable, we expand coverage and frequency across the market.
            </p>

            <div className="space-y-8">
              <div className="w-16 h-1 bg-white/20 mx-auto"></div>
              
              <h4 className="text-white/70 font-black text-xs uppercase tracking-[0.4em]">
                Start Your Scale Conversation
              </h4>

              <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
                 <a href="tel:4402909067" className="flex items-center justify-center gap-3 px-8 py-4 bg-mtg-orange text-white rounded-lg font-black uppercase tracking-[0.15em] hover:bg-orange-600 transition-all transform hover:scale-[1.03] shadow-xl group">
                    <PhoneIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Call
                 </a>
                 <a href="sms:4402909067" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-mtg-blue rounded-lg font-black uppercase tracking-[0.15em] hover:bg-slate-100 transition-all transform hover:scale-[1.03] shadow-xl group">
                    <MessageIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    Text
                 </a>
                 <a href="mailto:michael@milestogoohio.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg font-black uppercase tracking-[0.15em] hover:bg-white/10 transition-all transform hover:scale-[1.03] shadow-xl group">
                    <EmailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Email
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;