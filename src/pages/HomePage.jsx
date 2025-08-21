import React from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import CountdownTimer from '../components/CountdownTimer';
import Sponsors from '../components/Sponsers';
import { translations } from '../data';
import CustomCursor from '../components/CustomCursor';

export default function HomePage() {
  const t = translations['en']; 

  return (
    <>
      <CustomCursor />
      <SEO 
        title="Home" 
        description="SRIJAN 2025: The annual technical festival of SGSITS, Indore. Explore a universe of innovation, competition, and learning." 
      />
      <Hero t={t} />

      <div className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <CountdownTimer />
      </div>

      <section id="about" className="py-20 bg-white dark:bg-black/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.about} {t.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.about_srijan}
          </p>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-gray-900/50">
        <Sponsors />
      </div>
    </>
  );
}