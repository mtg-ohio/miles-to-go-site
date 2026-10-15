import React, { useEffect, useRef, useState } from 'react';
import { EmailIcon, PhoneIcon } from './Icon';

// The Horizon high mark, light version for the navy header (master: templates/brand, 2026-10-13).
const HorizonMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="2 10 98 74" className={className} role="img" aria-label="Miles To Go">
    <g fill="#e8edf4">
      <polygon points="3,16.4 79,32.34 79,33.94 3,23.6" />
      <polygon points="3,43.4 79,34 79,35.6 3,50.6" />
      <polygon points="3,70.4 79,35.67 79,37.27 3,77.6" />
      <rect x="5.94" y="11.77" width="10.11" height="69.69" rx="1.82" />
      <rect x="38.67" y="20.57" width="6.67" height="41.37" rx="1.2" />
      <rect x="58.72" y="25.97" width="4.56" height="24.01" rx="0.82" />
      <rect x="71.39" y="29.38" width="3.22" height="13.05" rx="0.58" />
    </g>
    <line x1="66" y1="34" x2="99" y2="34" stroke="#e8edf4" strokeWidth="1.1" strokeLinecap="round" opacity=".45" />
    <circle cx="88" cy="28.5" r="5.5" fill="#ec8248" />
  </svg>
);

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
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <HorizonMark className="hidden sm:block w-16 h-12 shrink-0" />
          <div className="text-center sm:text-left">
          <p className="text-lg md:text-xl font-semibold tracking-wide">
            <span className="inline-flex items-center gap-2 align-middle">
              <HorizonMark className="sm:hidden w-8 h-6 shrink-0" />
              MILES TO GO
            </span>
            <span className="hidden sm:inline text-mtg-warm-gray font-light mx-2">|</span>
            <span className="block sm:inline text-base sm:text-[length:inherit] font-light sm:font-semibold">Local Customers Delivered</span>
          </p>
          <p className="text-xs text-mtg-soft-white opacity-80 mt-1 uppercase tracking-widest font-medium">
            Get Found. Get Chosen. Get Customers.
          </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-xs md:text-sm">
          <a
            href="mailto:michael@milestogoohio.com"
            className="flex items-center text-mtg-soft-white opacity-80 hover:text-mtg-rust transition-colors group"
          >
            <EmailIcon className="w-4 h-4 mr-2" />
            <span className="group-hover:underline">michael@milestogoohio.com</span>
          </a>
          <a
            href="tel:4402909067"
            className="flex items-center text-mtg-soft-white opacity-80 hover:text-mtg-rust transition-colors group"
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
