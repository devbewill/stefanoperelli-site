
import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <div className="flex justify-between items-baseline mb-24 border-b border-black/5 dark:border-white/5 pb-8">
      <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tightest">
        {title}
      </h2>
      <span className="font-mono text-[10px] font-black uppercase tracking-widest opacity-30">
        / {number}
      </span>
    </div>
  );
};
