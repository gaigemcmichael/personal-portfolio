'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ConfirmationModal from '../components/confirmation-modal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div id="contact" className="flex flex-col max-w-[1024px] bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary p-6 rounded-lg shadow-lg w-full transition-all duration-300 scroll-m-[80px] sm:scroll-m-[90px]">
      <h2 className="text-xl sm:text-2xl font-bold mb-5">Contact Me</h2>

      <AnimatePresence>
      {(status === 'success' || status === 'error') && (
        <ConfirmationModal status={"success"} onClose={() => setStatus('idle')} />
      )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="font-medium">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full mt-1 bg-white-primary dark:bg-black-primary p-3 rounded-md border border-gray-primary dark:border-black-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="font-medium">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-1 bg-white-primary dark:bg-black-primary p-3 rounded-md border border-gray-primary dark:border-black-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="font-medium">
            Your Phone (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full mt-1 bg-white-primary dark:bg-black-primary p-3 rounded-md border border-gray-primary dark:border-black-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="font-medium">
            Your Company (Optional)
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="w-full mt-1 bg-white-primary dark:bg-black-primary p-3 rounded-md border border-gray-primary dark:border-black-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            rows={4}
            className="w-full mt-1 bg-white-primary dark:bg-black-primary p-3 rounded-md border border-gray-primary dark:border-black-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="p-3 bg-blue-primary text-white rounded-md hover:bg-blue-secondary transition-all duration-300 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      <p className="mt-2 text-sm text-center text-gray-light dark:text-white-primary">
        I do not share any of your information with anyone. Feel free to reach out to me through here or through other means like LinkedIn.
      </p>

      {status === 'success' && (
        <p className="mt-4 text-green-light">Your message was sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-light">Oops—something went wrong. Please try again.</p>
      )}
    </div>
  );
}
