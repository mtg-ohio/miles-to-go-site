import React from 'react';
import SectionWrapper from './SectionWrapper';
import { VisibilityIcon, EngagementIcon, CredibilityIcon, PhoneIcon, MessageIcon, EmailIcon } from './Icon';

const ProblemSection: React.FC = () => {
  return (
    <SectionWrapper title="Stop Losing Local Leads." className="bg-white">
      <div className="text-left max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold text-mtg-navy">
            Local search is the new word-of-mouth.
          </h3>
          <p className="text-mtg-charcoal opacity-80 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            Most people hire or buy within <strong>a day</strong> of searching.
            If you don&apos;t show up, they call or visit whoever does.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard
            label="Get Seen"
            value="+200%"
            trend="More Profile Views"
            description="How often you show up when someone searches for what you sell or do."
            icon={<VisibilityIcon className="w-6 h-6 text-mtg-rust" />}
          />
          <MetricCard
            label="Get Customers"
            value="Direct"
            trend="Calls & Clicks"
            description="Calls, website clicks, and directions straight from your listing."
            icon={<EngagementIcon className="w-6 h-6 text-mtg-rust" />}
          />
          <MetricCard
            label="Get Trusted"
            value="3+ Stars"
            trend="Reviews That Win"
            description="Reviews are proof. Fresh, strong ones win the job or sale."
            icon={<CredibilityIcon className="w-6 h-6 text-mtg-rust" />}
          />
        </div>

        <div className="bg-mtg-blue text-white p-6 sm:p-8 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform">
          <p className="text-lg italic leading-relaxed">
            &quot;We build on how Google <strong className="text-mtg-rust">actually ranks local businesses</strong>,
            not gimmicks that fade.&quot;
          </p>
        </div>

        {/* Shortcut CTA - The "Short Circuit" */}
        <div className="pt-4 pb-2">
          <div className="bg-white border-2 border-dashed border-mtg-warm-gray/20 rounded-2xl py-8 px-6 text-center relative">
            {/* Top Label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-mtg-soft-white px-4 z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-mtg-rust whitespace-nowrap">MTG Fast Track</span>
            </div>
            
            <h4 className="text-lg font-bold text-mtg-navy mb-1">Skip the presentation.</h4>
            <p className="text-sm text-mtg-charcoal opacity-70 mb-6 max-w-md mx-auto leading-relaxed">
              If people already can&apos;t find you, you don&apos;t need a sales pitch. You need it fixed.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-2">
              <a
                href="tel:4402909067"
                className="flex items-center gap-2 px-6 py-3 bg-white text-mtg-near-black border border-mtg-warm-gray/25 rounded-lg text-xs font-black uppercase tracking-widest hover:border-mtg-rust hover:text-mtg-rust transition-all shadow-sm hover:shadow-md group"
              >
                <PhoneIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Call
              </a>
              <a
                href="sms:4402909067"
                className="flex items-center gap-2 px-6 py-3 bg-white text-mtg-near-black border border-mtg-warm-gray/25 rounded-lg text-xs font-black uppercase tracking-widest hover:border-mtg-rust hover:text-mtg-rust transition-all shadow-sm hover:shadow-md group"
              >
                <MessageIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Text
              </a>
              <a
                href="mailto:michael@milestogoohio.com"
                className="flex items-center gap-2 px-6 py-3 bg-white text-mtg-near-black border border-mtg-warm-gray/25 rounded-lg text-xs font-black uppercase tracking-widest hover:border-mtg-rust hover:text-mtg-rust transition-all shadow-sm hover:shadow-md group"
              >
                <EmailIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Email
              </a>
            </div>
            
            {/* Bottom Label - Mirrored Design */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-mtg-soft-white px-4 z-10">
              <span className="text-[10px] text-mtg-warm-gray font-black uppercase tracking-[0.25em] whitespace-nowrap">
                No Sales Team. No Runaround.
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
    <div className="bg-white p-6 rounded-xl border border-mtg-warm-gray/20 flex flex-col items-center text-center space-y-4 hover:border-mtg-rust transition-colors group">
      <div className="p-3 bg-mtg-soft-white rounded-lg group-hover:bg-mtg-rust/5 transition-colors">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-mtg-warm-gray font-black">
          {label}
        </p>
        <p className="text-3xl font-black text-mtg-navy my-1">{value}</p>
        <p className="text-[11px] font-black text-mtg-rust tracking-wider">{trend}</p>
      </div>
      <p className="text-mtg-charcoal opacity-70 text-sm leading-snug">{description}</p>
    </div>
  );
};

export default ProblemSection;
