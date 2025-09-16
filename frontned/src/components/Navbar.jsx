import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, Calendar, Image as GalleryIcon, Lightbulb, Users, Rocket } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { generalRegistrationLink } from '../data.js';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Effect to handle theme changes (dark/light mode)
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const handleLanguageChange = (lang) => i18n.changeLanguage(lang);

  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-cyan-300'}`;

  const mobileLinkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 transition-colors text-xs w-1/5 ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'}`;

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex bg-slate-900/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/aarohan_logo.png" alt="Aarohan Logo" className="h-10" />
          </NavLink>

          <nav className="flex gap-6 items-center text-sm font-medium">
            <NavLink to="/" className={linkClass}>{t('nav_home')}</NavLink>
            <NavLink to="/prarupam" className={linkClass}>{t('nav_prarupam')}</NavLink>
            <NavLink to="/events" className={linkClass}>{t('nav_events')}</NavLink>
            <NavLink to="/expo" className={linkClass}>{t('nav_expo')}</NavLink>
            <NavLink to="/gallery" className={linkClass}>{t('nav_gallery')}</NavLink>
            <NavLink to="/team" className={linkClass}>{t('nav_team')}</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-white hover:bg-white/20 transition-colors">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="text-sm font-medium bg-slate-800/50 rounded-md p-1 border border-slate-700">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-0.5 rounded ${i18n.language.startsWith('en') ? 'bg-cyan-500 text-black' : 'text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange('hi')}
                className={`px-2 py-0.5 rounded ${i18n.language === 'hi' ? 'bg-cyan-500 text-black' : 'text-white'}`}
              >
                HI
              </button>
            </div>

            <a href={generalRegistrationLink} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-400 text-black hover:bg-white transition-colors">
              {t('register_now')}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Nav Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg z-50 border-t border-white/10">
        <div className="flex justify-around items-center h-16">
          <NavLink to="/prarupam" className={mobileLinkClass}><Lightbulb size={20} /><span>{t('nav_prarupam')}</span></NavLink>
          <NavLink to="/events" className={mobileLinkClass}><Calendar size={20} /><span>{t('nav_events')}</span></NavLink>
          <NavLink to="/" className={mobileLinkClass}><Home size={20} /><span>{t('nav_home')}</span></NavLink>
          <NavLink to="/expo" className={mobileLinkClass}><Rocket size={20} /><span>{t('nav_expo')}</span></NavLink>
          <NavLink to="/gallery" className={mobileLinkClass}><GalleryIcon size={20} /><span>{t('nav_gallery')}</span></NavLink>
        </div>
      </nav>
    </>
  );
}