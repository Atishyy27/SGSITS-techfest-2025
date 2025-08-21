// src/pages/IdeathonPage.jsx
import React from 'react';
import { ideathonStatements } from '../data';
import ProblemStatement from '../components/ProblemStatement';

export default function IdeathonPage() {
  return (
    <div className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Ideathon 2025</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Solve real-world problems. Build the future.</p>
        <div className="space-y-4">
          {ideathonStatements.map((statement, index) => (
            <ProblemStatement key={index} statement={statement} />
          ))}
        </div>
      </div>
    </div>
  );
}