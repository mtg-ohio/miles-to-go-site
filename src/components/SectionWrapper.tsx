import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children, className = '', id }) => {
  return (
    <section id={id} className={`py-12 sm:py-14 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-mtg-near-black">{title}</h2>
        <div className="w-16 h-1 bg-mtg-rust mx-auto mb-6"></div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;