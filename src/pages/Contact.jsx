import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { submitToGoogleSheets, getStandardFormFields, resetFormData } from '../utils/formSubmission';

const Contact = () => {
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
      const success = await submitToGoogleSheets(formData, 'Contact Page');
      
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
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Get a Free Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>

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
                      <a href="tel:+917977154669" className="block text-gray-600 hover:text-primary transition-colors">
                        +91 7977154669
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
                      href="https://wa.me/917977154669"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
              </div>

        
             
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Find Us Here
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our office or get directions to our location. We're conveniently 
              located in Navi Mumbai - Thane area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="relative">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96 lg:h-[500px]">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d73.0!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vayu Creations Location Map"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Map Overlay with Directions Button */}
              <div className="absolute top-4 right-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=19.0760,72.8777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors font-semibold text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">Our Location</h3>
                <div className="space-y-6">
                  {/* Address Card */}
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-primary text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary text-lg mb-2">Office Address</h4>
                        <p className="text-gray-700 leading-relaxed">
                          No. 123, Industrial Area,<br />
                          Navi Mumbai - Thane,<br />
                          Mumbai - 400705<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-secondary text-lg mb-4">Quick Contact</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FaPhone className="text-primary" />
                        <a href="tel:+917977154669" className="text-gray-700 hover:text-primary transition-colors">
                          +91 7977154669
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaEnvelope className="text-primary" />
                        <a href="mailto:vayucreation2025@gmail.com" className="text-gray-700 hover:text-primary transition-colors">
                          vayucreation2025@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaWhatsapp className="text-green-600" />
                        <a 
                          href="https://wa.me/917977154669" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                          WhatsApp: +91 7977154669
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-orange-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait! Contact us today and let's discuss how we can help 
              enhance your brand visibility with professional signage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917977154669" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Call Us Now
              </a>
              <a 
                href="https://wa.me/917977154669" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
              >
                WhatsApp Us
              </a>
            </div>
            
            {/* Additional Contact Options */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 mb-4">Or reach us through:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="mailto:vayucreation2025@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  📧 Email Us
                </a>
                <span className="text-white/40">•</span>
                <a href="tel:+917208673634" className="text-white/80 hover:text-white transition-colors">
                  📞 Alternative Number
                </a>
                <span className="text-white/40">•</span>
                <span className="text-white/80">
                  🕒 Mon-Sat: 9AM-7PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
