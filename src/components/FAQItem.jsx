import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-secondary pr-4">{faq.question}</span>
        <span className="text-primary flex-shrink-0">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 md:p-6 pt-0 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;

