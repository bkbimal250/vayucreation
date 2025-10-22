import { useState } from 'react';
import FAQItem from '../FAQItem';
import { faqData } from '../../data/faqData';

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayFAQs = showAll ? faqData : faqData.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* OUR FAQ'S with red lines */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 bg-red-500"></div>
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider mx-4">
              OUR FAQ'S
            </span>
            <div className="w-8 h-0.5 bg-red-500"></div>
          </div>
          
          {/* Need More Help? heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Need More Help?
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {displayFAQs.slice(0, Math.ceil(displayFAQs.length / 2)).map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
            
            {/* Right Column */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {displayFAQs.slice(Math.ceil(displayFAQs.length / 2)).map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        </div>

        {!showAll && faqData.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              Show More FAQs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;

