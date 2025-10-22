import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendar, FaTag, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';
import { useContactModal } from '../../common/ContactModalContext';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useContactModal();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/our-work" className="btn-primary">
            Back to Our Work
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projectsData
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:text-primary transition-colors mb-6"
          >
            <FaArrowLeft />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <FaTag className="text-primary" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-primary" />
                <span>{project.completionDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0 bg-white">
        <div className="container-custom">
          <div className="relative -mt-16 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 md:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Project Details */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  This project showcases our expertise in delivering high-quality {project.category.toLowerCase()} 
                  solutions. Working closely with {project.client}, we developed a custom signage solution that 
                  perfectly aligned with their brand identity and business objectives.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The project was completed within the agreed timeline and exceeded client expectations in terms 
                  of quality, durability, and visual impact. The signage has significantly improved brand visibility 
                  and has become a landmark in the area.
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-secondary mb-4">Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The client needed a signage solution that would stand out in a highly competitive area 
                      while maintaining visibility both during day and night. The location presented unique 
                      challenges in terms of viewing angles and environmental factors.
                    </p>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-secondary mb-4">Solution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We designed and installed a custom {project.category.toLowerCase()} system with optimal 
                      placement, high-quality materials, and advanced lighting technology. The result is a 
                      stunning visual display that captures attention and reinforces brand presence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Highlights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Project Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Custom design tailored to brand identity",
                    "Weather-resistant premium materials",
                    "Energy-efficient LED technology",
                    "Professional installation by expert team",
                    "Completed within agreed timeline",
                    "Comprehensive warranty coverage",
                    "Ongoing maintenance support",
                    "Exceeded client expectations"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Process</h2>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Initial Consultation",
                      desc: "Met with client to understand their vision, requirements, and business objectives."
                    },
                    {
                      step: 2,
                      title: "Site Survey",
                      desc: "Conducted detailed site assessment to determine optimal placement and specifications."
                    },
                    {
                      step: 3,
                      title: "Design & Approval",
                      desc: "Created custom designs and 3D mockups for client review and approval."
                    },
                    {
                      step: 4,
                      title: "Manufacturing",
                      desc: "Produced signage using premium materials and state-of-the-art technology."
                    },
                    {
                      step: 5,
                      title: "Installation",
                      desc: "Professional installation ensuring perfect alignment and secure mounting."
                    },
                    {
                      step: 6,
                      title: "Quality Check",
                      desc: "Thorough testing and quality assurance before final handover."
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-secondary text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Impact */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Results & Impact</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-gray-700">Client Satisfaction</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3x</div>
                    <div className="text-gray-700">Increased Visibility</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-gray-700">Years Warranty</div>
                  </div>
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="bg-gradient-to-br from-gray-800 to-secondary text-white rounded-2xl p-8 md:p-12">
                <div className="text-5xl text-primary mb-4">"</div>
                <p className="text-xl leading-relaxed mb-6">
                  Vardan Signs exceeded our expectations in every way. The signage they created for us is not only 
                  beautiful but also incredibly effective. We've received numerous compliments and have seen a 
                  significant increase in foot traffic. Their professionalism and attention to detail are unmatched.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {project.client.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">Representative</div>
                    <div className="text-sm text-gray-300">{project.client}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info Card */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 sticky top-24">
                <h3 className="font-bold text-secondary text-xl mb-6">Project Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-semibold text-secondary">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-semibold text-secondary">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-semibold text-secondary">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Completion Date</div>
                    <div className="font-semibold text-secondary">{project.completionDate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-semibold text-secondary">7 Working Days</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-secondary mb-3">Services Provided:</h4>
                  <ul className="space-y-2">
                    {['Design & Consultation', 'Manufacturing', 'Installation', 'Quality Assurance'].map((service, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary to-orange-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Want Similar Results?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Contact us today for a free consultation and quote for your project.
                </p>
                
                <div className="space-y-3">
                  <a
                    href="tel:+91797794669"
                    className="flex items-center gap-2 bg-white text-primary rounded-lg p-3 hover:bg-gray-50 transition-colors text-sm font-semibold"
                  >
                    <FaPhone />
                    Call: +91 797794669
                  </a>

                  <a
                    href="https://wa.me/91797794669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white rounded-lg p-3 hover:bg-green-600 transition-colors text-sm font-semibold"
                  >
                    <FaWhatsapp />
                    WhatsApp Us
                  </a>

                  <Link
                    to="/#contact"
                    className="block text-center bg-white/20 backdrop-blur-sm text-white rounded-lg p-3 hover:bg-white/30 transition-colors text-sm font-semibold"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Similar Projects</h2>
              <p className="section-subtitle">More work in {project.category}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/our-work/${relatedProject.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {relatedProject.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{relatedProject.client}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/our-work" className="btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-secondary to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openModal} className="btn-primary">
                Get a Free Quote
              </button>
              <Link to="/services" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

