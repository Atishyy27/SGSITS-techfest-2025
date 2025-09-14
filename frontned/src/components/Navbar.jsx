import React from 'react';
import { Sun, Moon, Home, Calendar, Image as GalleryIcon, Lightbulb, Users, Rocket } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { translations } from '../data.js';

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
      <header className="hidden md:flex bg-white/70 dark:bg-dark-bg/70 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
          <NavLink to="/" className="flex items-center gap-3">
            {/* FIX: Replaced text logo with your image logo */}
            <img src="/aarohan_icon.png" alt="Aarohan Icon" className="h-10" />
            <div className="text-sm font-bold tracking-wider">SGSITS TechFest</div>
          </NavLink>

          <nav className="flex gap-6 items-center text-sm font-medium">
            <NavLink to="/" className={linkClass}>{t.home}</NavLink>
            <NavLink to="/events" className={linkClass}>{t.events}</NavLink>
            <NavLink to="/prarupam" className={linkClass}>{t.prarupam}</NavLink>
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
            <Link to="/register" className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary-light text-white hover:opacity-90 transition-opacity">
              {t.register}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-[0_-2px_5px_rgba(0,0,0,0.1)] z-50 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around items-center h-16">
          <NavLink to="/" className={mobileLinkClass}><span><Home size={20}/></span>{t.home}</NavLink>
          <NavLink to="/prarupam" className={mobileLinkClass}><span><Lightbulb size={20}/></span>{t.prarupam}</NavLink>
          <NavLink to="/events" className={mobileLinkClass}><span><Calendar size={20}/></span>{t.events}</NavLink>
          <NavLink to="/expo" className={mobileLinkClass}><span><Rocket size={20}/></span>{t.expo}</NavLink>
          <NavLink to="/gallery" className={mobileLinkClass}><span><GalleryIcon size={20}/></span>{t.gallery}</NavLink>
          <NavLink to="/team" className={mobileLinkClass}><span><Users size={20}/></span>{t.team}</NavLink>
        </div>
      </nav>
    </>
  );
}