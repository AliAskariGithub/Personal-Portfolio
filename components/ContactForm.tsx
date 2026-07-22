'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const resetStatusSoon = () => {
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        Swal.fire({
          title: 'Success!',
          text: 'Message has been sent successfully! You will be contacted soon.',
          icon: 'success',
        });
        setFormData({ name: '', email: '', budget: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send your message. Please try again later.',
        icon: 'error',
      });
    } finally {
      resetStatusSoon();
    }
  };

  const inputStyle = {
    background: 'rgba(182,180,189,0.20)',
    border: 'none',
    height: '40px',
    padding: '12px',
    borderRadius: '8px',
    color: 'white',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
  };

  const labelStyle = {
    fontSize: '12px',
    color: '#888888',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    marginBottom: '6px',
    display: 'block',
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex gap-5 flex-col sm:flex-row">
        <div className="flex-1">
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={inputStyle}
            className="w-full focus:outline-none focus:border focus:border-purple"
            placeholder="Your name"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={inputStyle}
            className="w-full focus:outline-none focus:border focus:border-purple"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="budget" style={labelStyle}>Budget</label>
        <select
          id="budget"
          required
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          style={inputStyle}
          className="w-full focus:outline-none focus:border focus:border-purple"
        >
          <option value="">Select budget...</option>
          <option value="<$3k">&lt;$3k</option>
          <option value="$3k–$5k">$3k–$5k</option>
          <option value="$5k–$10k">$5k–$10k</option>
          <option value=">$10k">&gt;$10k</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ ...inputStyle, height: '100px', minHeight: '100px', resize: 'vertical' }}
          className="w-full focus:outline-none focus:border focus:border-purple"
          placeholder="Tell me about your project..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        className="w-full h-10 rounded-lg font-satoshi font-bold text-sm text-white transition-colors"
        style={{ background: status === 'success' ? '#22c55e' : status === 'error' ? '#ef4444' : '#9D4CCC' }}
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
      >
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : status === 'error' ? 'Error - Try Again' : 'Send Message'}
      </motion.button>
    </motion.form>
  );
}