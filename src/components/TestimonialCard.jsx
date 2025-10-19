import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.position}</p>
          {testimonial.company && (
            <p className="text-xs text-gray-500">{testimonial.company}</p>
          )}
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
    </div>
  );
};

export default TestimonialCard;

