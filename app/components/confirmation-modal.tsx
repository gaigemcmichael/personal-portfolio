'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ConfirmationModalProps {
  status: 'success' | 'error';
  onClose: () => void;
}

export default function ConfirmationModal({
  status,
  onClose,
}: ConfirmationModalProps) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-[85px] inset-x-0 mx-auto w-max bg-white-primary dark:bg-gray-light border-2 border-blue-primary dark:border-gray-primary px-6 py-3 rounded-lg shadow-lg z-40 flex items-center gap-3"
    >
      <p
        className="text-sm font-bold text-black-primary dark:text-white-primary"
      >
        {status === 'success'
          ? 'Your message was sent successfully!'
          : 'Oops—something went wrong. Please try again.'}
      </p>
      <button
        onClick={onClose}
        className="text-black-primary dark:text-gray-primary hover:text-gray-500 dark:hover:text-gray-400"
        aria-label="Close notification"
      >
        ✕
      </button>
    </motion.div>
  );
}
