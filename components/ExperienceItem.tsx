import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  item: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ item }) => {
  return (
    <div className="py-12 first:pt-0 group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        {/* Left Side: Basic Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{item.role}</h3>
          <div className="space-y-1">
            <p className="text-zinc-500 text-sm font-medium">{item.company} ↗</p>
            <p className="text-accent text-sm font-mono tracking-tight">{item.period}</p>
            <p className="text-zinc-500 text-sm italic">{item.description}</p>
          </div>
        </div>

        {/* Right Side: Details/Bullets */}
        <div>
          <ul className="space-y-6">
            {item.details.map((detail, idx) => {
               const hasColon = detail.includes(':');
               if (hasColon) {
                 const [title, content] = detail.split(':');
                 return (
                   <li key={idx} className="flex gap-4 items-start text-sm leading-relaxed">
                     <span className="shrink-0 mt-1.5 text-teal-500">•</span>
                     <span>
                       <span className="font-bold text-zinc-900 dark:text-zinc-100">{title}:</span> <span className="text-zinc-600 dark:text-zinc-400">{content}</span>
                     </span>
                   </li>
                 );
               }
               return (
                 <li key={idx} className="flex gap-4 items-start text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                   <span className="shrink-0 mt-1.5 text-teal-500">•</span>
                   <span>{detail}</span>
                 </li>
               );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};