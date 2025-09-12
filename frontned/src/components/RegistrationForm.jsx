// src/components/RegistrationForm.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const BACKEND_URL = "http://127.0.0.1:8000/register_user";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // 1. Fetch available events from Supabase when the component loads
  useEffect(() => {
    async function getEvents() {
      const { data, error } = await supabase.from('events').select('id, name');
      if (!error) {
        setEvents(data);
      }
    }
    getEvents();
  }, []);

  // 2. Handle changes to the text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle changes to the event checkboxes
  const handleEventChange = (eventId) => {
    setSelectedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId) 
        : [...prev, eventId]
    );
  };

  // 4. Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedEvents.length === 0) {
      setMessage("Please select at least one event.");
      return;
    }
    setIsSubmitting(true);
    setMessage('');

    const payload = { ...formData, event_ids: selectedEvents };

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // const result = await response.json();
      setMessage("Registration Successful! Please check your email for your ticket.");
      // Optionally reset form here
    } catch (error) {
      setMessage("Registration failed. Please try again later.");
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-3 rounded dark:bg-slate-700 border dark:border-slate-600" />
      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required className="w-full p-3 rounded dark:bg-slate-700 border dark:border-slate-600" />
      <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-3 rounded dark:bg-slate-700 border dark:border-slate-600" />

      <div className="pt-4">
        <h3 className="font-semibold mb-2">Select Events to Register:</h3>
        <div className="space-y-2">
          {events.map(event => (
            <label key={event.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedEvents.includes(event.id)}
                onChange={() => handleEventChange(event.id)}
                className="h-5 w-5 rounded text-primary-light focus:ring-primary-light"
              />
              <span>{event.name}</span>
            </label>
          ))}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full py-3 mt-4 rounded-lg bg-primary-light text-white font-bold hover:opacity-90 disabled:opacity-50">
        {isSubmitting ? 'Registering...' : 'Get My Ticket'}
      </button>

      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  );
}