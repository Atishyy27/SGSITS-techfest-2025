import React from 'react';
import SEO from '../components/SEO';
import { expoData } from '../data';
import { motion } from 'framer-motion';

export default function ExpoPage() {
  return (
    <>
      <SEO title="Expo" description={expoData.about} />
      <div className="py-20 px-4 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 className="text-4xl font-bold">Industry & Startup Expo</motion.h1>
            <motion.p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{expoData.about}</motion.p>
            <a href={expoData.registrationLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block px-6 py-3 font-semibold rounded-lg bg-primary-light text-white hover:opacity-90 transition-opacity">
              Book Your Stall / Register Here
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Why Exhibit With Us?</h2>
              <ul className="space-y-4 list-disc list-inside">
                {expoData.whyExhibit.map(point => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Stall Packages</h2>
              <ul className="space-y-2">
                {expoData.stallPackages.map(pkg => (
                  <li key={pkg.size} className="flex justify-between">
                    <span>{pkg.size}</span>
                    <span className="font-bold">{pkg.price}</span>
                  </li>
                ))}
              </ul>
               <p className="text-sm mt-4 text-gray-400">Contact for booking: <a href={`mailto:${expoData.contactEmail}`} className="text-primary-light hover:underline">{expoData.contactEmail}</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}