// src/pages/ExpoPage.jsx

import React from 'react';
import SEO from '../components/SEO';
import { expoData } from '../data';
import { motion } from 'framer-motion';
import { FaStore, FaHandshake, FaMoneyCheckAlt, FaEnvelope } from 'react-icons/fa';

const FeatureCard = ({ icon, title, content }) => (
    <div className="border border-slate-700 bg-slate-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm h-full">
        <div className="flex items-center gap-4 mb-4">
            <div className="text-cyan-400 text-3xl">{icon}</div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <ul className="space-y-3 list-disc list-inside text-slate-300">
            {content.map(point => <li key={point}>{point}</li>)}
        </ul>
    </div>
);

export default function ExpoPage() {
  return (
    <>
      <SEO title="Expo" description={expoData.about} />
      <div>
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full">
            <img src={expoData.heroImage} alt="Industry Expo Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white"
                >
                    Industry & Startup Expo
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-lg text-cyan-300 max-w-3xl"
                >
                    {expoData.about}
                </motion.p>
            </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="text-center my-12">
                <a href={expoData.registrationLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-lg font-bold text-black bg-cyan-400 rounded-lg shadow-lg hover:bg-white transition-all transform hover:scale-105">
                    Book Your Stall / Register Here
                </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <FeatureCard 
                    icon={<FaHandshake />} 
                    title="Why Exhibit With Us?"
                    content={expoData.whyExhibit}
                />
                
                <div className="border border-slate-700 bg-slate-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <FaMoneyCheckAlt className="text-cyan-400 text-3xl" />
                        <h2 className="text-2xl font-bold text-white">Stall Packages</h2>
                    </div>
                    <ul className="space-y-3 text-lg">
                        {expoData.stallPackages.map(pkg => (
                            <li key={pkg.size} className="flex justify-between border-b border-dashed border-slate-600 py-2">
                                <span className="text-slate-300">{pkg.size}</span>
                                <span className="font-bold text-white">{pkg.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 text-center text-slate-400 flex items-center justify-center gap-2">
                        <FaEnvelope />
                        <span>Contact for booking: </span>
                        <a href={`mailto:${expoData.contactEmail}`} className="text-cyan-400 hover:underline">
                            {expoData.contactEmail}
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}