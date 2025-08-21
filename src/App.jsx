import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import styles
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import IdeathonPage from './pages/IdeathonPage';
import TeamPage from './pages/TeamPage'; // New page

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Loading Bar Effect
  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const Layout = () => (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollToTopButton />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="ideathon" element={<IdeathonPage />} />
        <Route path="team" element={<TeamPage />} />
      </Route>
    </Routes>
  );
}