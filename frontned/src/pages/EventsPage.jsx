// src/pages/EventsPage.jsx
import React from 'react';
import SEO from '../components/SEO';
import { departmentalEvents } from '../data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventCard = ({ event, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden group h-full flex flex-col"
  >
    <div className="overflow-hidden h-56">
      <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="font-bold text-primary-light mb-1">{event.date}</p>
      <h2 className="text-2xl font-bold">{event.name}</h2>
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{event.department}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{event.description}</p>
      {/* <Link to="/register" className="w-full mt-auto block text-center py-2 px-4 rounded-lg bg-primary-light text-white hover:opacity-90 transition-opacity">
        Register
      </Link> */}
      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="w-full mt-auto block text-center py-2 px-4 rounded-lg bg-primary-light text-white hover:opacity-90 transition-opacity">
        Register
      </a>
    </div>
  </motion.div>
);

export default function EventsPage() {
  return (
    <>
      <SEO title="Events" description="Explore the complete catalogue of events at SGSITS TechFest." />
      <div className="py-20 px-4 bg-light-bg dark:bg-dark-bg min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Departmental Events</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {departmentalEvents.map((event, index) => <EventCard key={index} event={event} index={index}/>)}
          </div>
        </div>
      </div>
    </>
  );
}