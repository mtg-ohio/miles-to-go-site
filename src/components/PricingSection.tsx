import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CheckCircleIcon } from './Icon';

const ONE_TIME = [
  { name: 'Google Profile Tune-Up', price: '$350', text: 'Your listing claimed, current and complete: the right categories and services, real hours, good photos and your booking link or contact information.' },
  { name: 'Website Tune-Up', price: '$350', text: 'The site you already have loads faster, reads well on a phone and makes sense to Google and AI assistants.' },
  { name: 'Both Tune-Ups', price: '$600', was: '$700', text: 'Your listing and your website done together, so customers hear one story.', best: true },
  { name: 'Move Your Existing Website', price: 'from $600', text: 'Your same site, moved off Wix, Squarespace or GoDaddy to a faster home you own outright.' },
  { name: 'Your New Landing Page', price: '$950', text: 'One strong page, built to be found, with the Google Profile Tune-Up included.' },
  { name: 'Your New Website', price: 'from $2,500', text: 'Room for your whole story: home, services, about, reviews and contact.' },
];

const MONTHLY = [
  {
    name: 'Watch',
    price: '$79',
    items: ['Your site and listing, checked day and night', 'Small fixes handled for you, with your permission', 'A one-page monthly report: is the phone ringing?'],
  },
  {
    name: 'Care',
    price: '$249',
    best: true,
    items: ['Everything in Watch', 'Up to four fresh Google posts a month', 'Review replies written for you; you okay every one', 'Holiday hours kept right'],
  },
  {
    name: 'Grow',
    price: 'from $549',
    items: ['Everything in Care', 'A new page every month, built around your local season or your next big event', "A sit-down every quarter: How are you looking on Google and to AI? What's next?"],
  },
];

const Price = ({ value }: { value: string }) =>
  value.startsWith('from ') ? (
    <><span className="text-sm font-bold text-mtg-warm-gray mr-1.5">from</span>{value.slice(5)}</>
  ) : (
    <>{value}</>
  );

const PricingSection: React.FC = () => {
  return (
    <SectionWrapper title="What It Costs" className="bg-white">
      <div className="max-w-4xl mx-auto space-y-10">
        <p className="text-base md:text-lg text-center max-w-2xl mx-auto">
          <span className="inline-flex flex-wrap justify-center items-center gap-3 md:gap-4"><span className="bg-mtg-blue px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest text-white whitespace-nowrap shadow-lg">Fix it once</span><span className="self-center text-mtg-warm-gray text-xl font-light leading-none" aria-hidden="true">+</span><span className="bg-mtg-rust px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest text-white whitespace-nowrap shadow-lg">Keep it working</span></span>
        </p>

        {/* STAGE 1: FIX IT ONCE */}
        <div className="relative">
          <div className="absolute -top-3 left-6 bg-mtg-blue text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-lg z-20">Stage 1: Fix It Once</div>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-mtg-warm-gray/20 shadow-sm relative">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {ONE_TIME.map((s) => (
                <div key={s.name} className={`p-4 rounded-xl ${s.best ? 'bg-mtg-rust/5 border border-mtg-rust' : ''}`}>
                  <p className="text-[10px] font-black text-mtg-rust uppercase tracking-[0.2em] mb-1">{s.best ? 'Save $100' : 'One-Time'}</p>
                  <h4 className="text-lg font-bold text-mtg-navy">{s.name}</h4>
                  <p className="text-2xl font-black text-mtg-navy my-1">{s.was && <s className="text-lg font-bold text-mtg-warm-gray mr-2">{s.was}</s>}<Price value={s.price} /></p>
                  <p className="text-mtg-charcoal opacity-70 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition Arrow */}
        <div className="hidden sm:flex justify-center -my-6 relative z-30">
          <div className="bg-mtg-rust text-white p-2.5 rounded-full shadow-xl border-4 border-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* STAGE 2: KEEP IT WORKING */}
        <div className="relative pt-2">
          <div className="absolute -top-1 left-6 bg-mtg-rust text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-lg z-20">Stage 2: Keep It Working</div>
          <div className="bg-white p-1 pb-1 rounded-2xl border-2 border-mtg-rust/30 shadow-2xl overflow-hidden ring-4 ring-mtg-rust/5">
            <div className="bg-white p-6 md:p-8 rounded-[14px]">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {MONTHLY.map((p) => (
                  <div key={p.name} className={`p-5 rounded-xl border ${p.best ? 'border-mtg-rust bg-mtg-rust/5' : 'border-mtg-warm-gray/15 bg-mtg-soft-white'}`}>
                    <p className="text-[10px] font-black text-mtg-rust uppercase tracking-[0.25em]">{p.best ? 'Best Value' : 'Monthly'}</p>
                    <h3 className="text-2xl font-black text-mtg-navy">{p.name}</h3>
                    <p className="text-3xl font-black text-mtg-navy tracking-tighter my-2">
                      <Price value={p.price} /><span className="text-sm font-bold text-mtg-warm-gray">/mo</span>
                    </p>
                    <ul className="space-y-2">
                      {p.items.map((i) => (
                        <li key={i} className="flex items-start text-sm font-medium text-mtg-charcoal opacity-90">
                          <CheckCircleIcon className="w-4 h-4 mr-2.5 mt-0.5 text-mtg-rust shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-mtg-warm-gray/20 text-center space-y-1">
                <p className="text-[10px] text-mtg-warm-gray font-black uppercase tracking-[0.15em]">
                  Billed monthly. No contract. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-mtg-charcoal opacity-75 text-center max-w-2xl mx-auto">
          Everything we set up is yours: your domain, your accounts, your logins. If we part ways, it all stays with you.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
