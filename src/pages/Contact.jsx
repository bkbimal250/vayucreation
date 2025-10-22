import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    businessName: '',
    businessLocation: '',
    city: '',
    requirement: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with axios
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      mobileNumber: '',
      businessName: '',
      businessLocation: '',
      city: '',
      requirement: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch with us for a free consultation and quote. We're here to help 
              bring your signage vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-secondary mb-4">Get a Free Quote</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form Fields in 2 columns */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                      Enter your full name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="contact-fullName"
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
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1">
                      Enter your Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="contact-email"
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
                    <label htmlFor="contact-mobileNumber" className="block text-sm font-semibold text-gray-700 mb-1">
                      Enter your mobile number *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="contact-mobileNumber"
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
                    <label htmlFor="contact-businessName" className="block text-sm font-semibold text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="contact-businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Business Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-businessLocation" className="block text-sm font-semibold text-gray-700 mb-1">
                      Business location *
                    </label>
                    <input
                      type="text"
                      id="contact-businessLocation"
                      name="businessLocation"
                      required
                      value={formData.businessLocation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Business location"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-city" className="block text-sm font-semibold text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="contact-city"
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
                  <label htmlFor="contact-requirement" className="block text-sm font-semibold text-gray-700 mb-1">
                    Requirement *
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      id="contact-requirement"
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
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  Ready to transform your business with professional signage? Contact us today 
                  for a free consultation and quote.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Address</h4>
                    <p className="text-gray-600">
                      No. 123, Industrial Area,<br />
                      Navi Mumbai - Thane,<br />
                      Mumbai-400705
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a href="tel:+91797794669" className="block text-gray-600 hover:text-primary transition-colors">
                        +91 797794669
                      </a>
                      <a href="tel:+919876543211" className="block text-gray-600 hover:text-primary transition-colors">
                        +917208673634
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Email</h4>
                    <div className="space-y-1">
                      <a href="mailto:vayucreation2025@gmail.com" className="block text-gray-600 hover:text-primary transition-colors">
                        vayucreation2025@gmail.com
                      </a>
                      <a href="mailto:contact@vardansigns.com" className="block text-gray-600 hover:text-primary transition-colors">
                        contact@vardansigns.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">WhatsApp</h4>
                    <a
                      href="https://wa.me/91797794669"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-primary to-orange-600 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-2xl" />
                  <h4 className="text-xl font-bold">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-secondary text-lg mb-4">Why Choose Us?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700">9 Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700">2000+ Projects Completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700">Free Consultation & Quote</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700">24-Hour Response Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't wait! Contact us today and let's discuss how we can help 
              enhance your brand visibility with professional signage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+91797794669" className="btn-primary">
                Call Us Now
              </a>
              <a 
                href="https://wa.me/91797794669" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
