import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import PrarupamPage from './pages/PrarupamPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ExpoPage from './pages/ExpoPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import RegisterPage from './pages/RegisterPage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = useState('en'); // Language state
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const Layout = () => (
    <>
      {/* FIX: Pass lang and setLang to the Navbar */}
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
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
        <Route path="Prarupam" element={<PrarupamPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="expo" element={<ExpoPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
