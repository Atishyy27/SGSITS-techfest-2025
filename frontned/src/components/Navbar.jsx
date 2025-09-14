import React from 'react';
import { Sun, Moon, Home, Calendar, Image as GalleryIcon, Lightbulb, Users, Rocket } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { translations, generalRegistrationLink } from '../data.js';

export default function Navbar({ theme, setTheme, lang, setLang }) {
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-primary-light font-bold' : 'hover:text-primary-light'}`;
  
  const mobileLinkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 transition-colors text-xs w-1/5 ${isActive ? 'text-primary-light' : 'hover:text-primary-light'}`;

  const t = translations[lang] || translations['en'];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex bg-black/30 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/aarohan-icon.png" alt="Aarohan Icon" className="h-10" />
            <div className="text-sm font-bold tracking-wider text-white">SGSITS TechFest</div>
          </NavLink>

          <nav className="flex gap-6 items-center text-sm font-medium text-gray-300">
            <NavLink to="/" className={linkClass}>{t.home}</NavLink>
            <NavLink to="/prarupam" className={linkClass}>{t.prarupam}</NavLink>
            <NavLink to="/events" className={linkClass}>{t.events}</NavLink>
            <NavLink to="/expo" className={linkClass}>{t.expo}</NavLink>
            <NavLink to="/gallery" className={linkClass}>{t.gallery}</NavLink>
            <NavLink to="/team" className={linkClass}>{t.team}</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-white hover:bg-white/20">
              {theme === 'dark' ? <span><Sun size={18} /></span> : <span><Moon size={18} /></span>}
            </button>
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="border border-white/30 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-white/20"
            >
              {lang === 'en' ? 'हि' : 'EN'}
            </button>
            <a href={generalRegistrationLink} target="_blank" rel="noopener noreferrer" 
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-400 text-black hover:bg-white transition-colors">
              {t.register}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Nav Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-lg z-50 border-t border-white/10">
        <div className="flex justify-around items-center h-16 text-gray-300">
          <NavLink to="/" className={mobileLinkClass}><span><Home size={20}/></span>{t.home}</NavLink>
          <NavLink to="/prarupam" className={mobileLinkClass}><span><Lightbulb size={20}/></span>{t.prarupam}</NavLink>
          <NavLink to="/events" className={mobileLinkClass}><span><Calendar size={20}/></span>{t.events}</NavLink>
          <NavLink to="/expo" className={mobileLinkClass}><span><Rocket size={20}/></span>{t.expo}</NavLink>
          <NavLink to="/gallery" className={mobileLinkClass}><span><GalleryIcon size={20}/></span>{t.gallery}</NavLink>
        </div>
      </nav>
    </>
  );
}