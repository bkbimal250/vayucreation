import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { FaFilter } from 'react-icons/fa';
import { useContactModal } from '../common/ContactModalContext';

const OurWork = () => {
  const { openModal } = useContactModal();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

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
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of successful signage projects. Each project represents 
              our commitment to quality and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "2000+", label: "Projects Completed" },
              { number: "500+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Showcase */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Recent Works
            </span>
            <h2 className="section-title mt-2">
              A Glimpse Of Our Latest Projects
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <FaFilter className="text-gray-400 mt-3" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-600 mb-8">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Delivering exceptional signage across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Retail & Shopping", icon: "🛍️" },
              { name: "Restaurants & Cafes", icon: "🍽️" },
              { name: "Hotels & Hospitality", icon: "🏨" },
              { name: "Corporate Offices", icon: "🏢" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Education", icon: "🎓" },
              { name: "Real Estate", icon: "🏠" },
              { name: "Automotive", icon: "🚗" },
              { name: "Entertainment", icon: "🎬" },
              { name: "Sports & Fitness", icon: "⚽" },
              { name: "Banking & Finance", icon: "💰" },
              { name: "Manufacturing", icon: "🏭" }
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-primary hover:text-white transition-all duration-300 group shadow-md hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-secondary group-hover:text-white">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-xl opacity-90">
              Our proven process ensures quality results every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "Understand your vision and requirements" },
              { step: "2", title: "Design", desc: "Create stunning mockups and 3D visualizations" },
              { step: "3", title: "Production", desc: "Manufacture with precision and quality" },
              { step: "4", title: "Installation", desc: "Professional setup and testing" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Highlight */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { rating: 5, text: "Exceptional quality and professional service. The signage has transformed our storefront!", author: "Retail Store Owner" },
              { rating: 5, text: "From design to installation, everything was perfect. Highly recommend Vayu creations!", author: "Restaurant Manager" },
              { rating: 5, text: "Outstanding work! The LED display has increased our visibility significantly.", author: "Corporate Client" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-secondary">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-secondary to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's create something amazing together. Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openModal} className="btn-primary">
                Get a Free Quote
              </button>
              <a href="/services" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;

