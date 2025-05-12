'use client';

import { useState } from 'react';
import { Button } from '../UI/button';
import { ArrowRight, Mail, User, MessageSquare } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch('https://formspree.io/f/mgvkzqnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I’ll get back to you soon!',
          icon: 'success',
          confirmButtonText: 'Great!',
          background: '#1e1b4b',
          color: '#fff',
          confirmButtonColor: '#ec4899',
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'There was an issue sending your message. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Okay',
        background: '#1e1b4b',
        color: '#fff',
        confirmButtonColor: '#ec4899',
      });
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-indigo-950/50 via-purple-900/30 to-violet-950/50 text-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8 sm:mb-10 lg:mb-12 text-center">
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-indigo-500/10 blur-xl -top-8 -right-8 sm:-top-10 sm:-right-10 animate-pulse"></div>
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl -bottom-6 -left-8 sm:-bottom-8 sm:-left-10 animate-pulse"></div>
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 bg-indigo-500/20 rounded-full text-indigo-100 font-medium text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
            Say Hello
          </div>
  
          <div className="h-0.5 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-indigo-400 to-pink-500 mx-auto mb-4 sm:mb-6 rounded"></div>
          <p className="text-sm sm:text-base md:text-lg text-indigo-100 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          <div className="lg:col-span-3">
            <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-800/40 rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-5 sm:mb-6 text-pink-400 hover:text-indigo-300 transition-colors">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm md:text-base font-medium text-indigo-200 flex items-center gap-1.5 sm:gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 sm:p-3 md:p-3.5 bg-indigo-950/50 border rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder-indigo-300 text-xs sm:text-sm md:text-base ${
                      errors.name ? 'border-red-500' : 'border-indigo-700/30'
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm md:text-base font-medium text-indigo-200 flex items-center gap-1.5 sm:gap-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 sm:p-3 md:p-3.5 bg-indigo-950/50 border rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder-indigo-300 text-xs sm:text-sm md:text-base ${
                      errors.email ? 'border-red-500' : 'border-indigo-700/30'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm md:text-base font-medium text-indigo-200 flex items-center gap-1.5 sm:gap-2">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-2 sm:p-3 md:p-3.5 bg-indigo-950/50 border rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder-indigo-300 text-xs sm:text-sm md:text-base resize-none ${
                      errors.message ? 'border-red-500' : 'border-indigo-700/30'
                    }`}
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
                >
                  Send Message <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}