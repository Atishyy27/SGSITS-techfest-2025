import React, { useState } from 'react';
import { departmentalEvents } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X } from 'lucide-react';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Departmental Events</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentalEvents.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-cyan-500">{event.name}</h2>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{event.department}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <span><Calendar size={16} /></span> View Schedule
                </button>
                <button className="w-full py-2 px-4 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors">Register</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Schedule Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white">
                {/* FIX: Wrapped the <X> icon in a span */}
                <span><X size={24} /></span>
              </button>
              <h2 className="text-3xl font-bold mb-2">{selectedEvent.name}</h2>
              <h3 className="text-lg font-semibold text-cyan-500 mb-6">Schedule</h3>
              <ul className="space-y-4">
                {selectedEvent.schedule.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="font-bold text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md">{item.time}</span>
                    <span className="text-gray-600 dark:text-gray-300">{item.topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}