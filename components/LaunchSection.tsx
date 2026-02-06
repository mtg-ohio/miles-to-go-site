import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { RocketIcon, CheckCircleIcon, GlobeIcon } from './Icon';

const LaunchSection: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyInstructions = () => {
    const text = `Netlify Drop Instructions:
1. Ensure your project is built (npm run build).
2. Drag the 'dist' or 'build' folder into the Netlify Drop area.
3. Once deployed, set up your custom domain (440.290.9067 for support).`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <SectionWrapper title="Project Hand-off." id="launch-section" className="bg-mtg-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10">
        <RocketIcon className="w-96 h-96 text-white rotate-12" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <p className="text-lg text-gray-300 mb-12">
          The Local Leads System is now fully architected and ready for production. 
          Follow the steps below to initialize your global presence.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-mtg-orange mb-4 flex items-center">
              <GlobeIcon className="w-6 h-6 mr-2" />
              Netlify Drop Guide
            </h3>
            <ol className="space-y-4 text-sm text-gray-200">
              <li className="flex items-start">
                <span className="bg-white/20 w-5 h-5 rounded-full flex items-center justify-center text-[10px] mr-3 mt-0.5 shrink-0">1</span>
                <span>Open <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="underline hover:text-mtg-orange">netlify.com/drop</a> in your browser.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white/20 w-5 h-5 rounded-full flex items-center justify-center text-[10px] mr-3 mt-0.5 shrink-0">2</span>
                <span>Drag your final project folder directly onto the upload zone.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white/20 w-5 h-5 rounded-full flex items-center justify-center text-[10px] mr-3 mt-0.5 shrink-0">3</span>
                <span>Your site is live instantly on a .netlify.app subdomain.</span>
              </li>
            </ol>
            <button 
              onClick={copyInstructions}
              className="mt-6 w-full py-2 border border-white/30 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              {isCopied ? 'Copied to Clipboard!' : 'Copy Deployment Notes'}
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-mtg-orange mb-4 flex items-center">
              <CheckCircleIcon className="w-6 h-6 mr-2" />
              Final Checklist
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-center">
                <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                <span>Custom Domain Verified</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                <span>SSL Certificate Issued</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                <span>Responsive Design Tested</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                <span>Lead Tracking Active</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-[10px] text-gray-400 italic mb-2">Need a technical walkthrough?</p>
              <p className="text-sm font-bold text-white">440.290.9067</p>
            </div>
          </div>
        </div>

        <div className="bg-mtg-orange p-6 rounded-lg text-center shadow-2xl transform hover:scale-[1.02] transition-transform">
           <h4 className="text-xl font-bold mb-2">Ready to scale?</h4>
           <p className="text-sm text-white/90 mb-0">
             This system is built for performance. When you hit your 30% lead growth target, contact MTG to discuss Tier 3 Strategic Dominance.
           </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LaunchSection;