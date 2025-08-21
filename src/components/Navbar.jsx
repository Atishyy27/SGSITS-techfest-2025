import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const linkClass = ({ isActive }) =>
    `hover:text-cyan-400 transition-colors ${isActive ? 'text-cyan-400' : ''}`;

  return (
    <header className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center text-gray-900 font-bold text-lg">S</div>
          <div><div className="text-sm font-bold tracking-wider">SRIJAN 2025</div></div>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/events" className={linkClass}>Events</NavLink>
          <NavLink to="/ideathon" className={linkClass}>Ideathon</NavLink>
          <NavLink to="/team" className={linkClass}>Team</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {theme === 'dark' ? <span><Sun size={18} /></span> : <span><Moon size={18} /></span>}
          </button>
        </div>
        
      </div>
    </header>
  );
}