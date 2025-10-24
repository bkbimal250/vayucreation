import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const features = [
    "Craft lucrative designs to meet the business standards",
    "Fabricate Illuminated 2D/3D lettering and graphics",
    "Conduct deep research to create high-resolution graphics",
    "Offer customize signage that suits your brand vision",
    "Use the latest technology and state-of-the-art to produce quality products"
  ];

  // Generate array of all ourworks images
  const ourworksImages = Array.from({ length: 76 }, (_, i) => 
    `/assets/images/ourworks/vayucreation (${i + 1}).jpeg`
  );

  const [visibleImages, setVisibleImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animate images one by one
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < ourworksImages.length) {
        setVisibleImages(prev => [...prev, currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reset after all images are shown
        setTimeout(() => {
          setVisibleImages([]);
          setCurrentIndex(0);
        }, 2000);
      }
    }, 100); // Show new image every 100ms

    return () => clearInterval(interval);
  }, [currentIndex, ourworksImages.length]);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div 
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            #1 Signage Company in Mumbai
          </span>
          <h2 className="section-title mt-2">
            Leverage your Brand Image with Our LED Displays
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Backed with 9+ years of experience in the industry, Vayu creations is a leader in providing 
            end-to-end LED signboard solutions for every business. We analyze your needs and provide 
            modern and attractive digital sign boards to intrigue customers.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Image */}
          <div className="relative">
            <img
              src="/assets/images/3D.jpg"
              alt="About Vayu creations"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">9+</div>
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

        {/* Animated Image Gallery */}
        <div 
          className="mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Our Portfolio in Action
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our work come to life - showcasing 76+ successful projects with stunning visual transformations
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-4">
            {ourworksImages.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform ${
                  visibleImages.includes(index)
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-75 rotate-12'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <img
                  src={image}
                  alt={`Vayu Creation Project ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-2 text-white text-xs font-medium">
                    Project {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-200 rounded-full h-2 w-64 overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(visibleImages.length / ourworksImages.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary">{ourworksImages.length}+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary">9+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

