import React from "react";

export default function Gallery({ t }) {
  const items = new Array(8).fill(0);
  return (
    <section id="gallery" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t.gallery}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((_, i) => (
            <div key={i} className="w-full h-32 md:h-40 placeholder"></div>
          ))}
        </div>
      </div>
    </section>
  );
}