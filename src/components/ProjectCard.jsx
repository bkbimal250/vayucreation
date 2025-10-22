import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendar, FaTag, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/our-work/${project.id}`}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group block"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="relative overflow-hidden h-56 md:h-64">
        <img
          src={project.thumbnail || project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        
        <div className="space-y-2 text-sm text-gray-600 mb-4">
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

        <div className="flex items-center gap-2 text-primary font-semibold group">
          View Details
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

