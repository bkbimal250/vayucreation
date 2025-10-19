import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    "Craft lucrative designs to meet the business standards",
    "Fabricate Illuminated 2D/3D lettering and graphics",
    "Conduct deep research to create high-resolution graphics",
    "Offer customize signage that suits your brand vision",
    "Use the latest technology and state-of-the-art to produce quality products"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            #1 Signage Company in Mumbai
          </span>
          <h2 className="section-title mt-2">
            Leverage your Brand Image with Our LED Displays
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Backed with 15+ years of experience in the industry, Vayu creations is a leader in providing 
            end-to-end LED signboard solutions for every business. We analyze your needs and provide 
            modern and attractive digital sign boards to intrigue customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
              alt="About Vayu creations"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary">
              We Make Signages That Make You Visible
            </h3>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

