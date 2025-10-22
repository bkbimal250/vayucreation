import { useState, useEffect, useRef } from 'react';
import { FaProjectDiagram, FaClock, FaUsers, FaUserTie } from 'react-icons/fa';

const StatCard = ({ stat }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  // Extract numeric value from stat.number (e.g., "2000+" -> 2000)
  const getNumericValue = (numberString) => {
    const match = numberString.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const targetValue = getNumericValue(stat.number);
  const suffix = stat.number.replace(/\d+/g, ''); // Extract non-numeric part (e.g., "+")

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  // Counter animation with easing
  useEffect(() => {
    if (isVisible && count < targetValue) {
      const duration = 2500; // 2.5 seconds animation
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out cubic)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = targetValue * easeOutCubic;
        
        setCount(Math.floor(currentValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, targetValue]);

  const getIcon = (iconType) => {
    const iconClass = "text-5xl text-primary transition-all duration-500";
    switch (iconType) {
      case 'projects':
        return <FaProjectDiagram className={iconClass} />;
      case 'experience':
        return <FaClock className={iconClass} />;
      case 'clients':
        return <FaUsers className={iconClass} />;
      case 'team':
        return <FaUserTie className={iconClass} />;
      default:
        return <FaProjectDiagram className={iconClass} />;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`text-center p-6 md:p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className={`mb-4 flex justify-center transition-all duration-500 ${
        isVisible ? 'scale-100' : 'scale-75'
      }`}>
        {getIcon(stat.icon)}
      </div>
      <div className={`text-4xl md:text-5xl font-bold text-secondary mb-2 transition-all duration-300 ${
        isVisible ? 'animate-pulse' : ''
      }`}>
        {Math.floor(count)}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </div>
  );
};

export default StatCard;

