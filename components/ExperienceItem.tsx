
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  item: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ item }) => {
  return (
    <div className="py-12 first:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        {/* Left Side: Basic Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">{item.role}</h3>
          <div className="space-y-1">
            <p className="text-zinc-500 text-sm">{item.company} ↗</p>
            <p className="text-zinc-500 text-sm">{item.period}</p>
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
                     <span className="shrink-0 mt-1.5">•</span>
                     <span>
                       <span className="font-bold">{title}:</span> {content}
                     </span>
                   </li>
                 );
               }
               return (
                 <li key={idx} className="flex gap-4 items-start text-sm leading-relaxed">
                   <span className="shrink-0 mt-1.5">•</span>
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
