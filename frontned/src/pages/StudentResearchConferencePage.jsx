import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFileAlt, FaUsers, FaClipboardList, FaDownload } from 'react-icons/fa';
import SEO from '../components/SEO';
import { studentResearchConferenceData } from '../data'; // We will create this data object next
import BrochureViewer from '../components/BrochureViewer';

// Reusable card component for styling
const InfoCard = ({ icon, title, children }) => (
    <div className="border border-slate-700 bg-slate-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm h-full">
        <div className="flex items-center gap-4 mb-4">
            <div className="text-cyan-400 text-3xl">{icon}</div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="text-slate-300 space-y-3">{children}</div>
    </div>
);

export default function StudentResearchConferencePage({ lang }) {
  // Use the 'lang' prop to get the correct translation
  const data = studentResearchConferenceData[lang] || studentResearchConferenceData.en;

  return (
    <>
      <SEO title={data.title} description="Join the Student Research Conference at Aarohan 2025." />
      <div>
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white"
                >
                    {data.title}
                </motion.h1>
            </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-12">
                <a href={data.registrationLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-lg font-bold text-black bg-cyan-400 rounded-lg shadow-lg hover:bg-white transition-all transform hover:scale-105">
                    Register for Conference
                </a>
                <a href={data.templateLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-lg font-bold text-white bg-transparent border-2 border-cyan-400 rounded-lg shadow-lg hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105 inline-flex items-center gap-2">
                    <FaDownload/> Download Template
                </a>
                <BrochureViewer fileUrl={data.brochureUrl}>
                    <button className="px-8 py-3 text-lg font-bold text-white bg-transparent border-2 border-cyan-400 rounded-lg shadow-lg hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105">
                        View Brochure
                    </button>
                </BrochureViewer>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    <InfoCard icon={<FaClipboardList />} title={data.guidelines.title}>
                        <ul className="space-y-4">
                            {data.guidelines.points.map(point => (
                                <li key={point.title}>
                                    <strong className="text-cyan-400">{point.title}:</strong> {point.content}
                                </li>
                            ))}
                        </ul>
                    </InfoCard>
                </div>
                
                {/* Right Column */}
                <div className="lg:sticky top-28 space-y-8">
                    <InfoCard icon={<FaCalendarAlt />} title={data.importantDates.title}>
                        <ul className="space-y-2">
                            {data.importantDates.dates.map(item => (
                                <li key={item.event} className="flex justify-between border-b border-dashed border-slate-600 py-1">
                                    <span>{item.event}</span>
                                    <span className="font-bold text-white">{item.date}</span>
                                </li>
                            ))}
                        </ul>
                    </InfoCard>
                    <InfoCard icon={<FaUsers />} title={data.presentation.title}>
                       <ul className="space-y-3">
                            {data.presentation.points.map(point => (
                                <li key={point.title}>
                                    <strong className="text-cyan-400">{point.title}:</strong> {point.content}
                                </li>
                            ))}
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}