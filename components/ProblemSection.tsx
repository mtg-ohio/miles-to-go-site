import React from 'react';
import SectionWrapper from './SectionWrapper';
import { VisibilityIcon, EngagementIcon, CredibilityIcon, PhoneIcon, MessageIcon, EmailIcon } from './Icon';

const ProblemSection: React.FC = () => {
  return (
    <SectionWrapper title="Stop Losing Local Leads.">
      <div className="text-left max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-mtg-blue">
            Local search is the new word-of-mouth.
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Most people hire within <strong>a day</strong> of searching.
            If you don&apos;t show up, they call whoever does.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard
            label="Get Seen"
            value="+200%"
            trend="More Profile Views"
            description="How often you show up when someone searches for what you do."
            icon={<VisibilityIcon className="w-6 h-6 text-mtg-orange" />}
          />
          <MetricCard
            label="Get Calls"
            value="Direct"
            trend="Calls & Clicks"
            description="Calls, website taps, and directions straight from your listing."
            icon={<EngagementIcon className="w-6 h-6 text-mtg-orange" />}
          />
          <MetricCard
            label="Get Trusted"
            value="3+ Stars"
            trend="Reviews That Win"
            description="Reviews are proof. Fresh, strong ones win the job."
            icon={<CredibilityIcon className="w-6 h-6 text-mtg-orange" />}
          />
        </div>

        <div className="bg-mtg-blue text-white p-8 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform">
          <p className="text-xl italic leading-relaxed">
            &quot;We build on how Google actually ranks <strong className="text-mtg-orange">local businesses</strong>,
            not gimmicks that fade.&quot;
          </p>
        </div>

        {/* Shortcut CTA - The "Short Circuit" */}
        <div className="pt-8 pb-4">
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl py-10 px-8 text-center relative">
            {/* Top Label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-mtg-orange whitespace-nowrap">MTG Fast Track</span>
            </div>
            
            <h4 className="text-xl font-bold text-mtg-blue mb-2">Skip the presentation.</h4>
            <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
              If people already can&apos;t find you, you don&apos;t need a sales pitch. You need it fixed.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-2">
              <a
                href="tel:4402909067"
                className="flex items-center gap-2 px-6 py-3 bg-white text-mtg-blue border border-slate-200 rounded-lg text-xs font-black uppercase tracking-widest hover:border-mtg-orange hover:text-mtg-orange transition-all shadow-sm hover:shadow-md group"
              >
                <PhoneIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Call
              </a>
              <a
                href="sms:4402909067"
                className="flex items-center gap-2 px-6 py-3 bg-white text-mtg-blue border border-slate-200 rounded-lg text-xs font-black uppercase tracking-widest hover:border-mtg-orange hover:text-mtg-orange transition-all shadow-sm hover:shadow-md group"
              >
                <MessageIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Text
              </a>
              <a
                href="mailto:michael@milestogoohio.com"
                className="flex items-center gap-2 px-6 py-3 bg-white text-mtg-blue border border-slate-200 rounded-lg text-xs font-black uppercase tracking-widest hover:border-mtg-orange hover:text-mtg-orange transition-all shadow-sm hover:shadow-md group"
              >
                <EmailIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Email
              </a>
            </div>
            
            {/* Bottom Label - Mirrored Design */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-4 z-10">
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.25em] whitespace-nowrap">
                No Salespeople. Just Michael.
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  description: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  trend,
  description,
  icon,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center space-y-4 hover:border-mtg-orange transition-colors group">
      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-mtg-orange/5 transition-colors">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">
          {label}
        </p>
        <p className="text-3xl font-black text-mtg-blue my-1">{value}</p>
        <p className="text-[11px] font-black text-mtg-orange tracking-wider">{trend}</p>
      </div>
      <p className="text-gray-500 text-sm leading-snug">{description}</p>
    </div>
  );
};

export default ProblemSection;