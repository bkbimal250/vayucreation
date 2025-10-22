import { FaCheckCircle, FaAward, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import { statsData } from '../data/statsData';
import { useContactModal } from '../common/ContactModalContext';

const About = () => {
  const { openModal } = useContactModal();
  
  const values = [
    {
      icon: <FaAward className="text-4xl text-primary" />,
      title: "Quality First",
      description: "We never compromise on quality and use only the best materials and technology."
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We work closely with you at every step."
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "Innovation",
      description: "We stay ahead with the latest signage technology and design trends."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Reliability",
      description: "We deliver on time, every time. Your trust is our greatest asset."
    }
  ];

  const features = [
    "9 years of industry experience",
    "In-house design and manufacturing",
    "Premium quality materials",
    "Experienced installation team",
    "Comprehensive warranty coverage",
    "24/7 customer support",
    "Competitive pricing",
    "Timely project delivery"
  ];

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
              About <span className="text-primary">Vayu creations</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted partner for all signage needs. We bring your brand to life with 
              innovative and high-quality signage solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vayu creations is a leading signage company based in Mumbai, with over 9 years 
                  of experience in delivering exceptional signage solutions to businesses across 
                  various industries.
                </p>
                <p>
                  We specialize in end-to-end signage services, from initial design consultation 
                  to manufacturing, installation, and maintenance. Our team of experienced 
                  professionals is dedicated to bringing your brand vision to life through 
                  innovative and eye-catching signage.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities and a commitment to quality, 
                  we have successfully completed over 2000 projects, helping businesses enhance 
                  their brand visibility and attract more customers.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Our Team"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">
              Why Choose Us?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group hover:-translate-y-2"
              >
                <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat) => (
              <div 
                key={stat.id} 
                className="bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <StatCard stat={stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              How we bring your signage vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Enquiry", desc: "You reach out to us with your requirements" },
              { step: "02", title: "Site Visit", desc: "Our team visits your location for assessment" },
              { step: "03", title: "Design", desc: "We create custom designs for your approval" },
              { step: "04", title: "Approval", desc: "You review and approve the final design" },
              { step: "05", title: "Installation", desc: "We manufacture and install your signage" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-primary to-orange-600 rounded-xl p-6 text-white text-center h-full">
                  <div className="text-4xl font-bold opacity-50 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
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
              Ready to Transform Your Brand Visibility?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how we can help you stand out with exceptional signage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openModal} className="btn-primary">
                Get a Quote
              </button>
              <a href="tel:+917977154669" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

