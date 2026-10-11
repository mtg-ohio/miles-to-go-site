import React from 'react';
import SectionWrapper from './SectionWrapper';

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper title="Who You're Working With." className="bg-mtg-soft-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-6 rounded-xl border border-mtg-warm-gray/20 shadow-sm">
          <p className="text-[10px] font-black uppercase text-mtg-rust tracking-widest">Owner</p>
          <h3 className="text-2xl font-bold text-mtg-navy mt-1 mb-3">Michael</h3>
          <p className="text-mtg-charcoal opacity-75 text-sm leading-relaxed">
            Twenty years running capital projects in manufacturing, a lot of it translating between the engineers
            and the people on the floor. This is the same job: I translate between Google and you, without making it
            heavier than it needs to be. I&apos;m the one you talk to, and every price and every change goes past me.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-mtg-warm-gray/20 shadow-sm">
          <p className="text-[10px] font-black uppercase text-mtg-rust tracking-widest">AI Navigator</p>
          <h3 className="text-2xl font-bold text-mtg-navy mt-1 mb-3">Ava</h3>
          <p className="text-mtg-charcoal opacity-75 text-sm leading-relaxed">
            Ava does the legwork: checking your listing and your site, keeping watch on them, and drafting posts and
            review replies. She drafts, Michael decides, and anything that speaks for you waits for your okay.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
