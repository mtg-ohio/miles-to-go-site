import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CheckCircleIcon } from './Icon';

const ONE_TIME = [
  { name: 'Google Profile Tune-Up', price: '$350', text: 'Your listing really yours: right categories and services, real hours, good photos, your booking link.' },
  { name: 'Website Tune-Up', price: '$350', text: 'The site you have, made fast, phone-friendly and easy for Google to understand.' },
  { name: 'Both Together', price: '$600', text: 'Your listing and your website the same week, so they tell the same story.', best: true },
  { name: 'Move Your Website', price: 'from $600', text: 'A cleaner, faster setup that you own.' },
  { name: 'One-Page Website', price: '$950', text: 'One good page, built to be found. Google listing tune-up included.' },
  { name: 'Small Website', price: 'from $2,500', text: 'About five pages: home, services, about, reviews, contact.' },
];

const MONTHLY = [
  {
    name: 'Watch',
    price: '$79',
    items: ['We watch your site and listing day and night*', 'Small fixes, handled', 'One page a month: is the phone ringing?'],
  },
  {
    name: 'Care',
    price: '$249',
    best: true,
    items: ['Everything in Watch', 'Up to 4 Google posts a month', 'Review replies, you okay each one', 'Hours right through holidays'],
  },
  {
    name: 'Grow',
    price: 'from $549',
    items: ['Everything in Care', 'A new or better page each month', 'A sit-down every few months', 'Simple AI helpers, in your accounts'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <SectionWrapper title="What It Costs." className="bg-white">
      <div className="max-w-4xl mx-auto space-y-10">
        <p className="text-base md:text-lg text-mtg-charcoal opacity-85 leading-relaxed text-center max-w-2xl mx-auto">
          Fix it <strong>once</strong>, then keep it <strong>working</strong>. You&apos;ll know the price before we start.
        </p>

        {/* STAGE 1: FIX IT ONCE */}
        <div className="relative">
          <div className="absolute -top-3 left-6 bg-mtg-blue text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-lg z-20">Stage 1: Fix It Once</div>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-mtg-warm-gray/20 shadow-sm relative">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {ONE_TIME.map((s) => (
                <div key={s.name} className={`p-4 rounded-xl ${s.best ? 'bg-mtg-rust/5 border border-mtg-rust' : ''}`}>
                  <p className="text-[10px] font-black text-mtg-rust uppercase tracking-[0.2em] mb-1">{s.best ? 'Best Value' : 'One-Time'}</p>
                  <h4 className="text-lg font-bold text-mtg-navy">{s.name}</h4>
                  <p className="text-2xl font-black text-mtg-navy my-1">{s.price}</p>
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
                      {p.price}<span className="text-sm font-bold text-mtg-warm-gray">/mo</span>
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
                <p className="text-xs text-mtg-charcoal opacity-60">
                  *Google listings join once Google approves us. Until then, we check them by hand.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-mtg-charcoal opacity-75 text-center max-w-2xl mx-auto">
          It&apos;s all yours: your domain, your accounts, your logins. If you leave, everything stays with you.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
