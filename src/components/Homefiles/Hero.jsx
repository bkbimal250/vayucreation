import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useContactModal } from '../../common/ContactModalContext';

const Hero = () => {
  const { openModal } = useContactModal();
  
  return (
    <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            className="space-y-6 md:space-y-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="inline-block">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                #1 Signage Company in Mumbai
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Brand Identity With Our{' '}
              <span className="text-primary">LED Sign Board</span> Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Engage your customers with clear and loud interactive screens for lasting impressions. 
              9 years of experience in delivering premium signage solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Explore Services
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button onClick={openModal} className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary inline-flex items-center justify-center">
                Get a Quote
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Direct Purchase</div>
                  <div className="text-sm text-gray-400">No middleman costs</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Professional Designs</div>
                  <div className="text-sm text-gray-400">Creative solutions</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Cost Effective</div>
                  <div className="text-sm text-gray-400">Best value deals</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Maximum ROI</div>
                  <div className="text-sm text-gray-400">Proven results</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div 
            className="relative hidden md:block"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-957804506-669a67965ba0?w=800&h=800&fit=crop"
                alt="LED Signage"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-secondary p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-primary">2000+</div>
                <div className="text-sm font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

