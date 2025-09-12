import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

// FIX: Accept title and description directly, not as a 'statement' object
export default function ProblemStatement({ title, description, registrationLink }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [isRegisterModalOpen, setRegisterModalOpen] = useState(false); // Commented out for now

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-5 text-left flex justify-between items-center"
        >
          {/* FIX: Use the 'title' prop directly */}
          <h3 className="text-lg font-bold">{title}</h3>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <span><ChevronDown size={20} /></span>
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-5 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
                
                {/* FIX: Changed to a direct link that opens in a new tab */}
                <a 
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center mt-4 py-3 rounded-lg bg-primary-light text-white font-bold hover:opacity-90 transition-opacity">
                  Register Your Team for this Theme
                </a>

                {/* // OLD MODAL BUTTON - Kept for later if needed
                <button 
                  onClick={() => setRegisterModalOpen(true)}
                  className="w-full mt-4 py-3 rounded-lg bg-primary-light text-white font-bold hover:opacity-90 transition-opacity">
                  Register Your Team for this Theme
                </button> 
                */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* // OLD MODAL CODE - Kept for later if needed
      <AnimatePresence>
        {isRegisterModalOpen && (
          <motion.div
            // ... modal code
          >
            // ... modal content
          </motion.div>
        )}
      </AnimatePresence> 
      */}
    </>
  );
}
