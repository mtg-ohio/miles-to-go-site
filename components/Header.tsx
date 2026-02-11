import React, { useEffect, useRef, useState } from 'react';
import { EmailIcon, PhoneIcon } from './Icon';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastYRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)'); // md and up

    const onScroll = () => {
      if (!mq.matches) return;

      const y = window.scrollY || 0;
      const lastY = lastYRef.current;

      // ignore tiny jitter
      if (Math.abs(y - lastY) < 6) return;

      // show when near top
      if (y < 40) {
        setIsVisible(true);
      } else {
        // scrolling down -> hide, scrolling up -> show
        setIsVisible(y < lastY);
      }

      lastYRef.current = y;
    };

    // init
    lastYRef.current = window.scrollY || 0;

    window.addEventListener('scroll', onScroll, { passive: true });

    // if user resizes from mobile -> desktop, force visible
    const onResize = () => setIsVisible(true);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header
      className={[
        'bg-mtg-blue text-white p-4 md:p-6 shadow-md z-50',
        // mobile: not sticky; md+: sticky
        'md:sticky md:top-0',
        // best-of-both-worlds animation md+
        'transition-transform duration-300 ease-out',
        isVisible ? 'md:translate-y-0' : 'md:-translate-y-full',
      ].join(' ')}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            MILES TO GO, LLC
            <span className="text-slate-400 font-light mx-2">|</span>
            <span className="hidden sm:inline">Local Leads System</span>
          </h1>
          <p className="text-xs text-slate-300 mt-1 uppercase tracking-widest font-medium">
            Systems | Structure | Strategy
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-xs md:text-sm">
          <a
            href="mailto:michael@milestogoohio.com"
            className="flex items-center text-slate-300 hover:text-mtg-orange transition-colors group"
          >
            <EmailIcon className="w-4 h-4 mr-2" />
            <span className="group-hover:underline">michael@milestogoohio.com</span>
          </a>
          <a
            href="tel:4402909067"
            className="flex items-center text-slate-300 hover:text-mtg-orange transition-colors group"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            <span className="group-hover:underline font-bold">440.290.9067</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
