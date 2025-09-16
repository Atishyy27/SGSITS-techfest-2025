import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Hero from '../components/Hero.jsx';
import SEO from '../components/SEO.jsx';
import CountdownTimer from '../components/CountdownTimer.jsx';
import OrganizersMarquee from '../components/OrganizersMarquee.jsx';

// Import the dynamic, language-aware data
import { eventTracks } from '../data.js';

// Reusable Section Title Component
const SectionTitle = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
  >
    {children}
  </motion.h2>
);

// Card for Event Tracks
const TrackCard = ({ track, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="relative rounded-lg overflow-hidden group shadow-lg"
  >
    <img src={track.image} alt={track.name} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/80 transition-all flex items-end p-6">
      <h3 className="text-2xl font-bold text-white transform transition-transform duration-300 group-hover:-translate-y-2">
        {track.name}
      </h3>
    </div>
    <Link to={track.link} className="absolute inset-0" aria-label={`View ${track.name}`} />
  </motion.div>
);

export default function HomePage() {
  // Use the hook to get translations
  const { t, i18n } = useTranslation();

  // Get the correct language data
  const tracks = eventTracks[i18n.language] || eventTracks.en;

  return (
    <>
      <SEO
        title="Aarohan 2025 - SGSITS TechFest"
        description="The official site for Aarohan, the annual technical festival of SGSITS, Indore."
      />
      
      {/* Pass the 't' function to Hero */}
      <Hero t={t} />

      <div className="py-20 px-4 space-y-24">
        {/* About Section */}
        <section className="max-w-4xl mx-auto text-center">
          <SectionTitle>{t('about_aarohan_title')}</SectionTitle>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-lg text-slate-300"
          >
            {t('about_aarohan_desc')}
          </motion.p>
        </section>

        {/* Countdown Timer Section */}
        <section>
          <CountdownTimer />
        </section>

        {/* Event Tracks Section */}
        <section className="max-w-7xl mx-auto">
          <SectionTitle>{t('explore_events')}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <TrackCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>

        {/* Organizers Marquee Section */}
        <section>
          <OrganizersMarquee />
        </section>
      </div>
    </>
  );
}