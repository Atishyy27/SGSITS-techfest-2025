// src/pages/ExpoPage.jsx
import React from 'react';
import SEO from '../components/SEO';
import { expoData, translations } from '../data';
import { motion } from 'framer-motion';

// A reusable card component for features and highlights
const FeatureCard = ({ title, description }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default function ExpoPage() {
  const t = translations['en'];
  return (
    <>
      <SEO title="Expo" description="Explore innovative projects at the SGSITS TechFest Expo." />
      <div className="py-20 px-4 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 className="text-4xl font-bold">Industry & Startup Expo</motion.h1>
            <motion.p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{t.expoDetails}</motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Exhibit With Us?</h2>
              <ul className="space-y-4 list-disc list-inside">
                {expoData.whyExhibit.map(point => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg">
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