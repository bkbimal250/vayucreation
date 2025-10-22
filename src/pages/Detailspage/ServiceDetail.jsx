import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { FaCheckCircle, FaArrowLeft, FaPhone, FaWhatsapp, FaClock, FaAward } from 'react-icons/fa';
import { useEffect } from 'react';
import { useContactModal } from '../../common/ContactModalContext';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useContactModal();
  const service = servicesData.find(s => s.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white py-20 md:py-32">
        {/* Background Image */}
        {service.image && (
          <div className="absolute inset-0">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-gray-800/90 to-secondary/90"></div>
          </div>
        )}
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:text-primary transition-colors mb-6"
          >
            <FaArrowLeft />
            <span>Back</span>
          </button>
          
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Professional Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Service Image */}
              {service.image && (
                <div className="mb-12">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Service Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Service Overview</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="text-lg leading-relaxed mb-4">
                    Our {service.title.toLowerCase()} service is designed to meet the highest standards 
                    of quality and durability. We use state-of-the-art technology and premium materials 
                    to ensure your signage stands out and lasts for years.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    With over 9 years of experience in the signage industry, we understand what works 
                    best for different business types and locations. Our expert team will guide you 
                    through the entire process, from design to installation.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Whether you need indoor or outdoor signage, we have the expertise and equipment to 
                    deliver exceptional results that enhance your brand visibility and attract more customers.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features && service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Why Choose This Service?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <FaAward className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Premium Quality</h3>
                    <p className="text-gray-600">
                      We use only the finest materials and latest manufacturing techniques to ensure 
                      durability and stunning visual appeal.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <FaClock className="text-primary text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">
                      Standard projects are completed within 7 working days, with rush services 
                      available for urgent requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Process</h2>
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Consultation", desc: "We discuss your requirements and provide expert recommendations" },
                    { step: 2, title: "Design", desc: "Our designers create custom mockups for your approval" },
                    { step: 3, title: "Production", desc: "We manufacture your signage with precision and care" },
                    { step: 4, title: "Installation", desc: "Professional installation by our experienced team" },
                    { step: 5, title: "Support", desc: "Ongoing maintenance and support services" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Perfect For</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Retail Stores",
                    "Restaurants",
                    "Corporate Offices",
                    "Hotels",
                    "Shopping Malls",
                    "Showrooms",
                    "Healthcare Facilities",
                    "Educational Institutions",
                    "Entertainment Venues"
                  ].map((application, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-primary transition-colors">
                      <span className="font-medium text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-8 text-white mb-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
                <p className="mb-6 opacity-90">
                  Contact us today for a free consultation and detailed quotation for your project.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+91797794669"
                    className="flex items-center gap-3 bg-white text-primary rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <FaPhone className="text-xl" />
                    <div>
                      <div className="text-sm opacity-75">Call Us Now</div>
                      <div className="font-semibold">+91 797794669</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/91797794669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500 text-white rounded-lg p-4 hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    <div>
                      <div className="text-sm opacity-90">WhatsApp</div>
                      <div className="font-semibold">Chat with Us</div>
                    </div>
                  </a>

                  <button
                    onClick={openModal}
                    className="block text-center bg-white/20 backdrop-blur-sm text-white rounded-lg p-4 hover:bg-white/30 transition-colors font-semibold w-full"
                  >
                    Request Quote Online
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-sm opacity-90 mb-2">⚡ Quick Response</div>
                  <div className="text-sm opacity-90">📞 Free Consultation</div>
                  <div className="text-sm opacity-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Related Services</h2>
              <p className="section-subtitle">You might also be interested in</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  to={`/services/${relatedService.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {relatedService.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedService.image} 
                        alt={relatedService.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedService.description}</p>
                    <span className="text-primary font-semibold flex items-center gap-2">
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-secondary to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openModal} className="btn-primary">
                Get a Free Quote
              </button>
              <Link to="/services" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

