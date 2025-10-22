import { useState } from 'react';
import { FaPlus, FaMinus, FaQuestion } from 'react-icons/fa';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-gray-200 last:border-b-0"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-0 text-left hover:bg-gray-50 transition-colors group"
      >
        <div className="flex items-center gap-3 flex-1">
          {/* Question Icon */}
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <FaQuestion className="text-white text-xs" />
          </div>
          
          {/* Question Text */}
          <span className="font-medium text-gray-800 text-left group-hover:text-blue-600 transition-colors">
            {faq.question}
          </span>
        </div>
        
        {/* Expand/Collapse Icon */}
        <div className="text-red-500 flex-shrink-0 ml-4">
          {isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
        </div>
      </button>
      
      {/* Answer Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 pl-9 pr-4 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;

