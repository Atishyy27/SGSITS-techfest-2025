import React from 'react';
import { sponsors } from '../data'; // Data hum data.js se lenge

export default function Sponsors() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-12 md:h-16 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}