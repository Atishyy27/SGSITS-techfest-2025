import React from 'react';
import SEO from '../components/SEO';
import RegistrationForm from '../components/RegistrationForm';

export default function RegisterPage() {
  return (
    <>
      <SEO title="Register" description="Register for events at AAROHAN 2025." />
      <div className="py-20 px-4 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Register for Aarohan</h1>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}