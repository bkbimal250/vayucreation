import { Link } from 'react-router-dom';
import { FaClock, FaUser, FaTag } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="relative overflow-hidden h-48 md:h-56">
        <img
          src={blog.thumbnail || blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {blog.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FaUser className="text-xs" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-xs" />
            <span>{blog.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-secondary mb-3 line-clamp-2 hover:text-primary transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{blog.date}</span>
          <Link
            to={`/blogs/${blog.id}`}
            className="text-primary hover:text-orange-600 font-semibold text-sm flex items-center gap-2 group"
          >
            Read More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

