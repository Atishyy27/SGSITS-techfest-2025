import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import SEO from '../components/SEO.jsx';
import CountdownTimer from '../components/CountdownTimer.jsx';
import OrganizersMarquee from '../components/OrganizersMarquee.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import { translations, eventTracks } from '../data.js';

const TrackCard = ({ track, index }) => (
  // FIX: Wrapped the entire card in a Link to make it all clickable
  <Link to={track.link || "/"}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-lg overflow-hidden group shadow-lg h-full"
    >
      <img src={track.image} alt={track.name} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/80 transition-all flex items-end p-6">
        <h3 className="text-2xl font-bold text-white transform transition-transform duration-300 group-hover:-translate-y-2">{track.name}</h3>
      </div>
    </motion.div>
  </Link>
);

export default function HomePage({ lang }) { // FIX: Accept lang as a prop
  const t = translations[lang] || translations['en']; // Use the lang prop for translations

  return (
    <>
      <CustomCursor />
      <SEO title="Home" description={t.about_aarohan} />
      <Hero t={t} />
      <div className="py-16 bg-black/20"><CountdownTimer /></div>
      
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">About Aarohan</h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
          >
            {t.about_aarohan}
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTracks.map((track, index) => <TrackCard key={index} track={track} index={index}/>)}
        </div>
      </section>

      <OrganizersMarquee />
    </>
  );
}