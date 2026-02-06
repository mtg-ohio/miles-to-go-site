import React from 'react';
import { EmailIcon, PhoneIcon } from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto py-8 px-4 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="text-left">
                    <p className="text-2xl font-bold text-mtg-blue">MTG</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold text-mtg-orange tracking-widest">SYSTEMS | STRUCTURE | STRATEGY</p>
                </div>
                <div className="text-right text-gray-600 text-sm space-y-1">
                    <a href="mailto:michael@milestogoohio.com" className="flex items-center justify-end hover:text-mtg-orange transition-colors">
                        <span className="mr-2">michael@milestogoohio.com</span>
                        <EmailIcon className="w-4 h-4" />
                    </a>
                    <a href="tel:4402909067" className="flex items-center justify-end hover:text-mtg-orange transition-colors">
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