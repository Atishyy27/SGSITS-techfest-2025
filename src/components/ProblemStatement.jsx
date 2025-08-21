// src/components/ProblemStatement.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, UploadCloud } from 'lucide-react';

export default function ProblemStatement({ statement }) {
    const [isOpen, setIsOpen] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-5 text-left flex justify-between items-center"
            >
                <div>
                    <h3 className="text-lg font-bold">{statement.title}</h3>
                    <p className="text-xs font-semibold text-cyan-500 uppercase tracking-wider">{statement.domain}</p>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <span>
                        <ChevronDown size={20} />
                    </span>
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
                            <p className="text-gray-600 dark:text-gray-300 mb-6">{statement.description}</p>

                            <h4 className="font-semibold mb-3">Submit Your Idea</h4>
                            <form action="YOUR_GOOGLE_FORM_ACTION_LINK" method="POST" target="_blank">
                                <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded-lg shadow-inner border-2 border-dashed border-gray-300 dark:border-gray-600 cursor-pointer hover:border-cyan-400">
                                    <UploadCloud size={32} className="mb-2" />
                                    <span className="text-sm leading-normal">{fileName || "Select a file (PDF, DOCX)"}</span>
                                    <input type='file' name="entry.YOUR_FIELD_ID" className="hidden" onChange={handleFileChange} />
                                </label>
                                <button type="submit" className="w-full mt-4 py-3 rounded-lg bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition-colors">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}