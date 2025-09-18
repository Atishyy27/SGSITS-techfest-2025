import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// FIX: Corrected the CSS import paths by removing "/esm"
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { X, Loader } from 'lucide-react';

// Required setup for the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function BrochureViewer({ fileUrl, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Prevents background scroll when the viewer is open
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      {/* This div acts as the button to open the viewer */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-[90vw] h-[90vh] max-w-4xl bg-slate-900 border border-slate-700 rounded-lg shadow-2xl p-4 overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-slate-400 bg-slate-800 rounded-full p-2 hover:bg-slate-700 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <Document
              file={fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex flex-col items-center justify-center h-full text-white">
                  <Loader className="animate-spin mb-4" />
                  <p>Loading Brochure...</p>
                </div>
              }
              className="flex flex-col items-center"
            >
              {Array.from(new Array(numPages || 0), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={Math.min(window.innerWidth * 0.8, 800)} // Makes the PDF width responsive
                  className="mb-4 shadow-lg"
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </>
  );
}