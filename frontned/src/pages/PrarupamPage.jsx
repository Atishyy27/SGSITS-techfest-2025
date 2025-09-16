// src/pages/PrarupamPage.jsx

import React from 'react';
import SEO from '../components/SEO';
import { prarupamData } from '../data';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMoneyBillWave, FaUsers, FaTrophy, FaLightbulb } from 'react-icons/fa';

const InfoCard = ({ icon, title, children }) => (
    <div className="border border-slate-700 bg-slate-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
            <div className="text-cyan-400 text-2xl">{icon}</div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="text-slate-300 space-y-2">{children}</div>
    </div>
);

export default function PrarupamPage() {
  return (
    <>
      <SEO title="Prarupam" description={prarupamData.tagline} />
      <div>
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full">
          <img src={prarupamData.heroImage} alt="Prarupam Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              {prarupamData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-cyan-300 max-w-3xl"
            >
              {prarupamData.tagline}
            </motion.p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="text-center mb-12">
            <a href={prarupamData.registrationLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-lg font-bold text-black bg-cyan-400 rounded-lg shadow-lg hover:bg-white transition-all transform hover:scale-105">
                Register for Prarupam
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column: Main Details */}
            <div className="lg:col-span-2 space-y-8">
              <InfoCard icon={<FaLightbulb />} title="Main Themes">
                <ul className="space-y-2 list-disc list-inside text-slate-300">
                  {prarupamData.themes.map(theme => <li key={theme}>{theme}</li>)}
                </ul>
              </InfoCard>

              <InfoCard icon={<FaTrophy />} title="Prizes by TRL">
                <div className="space-y-4">
                  {Object.entries(prarupamData.prizes).map(([trl, prizeList]) => (
                    <div key={trl} className="border border-slate-700 bg-slate-900 p-4 rounded-md">
                      <h3 className="font-bold text-lg mb-2 text-cyan-400">{trl}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {prizeList.map(prize => (
                          <span key={prize.rank}>
                            <strong className="text-white">{prize.rank}:</strong> {prize.amount}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </div>

            {/* Right Column: Sticky Sidebar for Key Info */}
            <div className="lg:sticky top-28 space-y-8">
              <InfoCard icon={<FaCalendarAlt />} title="Key Info">
                <p><strong>Proposal Deadline:</strong> {prarupamData.proposalDeadline}</p>
                <p><strong>Participation Fee:</strong> {prarupamData.participationFee}</p>
              </InfoCard>

              <InfoCard icon={<FaUsers />} title="Who Can Participate?">
                <p>{prarupamData.whoCanParticipate}</p>
              </InfoCard>
              
              <InfoCard icon={<FaTrophy />} title="Winner Benefits">
                 <ul className="space-y-2 list-disc list-inside">
                   {prarupamData.winnerBenefits.map(perk => <li key={perk}>{perk}</li>)}
                 </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}