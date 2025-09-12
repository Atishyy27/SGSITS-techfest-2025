import React from 'react';
import SEO from '../components/SEO';
import { prarupamData } from '../data';
import { motion } from 'framer-motion';

export default function PrarupamPage() {
  return (
    <>
      <SEO title="Prarupam" description={prarupamData.tagline} />
      <div className="py-20 px-4 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 className="text-4xl font-bold text-primary-dark">{prarupamData.title}</motion.h1>
            <motion.p className="mt-4 text-lg text-gray-500">{prarupamData.tagline}</motion.p>
            <motion.p className="mt-2 text-md text-gray-400">{prarupamData.description}</motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Main Themes</h2>
                <ul className="space-y-2 list-disc list-inside bg-white dark:bg-slate-800 p-6 rounded-lg">
                  {prarupamData.themes.map(theme => <li key={theme}>{theme}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Prizes by TRL</h2>
                <div className="space-y-4">
                  {Object.entries(prarupamData.prizes).map(([trl, prizeList]) => (
                    <div key={trl} className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{trl}</h3>
                      <div className="flex justify-around">
                        {prizeList.map(prize => <span key={prize.rank}><strong>{prize.rank}:</strong> {prize.amount}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Key Info</h2>
                <p><strong>Deadline:</strong> {prarupamData.proposalDeadline}</p>
                <p><strong>Fee:</strong> {prarupamData.participationFee}</p>
                <p className="mt-4"><strong>Who can Participate?</strong><br/>{prarupamData.whoCanParticipate}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Winner Benefits</h2>
                <ul className="space-y-2 list-disc list-inside">
                  {prarupamData.winnerBenefits.map(perk => <li key={perk}>{perk}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}