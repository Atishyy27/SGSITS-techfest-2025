import React from 'react';
import { organizers } from '../data.js';

export default function OrganizersMarquee() {
  return (
    <div className="py-12 bg-light-bg dark:bg-dark-bg">
       <h2 className="text-3xl font-bold text-center mb-10">Jointly Organised By</h2>
      
       {/* FIX: Added responsive max-width and centered it. Updated the mask-image for the spotlight effect. */}
      <div 
        className="relative w-full max-w-5xl mx-auto overflow-hidden 
                   [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]"
      >
        <div className="flex w-max animate-marquee">
          {/* Render the list twice for a seamless loop */}
          {[...organizers, ...organizers].map((org, index) => (
            <div key={index} className="px-8 flex-shrink-0">
              <img src={org.logo} alt={org.name} className="h-16 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
