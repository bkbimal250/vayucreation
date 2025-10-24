import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaStar } from 'react-icons/fa';
import { useContactModal } from '../../common/ContactModalContext';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { openModal } = useContactModal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/assets/background/vayubg.png',
    '/assets/background/vayubg2.png',
    '/assets/background/vayubg3.png'
  ];

  // Auto-rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  return (
    <section className="relative text-white py-16 md:py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient overlay for better visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-transparent to-primary/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div 
            className="space-y-6 md:space-y-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="inline-block">
              <span className="bg-primary/30 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-semibold border border-primary/30">
                #1 Signage Company in Mumbai
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Brand Identity With Our{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                LED Sign Board
              </span>{' '}
              Solutions
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Engage your customers with clear and loud interactive screens for lasting impressions. 
              9 years of experience in delivering premium signage solutions that make your brand stand out.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9/5 Rating</span>
              </div>
              <div className="text-sm">
                <span className="font-bold text-primary">500+</span> Projects Completed
              </div>
              <div className="text-sm">
                <span className="font-bold text-primary">9+</span> Years Experience
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary inline-flex items-center justify-center gap-2 group px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg">
                Explore Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={openModal} 
                className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg group"
              >
                <FaPlay className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Get a Quote
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-gray-300 mb-3">Trusted by leading brands</p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                <span>✓ Free Consultation</span>
                <span>✓ 24/7 Support</span>
                <span>✓ Quality Guarantee</span>
                <span>✓ Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Side - Video Section (Desktop) */}
          <div className="relative mt-8 lg:mt-0 hidden lg:block" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              {/* Video Container */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/20 overflow-hidden">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/nzM2OwncPd8?autoplay=1&mute=1&loop=1&playlist=nzM2OwncPd8&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&end=0"
                    title="Vayu Creation - Signage Solutions"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{
                      border: 'none',
                      borderRadius: '0.75rem'
                    }}
                  />
                  
                  {/* Video Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Video Info */}
                <div className="text-center space-y-2 mt-4">
                  <h3 className="text-lg lg:text-xl font-semibold">Watch Our Work</h3>
                  <p className="text-gray-300 text-sm">See how we transform businesses with our signage solutions</p>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-lg p-3 lg:p-4 border border-primary/30">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-white/80">Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-orange-500/90 backdrop-blur-sm rounded-lg p-3 lg:p-4 border border-orange-500/30">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">9+</div>
                  <div className="text-xs text-white/80">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Video Section - Shows below content on mobile */}
        <div className="lg:hidden mt-8" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 overflow-hidden">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/nzM2OwncPd8?autoplay=1&mute=1&loop=1&playlist=nzM2OwncPd8&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&end=0"
                title="Vayu Creation - Signage Solutions"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  border: 'none',
                  borderRadius: '0.75rem'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            <div className="text-center space-y-2 mt-4">
              <h3 className="text-lg font-semibold">Watch Our Work</h3>
              <p className="text-gray-300 text-sm">See how we transform businesses with our signage solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

