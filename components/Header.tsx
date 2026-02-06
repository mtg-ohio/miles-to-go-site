import React from 'react';
import { EmailIcon, PhoneIcon } from './Icon';

const Header: React.FC = () => {
  return (
    <header className="bg-mtg-blue text-white p-4 md:p-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            MILES TO GO, LLC 
            <span className="text-gray-400 font-light mx-2">|</span> 
            <span className="hidden sm:inline">Local Leads System</span>
          </h1>
          <p className="text-xs text-gray-300 mt-1 uppercase tracking-widest font-medium">Systems | Structure | Strategy</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-xs md:text-sm">
          <a href="mailto:michael@milestogoohio.com" className="flex items-center text-gray-300 hover:text-mtg-orange transition-colors group">
            <EmailIcon className="w-4 h-4 mr-2" />
            <span className="group-hover:underline">michael@milestogoohio.com</span>
          </a>
          <a href="tel:4402909067" className="flex items-center text-gray-300 hover:text-mtg-orange transition-colors group">
            <PhoneIcon className="w-4 h-4 mr-2" />
            <span className="group-hover:underline font-bold">440.290.9067</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;