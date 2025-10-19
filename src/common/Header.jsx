import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useContactModal } from './ContactModalContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaPhone className="text-xs" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@vardansigns.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaEnvelope className="text-xs" />
              <span>info@vardansigns.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-1 rounded-full transition-colors"
            >
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold">
              <img src='/logo.jpg' className='w-20 h-20' />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`font-medium transition-colors relative ${
                      isActive(link.path)
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <button onClick={openModal} className="btn-primary">
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-2xl text-secondary p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <span className="text-xl font-bold text-primary">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-secondary"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col gap-2 p-6 flex-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="p-6 border-t">
              <button onClick={openModal} className="btn-primary w-full text-center block">
                Get a Quote
              </button>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary">
                  <FaPhone className="text-xs" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:info@vardansigns.com" className="flex items-center gap-2 hover:text-primary">
                  <FaEnvelope className="text-xs" />
                  <span>info@vardansigns.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}
      </header>
    </>
  );
};

export default Header;

