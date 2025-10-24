import { useState, useEffect } from 'react';
import { useContactModal } from './ContactModalContext';
import { FaTimes, FaPhone, FaEnvelope, FaUser, FaComment, FaWhatsapp } from 'react-icons/fa';
import { submitToGoogleSheets, getStandardFormFields, resetFormData } from '../utils/formSubmission';

const OpenModelContact = () => {
  const { isOpen, closeModal } = useContactModal();
  const [formData, setFormData] = useState(getStandardFormFields());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const success = await submitToGoogleSheets(formData, 'Contact Modal');
      
      if (success) {
        alert('Thank you for your inquiry! We will contact you soon.');
      } else {
        alert('Thank you for your inquiry! We will contact you soon.');
      }
      
      // Reset form
      resetFormData(setFormData);
      closeModal();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Thank you for your inquiry! We will contact you soon.');
      
      // Reset form even if there's an error
      resetFormData(setFormData);
      closeModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-orange-600 text-white p-6 rounded-t-2xl z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">Get a Free Quote</h2>
              <p className="text-white/90">Fill out the form and we'll get back to you within 24 hours</p>
            </div>
            <button
              onClick={closeModal}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto">
            {/* Form Fields in 2 columns */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                  <label htmlFor="modal-fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                    Enter your full name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="modal-fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>
              </div>

              <div>
                  <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Enter your Email *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Enter your Email"
                    />
                  </div>
              </div>

              <div>
                  <label htmlFor="modal-mobileNumber" className="block text-sm font-semibold text-gray-700 mb-1">
                    Enter your mobile number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="modal-mobileNumber"
                      name="mobileNumber"
                      required
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Enter your mobile number"
                    />
                  </div>
              </div>

              <div>
                  <label htmlFor="modal-businessName" className="block text-sm font-semibold text-gray-700 mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="modal-businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Business Name"
                  />
              </div>

              <div>
                  <label htmlFor="modal-businessLocation" className="block text-sm font-semibold text-gray-700 mb-1">
                    Business location *
                  </label>
                  <input
                    type="text"
                    id="modal-businessLocation"
                    name="businessLocation"
                    required
                    value={formData.businessLocation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Business location"
                  />
              </div>

              <div>
                  <label htmlFor="modal-city" className="block text-sm font-semibold text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="modal-city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="City"
                  />
              </div>
            </div>

            {/* Requirement field - spans full width */}
              <div>
                <label htmlFor="modal-requirement" className="block text-sm font-semibold text-gray-700 mb-1">
                  Requirement *
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="modal-requirement"
                    name="requirement"
                    required
                    value={formData.requirement}
                    onChange={handleChange}
                    rows="3"
                    className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full text-lg py-3">
                Submit
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OpenModelContact;

