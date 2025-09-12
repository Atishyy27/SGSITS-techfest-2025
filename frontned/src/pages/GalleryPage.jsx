// src/pages/GalleryPage.jsx
import React from 'react';
import SEO from '../components/SEO';

export default function GalleryPage() {
  // Placeholder images - you will replace these with real images later
  const images = Array(12).fill("http://googleusercontent.com/images.google.com/30");

  return (
    <>
      <SEO title="Gallery" description="Photo gallery of AAROHAN 2025." />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-square bg-slate-800 rounded-lg overflow-hidden">
              <img src={`${src}?random=${index}`} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}