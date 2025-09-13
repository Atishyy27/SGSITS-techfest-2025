// src/pages/GalleryPage.jsx

import React from 'react';
import SEO from '../components/SEO';
import { galleryImages } from '../data'; // FIX: Import the galleryImages array

export default function GalleryPage() {
  return (
    <>
      <SEO title="Gallery" description="Photo gallery of AAROHAN 2025." />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="aspect-square bg-slate-800 rounded-lg overflow-hidden">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}