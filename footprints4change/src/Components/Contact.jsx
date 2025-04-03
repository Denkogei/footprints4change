import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const subject = `Message from ${formData.name}`;
      const body = encodeURIComponent(
        `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:denkogei11@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B256E] to-[#88C641] px-4 sm:px-6 lg:px-8 pt-24"> {/* Added pt-24 to account for navbar height */}
      <div className="max-w-3xl mx-auto py-12"> {/* Added py-12 for internal spacing */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-[#2B256E] p-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
              Contact Us
            </h1>
            <p className="mt-2 text-lg text-white opacity-90">
              We'd love to hear from you
            </p>
          </div>

          <div className="p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#2B256E] mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-6">Your email client should open shortly. If it doesn't, please send your message to denkogei11@gmail.com</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#88C641] hover:bg-[#2B256E] text-white font-bold py-2 px-6 rounded-md transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2B256E] focus:border-[#2B256E] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2B256E] focus:border-[#2B256E] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2B256E] focus:border-[#2B256E] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Type your message here..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#2B256E] hover:bg-[#88C641] text-white font-bold py-3 px-4 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;