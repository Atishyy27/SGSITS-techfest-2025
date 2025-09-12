import React from 'react';
import { Link } from 'react-router-dom'; // CHANGE: Use Link instead of a

export default function Footer() {
  return (
    // CHANGE: New bluish dark colors, and use Link for navigation
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Prarupam 2025</h3>
          <p className="text-sm">The annual technical festival of Shri G.S. Institute of Technology & Science, Indore.</p>
          <p className="text-sm mt-2">23, Sir M. Visvesvaraya Marg, Indore, MP 452003</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary-light">Home</Link></li>
            <li><Link to="/events" className="hover:text-primary-light">Events</Link></li>
            <li><Link to="/ideathon" className="hover:text-primary-light">Ideathon</Link></li>
            <li><Link to="/team" className="hover:text-primary-light">Team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Visit Us</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.093472092147!2d75.87023367508493!3d22.724935926577583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd35deb33865%3A0x207c5968848721a!2sShri%20Govindram%20Seksaria%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1724288764953!5m2!1sen!2sin4"
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
        Designed & Developed with ❤️ by SGSITS Students | © 2025 All Rights Reserved.
      </div>
    </footer>
  );
}
