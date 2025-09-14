import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero({ t }) {
  return (
    <section id="home" className="relative flex items-center justify-center text-center overflow-hidden py-32 md:py-40">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="aurora -z-10">
          {/* FIX: Corrected the class names to use two underscores */}
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </div>
      <style>{`
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
      
      <div className="relative z-10 p-4">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/aarohan-logo.png"
          alt="Aarohan 2025 Logo"
          className="w-full max-w-2xl mx-auto mb-6 animate-neon-flicker"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl font-semibold text-cyan-300 tracking-widest uppercase"
        >
          {t.theme}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <Link to="/register" className="px-8 py-3 font-bold text-black bg-cyan-400 rounded-lg shadow-lg hover:bg-white transition-all">
            {t.register}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}