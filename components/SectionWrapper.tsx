import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 sm:py-20 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <div className="w-20 h-1 bg-mtg-orange mx-auto mb-10"></div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;