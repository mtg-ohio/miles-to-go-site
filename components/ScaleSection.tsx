import React from 'react';
import { PhoneIcon, MessageIcon, EmailIcon } from './Icon';

const ScaleSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-mtg-blue relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mtg-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          High Volume Destination
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Stage 3: Scale
        </h2>
        
        <div className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md max-w-2xl mx-auto shadow-2xl">
          <p className="text-mtg-orange font-black uppercase tracking-widest text-xs mb-6">
            Prerequisite: +30% Qualified Call Growth Achieved
          </p>
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6 font-medium">
            Ready for <span className="text-white border-b-2 border-mtg-orange pb-1">Strategic Dominance?</span>
          </p>

          <p className="text-slate-400 mb-10 text-base md:text-lg leading-relaxed">
            Once the system is proven and stable, we expand coverage, increase frequency, and apply pressure across your entire local market.
          </p>


          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-widest">
              Start Your Scale Conversation
            </h4>

            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
               <a href="tel:4402909067" className="flex items-center justify-center gap-2 px-8 py-4 bg-mtg-orange text-white rounded font-black uppercase tracking-widest hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl">
                  <PhoneIcon className="w-5 h-5" />
                  Call
               </a>
               <a href="sms:4402909067" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-mtg-blue rounded font-black uppercase tracking-widest hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
                  <MessageIcon className="w-5 h-5" />
                  Text
               </a>
               <a href="mailto:michael@milestogoohio.com" className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded font-black uppercase tracking-widest hover:bg-white/10 transition-all transform hover:scale-105 shadow-xl">
                  <EmailIcon className="w-5 h-5" />
                  Email
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;