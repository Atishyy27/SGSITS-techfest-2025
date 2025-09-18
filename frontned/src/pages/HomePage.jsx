import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Component Imports
import Hero from '../components/Hero.jsx';
import SEO from '../components/SEO.jsx';
import CountdownTimer from '../components/CountdownTimer.jsx';
import OrganizersMarquee from '../components/OrganizersMarquee.jsx';

// Data Imports
import { translations, eventTracks, departmentalEvents } from '../data.js';

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

// Card for the main 6 Event Tracks
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

// Card for the new Departmental Events section
const DepartmentalEventCard = ({ event, t }) => (
    <div className="border border-slate-700 bg-slate-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm text-center flex flex-col justify-between">
        <div>
            <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-lg font-bold text-white">{event.name}</h4>
            <p className="text-sm text-cyan-400 mb-4">{event.department}</p>
        </div>
        <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="mt-auto px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-400 text-black hover:bg-white transition-colors">
            {t.register}
        </a>
    </div>
);

export default function HomePage({ lang }) {
  // Use the 'lang' prop to get the correct translation object
  const t = translations[lang] || translations.en;
  const tracks = eventTracks[lang] || eventTracks.en;

  return (
    <>
      <SEO
        title="Aarohan 2025 - SGSITS TechFest"
        description="The official site for Aarohan, the annual technical festival of SGSITS, Indore."
      />
      
      <Hero t={t} />

      <div className="py-20 px-4 space-y-24">
        <section className="max-w-4xl mx-auto text-center">
          <SectionTitle>{t.about_aarohan_title}</SectionTitle>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-slate-300"
          >
            {t.about_aarohan_desc}
          </motion.p>
        </section>

        <section>
          <CountdownTimer />
        </section>

        <section className="max-w-7xl mx-auto">
          <SectionTitle>{t.explore_events}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <TrackCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto">
          <SectionTitle>{t.more_events}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden group shadow-lg"
            >
              <img src="https://res.cloudinary.com/df4fnnohe/image/upload/v1757747635/track4_lpo0s2.png" alt="Student Research Conference" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent group-hover:bg-purple-900/80 transition-all flex items-center justify-center p-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.conference_card_title}</h3>
                  <p className="text-cyan-200 mb-4">{t.conference_card_subtitle}</p>
                  <Link to="/student-research-conference" className="px-6 py-2 text-sm font-semibold rounded-lg bg-white text-black hover:bg-cyan-200 transition-colors">
                    {t.learn_more}
                  </Link>
                </div>
              </div>
            </motion.div>

            {departmentalEvents.slice(0, 2).map((event, index) => (
                <DepartmentalEventCard key={index} event={event} t={t} />
            ))}
          </div>
        </section>

        <section>
          <OrganizersMarquee />
        </section>
      </div>
    </>
  );
}