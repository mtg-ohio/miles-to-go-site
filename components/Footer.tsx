import React from 'react';
import { EmailIcon, PhoneIcon } from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto py-8 px-4">
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-mtg-blue">MTG</p>
          </div>

          <div className="text-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <p className="text-sm font-bold text-mtg-orange tracking-widest opacity-90 whitespace-nowrap">
              SYSTEMS | STRUCTURE | STRATEGY
            </p>
          </div>

          <div className="text-center md:text-right text-slate-500 text-sm space-y-1">
            <a
              href="mailto:michael@milestogoohio.com"
              className="flex items-center justify-center md:justify-end hover:text-mtg-orange transition-colors"
            >
              <span className="mr-2">michael@milestogoohio.com</span>
              <EmailIcon className="w-4 h-4" />
            </a>
            <a
              href="tel:4402909067"
              className="flex items-center justify-center md:justify-end hover:text-mtg-orange transition-colors"
            >
              <span className="mr-2">440.290.9067</span>
              <PhoneIcon className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
