import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { RocketIcon, CheckCircleIcon, GlobeIcon } from './Icon';

const LaunchSection: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyRepoInstructions = () => {
    const text = `MTG Deployment Strategy:
1. Create a private GitHub Repository.
2. Push these project files to the 'main' branch.
3. In Netlify: 'Add New Site' -> 'Import from existing project'.
4. Select GitHub and authorize.
5. Build Settings: 
   - Build Command: npm run build
   - Publish directory: .`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <SectionWrapper title="Owner's Deployment Guide." id="launch-section" className="bg-slate-900 text-white overflow-hidden relative border-t border-mtg-orange/30">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-5">
        <RocketIcon className="w-96 h-96 text-white rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-lg text-slate-400 mb-12 text-center">
          The Local Leads System is architected for <strong>Continuous Deployment</strong>. 
          Follow this path to link your GitHub repository to Netlify.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl flex flex-col h-full">
            <h3 className="text-xl font-bold text-mtg-orange mb-6 flex items-center">
              <GlobeIcon className="w-6 h-6 mr-3" />
              GitHub → Netlify Pipeline
            </h3>
            <ol className="space-y-5 text-sm text-slate-300 flex-grow">
              <li className="flex items-start">
                <span className="bg-mtg-orange w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black mr-3 mt-0.5 shrink-0 text-white">1</span>
                <span><strong>Initialize:</strong> Create a new repository on GitHub and upload these files.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-mtg-orange w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black mr-3 mt-0.5 shrink-0 text-white">2</span>
                <span><strong>Connect:</strong> Login to Netlify, click 'Add New Site' and choose 'Import from existing project'.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-mtg-orange w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black mr-3 mt-0.5 shrink-0 text-white">3</span>
                <span><strong>Authorize:</strong> Connect your GitHub account and select your repository.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-mtg-orange w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black mr-3 mt-0.5 shrink-0 text-white">4</span>
                <span><strong>Deploy:</strong> Netlify will automatically detect the settings. Click 'Deploy' and your site is live.</span>
              </li>
            </ol>
            <button 
              onClick={copyRepoInstructions}
              className="mt-8 w-full py-4 bg-white/10 border border-white/20 rounded-lg text-xs font-black uppercase tracking-[0.2em] hover:bg-white/20 transition-all flex items-center justify-center text-white"
            >
              {isCopied ? 'Copied to Clipboard!' : 'Copy Deployment Steps'}
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-mtg-orange mb-6 flex items-center">
              <CheckCircleIcon className="w-6 h-6 mr-3" />
              Production Readiness
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center group">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                <span>SEO Metadata & Social Graph Active</span>
              </li>
              <li className="flex items-center group">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                <span>JSON-LD Schema (AI/LLM) Injected</span>
              </li>
              <li className="flex items-center group">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                <span>High-Resolution SVG Assets Inline</span>
              </li>
              <li className="flex items-center group">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                <span>Responsive Utility Framework (Tailwind)</span>
              </li>
            </ul>
            <div className="mt-10 pt-8 border-t border-white/10 text-center">
              <p className="text-[10px] text-slate-500 italic mb-3 uppercase tracking-widest">Support Line for MTG Infrastructure</p>
              <p className="text-2xl font-black text-white tracking-tighter">440.290.9067</p>
            </div>
          </div>
        </div>

        <div className="bg-mtg-orange p-8 rounded-2xl text-center shadow-2xl">
           <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">System Status: Ready for Production</h4>
           <p className="text-white/90 font-medium">
             Once connected to GitHub, any text or style changes we make will go live within 30 seconds of pushing the update.
           </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LaunchSection;