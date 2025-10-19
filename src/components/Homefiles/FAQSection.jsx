import { useState } from 'react';
import FAQItem from '../FAQItem';
import { faqData } from '../../data/faqData';

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayFAQs = showAll ? faqData : faqData.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our FAQ's
          </span>
          <h2 className="section-title mt-2">
            Need More Help?
          </h2>
          <p className="section-subtitle">
            Find answers to commonly asked questions about our signage services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {displayFAQs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
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

