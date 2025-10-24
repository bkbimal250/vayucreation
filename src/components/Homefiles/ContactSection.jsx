import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser, FaComment } from 'react-icons/fa';
import { submitToGoogleSheets, getStandardFormFields, resetFormData } from '../../utils/formSubmission';

const ContactSection = () => {
  const [formData, setFormData] = useState(getStandardFormFields());

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const success = await submitToGoogleSheets(formData, 'Contact Section');
      
      if (success) {
        alert('Thank you for your inquiry! We will contact you soon.');
      } else {
        alert('Thank you for your inquiry! We will contact you soon.');
      }
      
      // Reset form
      resetFormData(setFormData);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Thank you for your inquiry! We will contact you soon.');
      
      // Reset form even if there's an error
      resetFormData(setFormData);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="section-title mt-2">
            Choose The Right Sign Boards With Vayu creations
          </h2>
          <p className="section-subtitle">
            Get in touch with us for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Fields in 2 columns */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="section-fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                    Enter your full name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="section-fullName"
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
                  <label htmlFor="section-email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Enter your Email *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="section-email"
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
                  <label htmlFor="section-mobileNumber" className="block text-sm font-semibold text-gray-700 mb-1">
                    Enter your mobile number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="section-mobileNumber"
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
                  <label htmlFor="section-businessName" className="block text-sm font-semibold text-gray-700 mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="section-businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Business Name"
                  />
                </div>

                <div>
                  <label htmlFor="section-businessLocation" className="block text-sm font-semibold text-gray-700 mb-1">
                    Business location *
                  </label>
                  <input
                    type="text"
                    id="section-businessLocation"
                    name="businessLocation"
                    required
                    value={formData.businessLocation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Business location"
                  />
                </div>

                <div>
                  <label htmlFor="section-city" className="block text-sm font-semibold text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="section-city"
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
                <label htmlFor="section-requirement" className="block text-sm font-semibold text-gray-700 mb-1">
                  Requirement *
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="section-requirement"
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

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Address</h4>
                    <p className="text-gray-600">
                      No. 123, Industrial Area,<br />
                      Navi Mumbai - Thane,<br />
                      Mumbai - 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">
                      <a href="tel:+917977154669" className="hover:text-primary transition-colors">
                        +91 7977154669
                      </a>
                      <br />
                      <a href="tel:+919876543211" className="hover:text-primary transition-colors">
                        +917208673634
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:vayucreation2025@gmail.com" className="hover:text-primary transition-colors">
                        vayucreation2025@gmail.com
                      </a>
                      <br />
                      <a href="mailto:contact@vardansigns.com" className="hover:text-primary transition-colors">
                        contact@vardansigns.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold text-secondary mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 md:p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <FaWhatsapp className="text-5xl" />
                <div>
                  <h3 className="text-2xl font-bold">Quick Response</h3>
                  <p className="text-green-100">Get instant support on WhatsApp</p>
                </div>
              </div>
              <a
                href="https://wa.me/917977154669"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-green-600 hover:bg-green-50 w-full inline-block text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

