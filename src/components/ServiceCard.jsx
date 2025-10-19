import { Link } from 'react-router-dom';
import { FaCube, FaSquare, FaTv, FaCalendarAlt, FaBullhorn, FaLightbulb, FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  const getIcon = (iconType) => {
    const iconClass = "text-4xl text-primary";
    switch (iconType) {
      case '3d':
        return <FaCube className={iconClass} />;
      case '2d':
        return <FaSquare className={iconClass} />;
      case 'led':
        return <FaTv className={iconClass} />;
      case 'event':
        return <FaCalendarAlt className={iconClass} />;
      case 'billboard':
        return <FaBullhorn className={iconClass} />;
      case 'neon':
        return <FaLightbulb className={iconClass} />;
      default:
        return <FaCube className={iconClass} />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
      {/* Image Section */}
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
              {getIcon(service.icon)}
            </div>
          </div>
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
        {service.features && (
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-primary mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-semibold transition-colors group/link"
        >
          Learn More
          <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

