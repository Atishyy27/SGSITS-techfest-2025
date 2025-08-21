import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText'; // Assuming AnimatedText is in the same folder

export default function Hero({ t }) {
  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-[#0B0014] text-center">
      {/* Animated Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="aurora -z-10">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </div>

      <style>{`
        /* ... Aurora styles remain the same ... */
        .aurora { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
        .aurora__item { position: absolute; border-radius: 50%; width: 50vw; height: 50vw; filter: blur(80px); mix-blend-mode: screen; }
        .aurora__item:nth-of-type(1) { top: -25vw; left: -25vw; background: #00aaff; animation: aurora-1 10s ease-in-out infinite alternate; }
        .aurora__item:nth-of-type(2) { top: -25vw; right: -25vw; background: #ff00ff; animation: aurora-2 12s ease-in-out infinite alternate; }
        .aurora__item:nth-of-type(3) { bottom: -25vw; left: -25vw; background: #00ffc3; animation: aurora-3 8s ease-in-out infinite alternate; }
        .aurora__item:nth-of-type(4) { bottom: -25vw; right: -25vw; background: #ff4d00; animation: aurora-4 15s ease-in-out infinite alternate; }
        @keyframes aurora-1 { to { transform: translateY(20vw); } }
        @keyframes aurora-2 { to { transform: translateX(-20vw); } }
        @keyframes aurora-3 { to { transform: translateX(20vw); } }
        @keyframes aurora-4 { to { transform: translateY(-20vw); } }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
        <AnimatedText
          text={t.title}
          el="h1"
          className="text-4xl md:text-7xl font-extrabold tracking-tighter justify-center bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          {t.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
        >
          {t.heroDesc}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex gap-4 justify-center"
        >
          {/* FIX: Changed the secondary button's background for light mode */}
          <a
            href="events"
            className="px-6 py-3 font-semibold rounded-lg shadow-lg transition-all bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:bg-gray-800 dark:border-transparent dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {t.exploreEvents}
          </a>
        </motion.div>
      </div>
    </section>
  );
}