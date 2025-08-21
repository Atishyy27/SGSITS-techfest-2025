import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // Import karo

// Card Component
const EventCard = ({ title, desc }) => (
  <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
    <motion.div
      variants={{
        offscreen: { y: 50, opacity: 0 },
        onscreen: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
      }}
      className="h-full bg-white/5 dark:bg-black/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col"
    >
      <h3 className="font-bold text-xl mb-3 text-white">{title}</h3>
      <p className="text-sm text-gray-300 flex-grow">{desc}</p>
      <button className="mt-6 w-full text-sm font-semibold py-2 rounded-lg bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/30 transition-colors">
        Register Now
      </button>
    </motion.div>
  </Tilt>
);

// Main Events Component
export default function Events({ t }) {
  const containerVariants = {
    offscreen: {},
    onscreen: { transition: { staggerChildren: 0.1 } }
  };

  const techfestEvents = [ { title: t.event_1_title, desc: t.event_1_desc }, { title: t.event_2_title, desc: t.event_2_desc }];
  const ideathonEvents = [ { title: t.event_3_title, desc: t.event_3_desc }, { title: t.event_4_title, desc: t.event_4_desc }];
  
  return (
    <section id="events" className="py-20 bg-gray-900 bg-grid-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Techfest Section --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Techfest</h2>
          <motion.div
            variants={containerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {techfestEvents.map((event, i) => <EventCard key={i} {...event} />)}
          </motion.div>
        </div>
        
        {/* --- Ideathon Section --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Ideathon</h2>
          <motion.div
            variants={containerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {ideathonEvents.map((event, i) => <EventCard key={i} {...event} />)}
          </motion.div>
        </div>

        {/* --- Departmental Events --- */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Departmental Events</h2>
          <div className="text-center text-gray-400">
            <p>More events coming soon...</p>
            <a href="#" className="text-cyan-400 hover:underline">View Full Schedule</a>
          </div>
        </div>

      </div>
    </section>
  );
}