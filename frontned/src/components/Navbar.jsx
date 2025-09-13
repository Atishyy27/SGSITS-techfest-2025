// src/components/Navbar.jsx

import React from 'react';
import { Sun, Moon, Home, Calendar, Lightbulb, Users, Rocket } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { translations, generalRegistrationLink } from '../data.js';

export default function Navbar({ theme, setTheme, lang, setLang }) {
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-primary-light' : 'hover:text-primary-light'}`;

  const mobileLinkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 transition-colors text-xs w-1/5 ${isActive ? 'text-primary-light' : 'hover:text-primary-light'}`;

  const t = translations[lang] || translations['en'];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex bg-white/70 dark:bg-dark-bg/70 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-white font-bold text-lg">T</div>
            <div className="text-sm font-bold tracking-wider">SGSITS TechFest</div>
          </NavLink>

          <nav className="flex gap-6 items-center text-sm font-medium">
            <NavLink to="/" className={linkClass}>{t.home}</NavLink>
            <NavLink to="/prarupam" className={linkClass}>{t.prarupam}</NavLink>
            <NavLink to="/events" className={linkClass}>{t.events}</NavLink>
            <NavLink to="/expo" className={linkClass}>{t.expo}</NavLink>
            <NavLink to="/gallery" className={linkClass}>{t.gallery}</NavLink>
            <NavLink to="/team" className={linkClass}>{t.team}</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {theme === 'dark' ? <span><Sun size={18} /></span> : <span><Moon size={18} /></span>}
            </button>
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {lang === 'en' ? 'हि' : 'EN'}
            </button>
            
            {/* FIX: Changed from <Link> to an <a> tag that opens the Google Form in a new tab */}
            <a href={generalRegistrationLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary-light text-white hover:opacity-90 transition-opacity">
              {t.register}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden ...">
        {/* ... */}
      </nav>
    </>
  );
}