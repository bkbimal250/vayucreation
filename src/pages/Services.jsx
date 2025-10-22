import ServiceCard from '../components/ServiceCard';
import { servicesData, additionalServices } from '../data/servicesData';
import { FaCheckCircle } from 'react-icons/fa';
import { useContactModal } from '../common/ContactModalContext';

const Services = () => {
  const { openModal } = useContactModal();
  
  const lightingOptions = [
    {
      title: "Front Light",
      description: "Direct illumination from the front for maximum visibility",
      image: "/assets/images/2D.jpg"
    },
    {
      title: "Reverse Light (Halo Effect)",
      description: "Backlighting creates an elegant halo glow effect",
      image: "/assets/images/BACK LIGHT.jpg"
    },
    {
      title: "Neon Light",
      description: "Vibrant neon glow for modern, trendy aesthetics",
      image: "/assets/images/Neon Signage.jpg"
    },
    {
      title: "LED Display",
      description: "Dynamic digital displays with bright, customizable content",
      image: "/assets/images/LED Displays 1.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div 
            className="max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive signage solutions tailored to elevate your brand presence 
              and attract your target audience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="section-title">Our Main Services</h2>
            <p className="section-subtitle">
              Professional signage solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              We offer many more specialized signage solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group hover:-translate-y-2"
              >
                <FaCheckCircle className="text-primary text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-secondary">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Lighting Options</h2>
            <p className="section-subtitle">
              Choose the perfect lighting style for your signage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lightingOptions.map((option, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg">
                    {option.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Premium Materials We Use</h2>
            <p className="section-subtitle">
              Quality materials for durable and stunning signage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "ACP (Aluminum Composite Panel)", desc: "Weather-resistant and lightweight" },
              { name: "Acrylic", desc: "Crystal clear and versatile" },
              { name: "Polycarbonate", desc: "High impact resistance" },
              { name: "Aluminum", desc: "Durable and professional" },
              { name: "Stainless Steel", desc: "Premium and long-lasting" },
              { name: "Sunboard", desc: "Cost-effective solutions" }
            ].map((material, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <FaCheckCircle className="text-xl text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">{material.name}</h3>
                    <p className="text-gray-600 text-sm">{material.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Service Process</h2>
            <p className="section-subtitle">
              Simple and transparent workflow from start to finish
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { title: "Initial Consultation", desc: "Discuss your requirements and get expert advice" },
                { title: "Site Survey", desc: "Our team visits your location for measurements and assessment" },
                { title: "Design & Mockup", desc: "We create detailed designs and 3D visualizations" },
                { title: "Quotation", desc: "Receive a detailed quote within 24 hours" },
                { title: "Manufacturing", desc: "In-house production with quality checks (7 working days)" },
                { title: "Installation", desc: "Professional installation by our expert team" },
                { title: "After-Sales Support", desc: "Ongoing maintenance and support services" }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openModal} className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Get a Free Quote
            </button>
            <a 
              href="https://wa.me/917977154669" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

