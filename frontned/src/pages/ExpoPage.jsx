import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { expoData } from '../data';
import { motion } from 'framer-motion';
import { FaHandshake, FaMoneyCheckAlt, FaEnvelope } from 'react-icons/fa';
import BrochureViewer from '../components/BrochureViewer';

const FeatureCard = ({ icon, title, content }) => (
    <div className="border border-slate-700 bg-slate-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm h-full">
        <div className="flex items-center gap-4 mb-4">
            <div className="text-cyan-400 text-3xl">{icon}</div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <ul className="space-y-3 list-disc list-inside text-slate-300">{content.map(point => <li key={point}>{point}</li>)}</ul>
    </div>
);

export default function ExpoPage() {
  const { t, i18n } = useTranslation();
  const data = expoData[i18n.language] || expoData.en;

  return (
    <>
      <SEO title={t('nav_expo')} description={data.about} />
      <div>
        <div className="relative h-64 md:h-80 w-full">
            <img src={data.heroImage} alt="Industry Expo Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-4">
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold text-white">{t('expo_title', 'Industry & Startup Expo')}</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-lg text-cyan-300 max-w-3xl">{data.about}</motion.p>
            </div>
        </div>
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-12">
                <a href={data.registrationLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-lg font-bold text-black bg-cyan-400 rounded-lg shadow-lg hover:bg-white transition-all transform hover:scale-105">{t('register_expo')}</a>
                <BrochureViewer fileUrl={data.brochureUrl}>
                    <button className="px-10 py-4 text-lg font-bold text-white bg-transparent border-2 border-cyan-400 rounded-lg shadow-lg hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105">{t('view_brochure', 'View Brochure')}</button>
                </BrochureViewer>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <FeatureCard icon={<FaHandshake />} title={data.whyExhibit_title} content={data.whyExhibit}/>
                <div className="border border-slate-700 bg-slate-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <FaMoneyCheckAlt className="text-cyan-400 text-3xl" />
                        <h2 className="text-2xl font-bold text-white">{data.stallPackages_title}</h2>
                    </div>
                    <ul className="space-y-3 text-lg">{data.stallPackages.map(pkg => (<li key={pkg.size} className="flex justify-between border-b border-dashed border-slate-600 py-2"><span className="text-slate-300">{pkg.size}</span><span className="font-bold text-white">{pkg.price}</span></li>))}</ul>
                    <div className="mt-6 text-center text-slate-400 flex items-center justify-center gap-2">
                        <FaEnvelope />
                        <span>{data.contact_label}</span>
                        <a href={`mailto:${data.contactEmail}`} className="text-cyan-400 hover:underline">{data.contactEmail}</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}