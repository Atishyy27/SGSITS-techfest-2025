import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">SRIJAN 2025</h3>
          <p className="text-sm">The annual technical festival of Shri G.S. Institute of Technology & Science, Indore.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-cyan-500">Home</a></li>
            <li><a href="/events" className="hover:text-cyan-500">Events</a></li>
            <li><a href="/ideathon" className="hover:text-cyan-500">Ideathon</a></li>
            <li><a href="/team" className="hover:text-cyan-500">Team</a></li>
          </ul>
        </div>
        
        {/* FIX: Removed the duplicated, nested 'Visit Us' section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Visit Us</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.290261501073!2d75.86054611266785!3d22.725544071499314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd13ed2bae49%3A0xb884fc340de875c6!2sShri%20Govindram%20Seksaria%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1755813857199!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
      </div>
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
        Designed & Developed with ❤️ by SGSITS Students | © 2025 All Rights Reserved.
      </div>
    </footer>
  );
}