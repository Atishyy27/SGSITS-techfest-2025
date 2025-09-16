// First, make sure you have react-icons installed:
// npm install react-icons

import React from 'react';
import { Link } from 'react-router-dom';
// Import icons for social media and contact
import { FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const collegeAddress = "23, Sir M. Visvesvaraya Marg, Indore, MP 452003";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeAddress)}`;

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 px-4">
      {/* CHANGE: Changed to a 4-column layout for better spacing */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: About Aarohan */}
        <div className="md:col-span-1">
          <img src="/aarohan_logo.png" alt="Aarohan Logo" className="h-12 mb-4" />
          <p className="text-sm">The annual technical festival of Shri G.S. Institute of Technology & Science, Indore.</p>
          {/* CHANGE: Made the address a clickable link to Google Maps */}
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm mt-2 block hover:text-primary-light transition-colors">
            {collegeAddress}
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary-light">Home</Link></li>
            <li><Link to="/Prarupam" className="hover:text-primary-light">Prarupam</Link></li>
            <li><Link to="/events" className="hover:text-primary-light">Events</Link></li>
            <li><Link to="/expo" className="hover:text-primary-light">Expo</Link></li>
            <li><Link to="/team" className="hover:text-primary-light">Team</Link></li>
          </ul>
        </div>

        {/* Column 3: NEW - Connect & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Connect with Us</h3>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6">
            <a href="#" aria-label="Instagram" className="hover:text-primary-light transition-colors text-xl"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary-light transition-colors text-xl"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube" className="hover:text-primary-light transition-colors text-xl"><FaYoutube /></a>
          </div>
          {/* Contact Email */}
          <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Contact</h3>
          <a href="mailto:aarohan@sgsits.ac.in" className="inline-flex items-center gap-2 text-sm hover:text-primary-light transition-colors">
            <FaEnvelope />
            aarohan@sgsits.ac.in
          </a>
        </div>

        {/* Column 4: Visit Us (Map) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Visit Us</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.050148482181!2d75.8757917751711!3d22.72628227938356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd35deb8e231%3A0xfa33352d1be490b!2sShri%20Govindram%20Seksaria%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1726469074744!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-slate-500 mt-10 border-t border-slate-200 dark:border-slate-700 pt-6">
        Designed & Developed with ❤ by SGSITS Students | © 2025 All Rights Reserved.
      </div>
    </footer>
  );
}