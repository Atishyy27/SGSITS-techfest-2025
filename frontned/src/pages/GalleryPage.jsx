import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { galleryImages } from '../data';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(galleryImages.map(img => img.category))], []);
  
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return galleryImages;
    return galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEO title="Gallery" description="Photo gallery of AAROHAN 2025." />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              // FIX: Added backticks (`) to create a valid template literal string
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-light text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="aspect-square bg-slate-800 rounded-lg overflow-hidden group">
              <img src={image.src} alt={image.title || `Gallery image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}