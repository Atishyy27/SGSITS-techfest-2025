// src/components/BrochureViewer.jsx
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Required setup for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function BrochureViewer() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all">
          View Brochure
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/80 fixed inset-0 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] h-[90vh] max-w-4xl bg-slate-800 rounded-lg shadow-2xl p-4 overflow-y-auto">
          
          <Document 
            file="/aarohan_brochure.pdf" // Path to your PDF in the 'public' folder
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex flex-col items-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                width={800} // Adjust width as needed
                className="mb-4 shadow-lg"
              />
            ))}
          </Document>

          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80" aria-label="Close">
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}