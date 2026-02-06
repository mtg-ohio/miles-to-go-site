import React from 'react';
import SectionWrapper from './SectionWrapper';
import { VisibilityIcon, EngagementIcon, CredibilityIcon } from './Icon';

const ProblemSection: React.FC = () => {
  return (
    <SectionWrapper title="Stop Losing Local Leads.">
      <div className="text-left max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-mtg-blue">Local search is the new word-of-mouth.</h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Over <strong>80% of local purchases</strong> happen within 24 hours of a search. If your profile is hidden, you simply don't exist to ready-to-buy customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard 
              label="The Visibility Gap"
              value="+200%"
              trend="Avg. View Increase"
              description="How many times your listing appears when customers search for your services." 
              icon={<VisibilityIcon className="w-6 h-6 text-mtg-orange" />} 
          />
          <MetricCard 
              label="The Engagement Trap"
              value="Direct"
              trend="Lead Flow Injection"
              description="Calls, website clicks, and direction requests generated directly from your profile."
              icon={<EngagementIcon className="w-6 h-6 text-mtg-orange" />} 
          />
          <MetricCard 
              label="The Credibility Factor"
              value="3+ Stars"
              trend="87% Clicks Capture"
              description="Reviews are your digital proof. A lack of recent feedback is a direct threat to volume." 
              icon={<CredibilityIcon className="w-6 h-6 text-mtg-orange" />}
          />
        </div>

        <div className="bg-mtg-blue text-white p-8 rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform">
            <p className="text-xl italic leading-relaxed">
                "MTG's focus is on the <strong className="text-mtg-orange">structure of local ranking</strong>, not fleeting marketing gimmicks."
            </p>
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

const MetricCard: React.FC<MetricCardProps> = ({ label, value, trend, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center space-y-4 hover:border-mtg-orange transition-colors">
        <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">{label}</p>
          <p className="text-3xl font-black text-mtg-blue my-1">{value}</p>
          <p className="text-xs font-bold text-mtg-orange">{trend}</p>
        </div>
        <p className="text-gray-500 text-sm leading-snug">{description}</p>
    </div>
  );
};

export default ProblemSection;