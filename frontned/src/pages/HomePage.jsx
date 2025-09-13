import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import SEO from '../components/SEO.jsx';
import CountdownTimer from '../components/CountdownTimer.jsx';
import OrganizersMarquee from '../components/OrganizersMarquee.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import { translations, eventTracks } from '../data.js';

// FIX: This component has been completely redesigned to match your poster
const TrackCard = ({ track, index }) => {
  return (
    <Link to={track.link || "/"}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: index * 0.1 }}
        className="relative rounded-2xl overflow-hidden group shadow-lg h-64 md:h-80"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${track.image})` }} 
        />
        
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-x-4 bottom-4 bg-black/30 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 border border-white/10">
          <span className="text-5xl font-bold text-white/50">{track.id}</span>
          <h3 className="text-xl font-bold text-white">{track.name}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default function HomePage({ lang }) {
  const t = translations[lang] || translations['en'];

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