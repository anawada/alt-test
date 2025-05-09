import React, { useState, useRef } from 'react';

function FAQs() {
  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "Do you offer 24hr support?",
      answer: "Yes, we offer 24/7 support for all our enterprise clients. Our support team is available to assist you with any issues or questions you might have at any time of day or night."
    },
    {
      id: 2,
      question: "Do you sell Xerox printers?",
      answer: "Yes, we are an authorized Xerox partner and offer a full range of Xerox printing solutions, from small office printers to enterprise-grade multifunction devices."
    },
    {
      id: 3,
      question: "Can I upgrade my support package?",
      answer: "Absolutely. We offer flexible support packages that can be upgraded at any time to meet your changing business needs. Contact your account manager to discuss your options."
    },
    {
      id: 4,
      question: "Do you offer 24hr support?",
      answer: "Yes, we offer 24/7 support for all our enterprise clients. Our support team is available to assist you with any issues or questions you might have at any time of day or night."
    },
    {
      id: 5,
      question: "Do you sell Xerox printers?",
      answer: "Yes, we are an authorized Xerox partner and offer a full range of Xerox printing solutions, from small office printers to enterprise-grade multifunction devices."
    },
    {
      id: 6,
      question: "Do you sell Xerox printers?",
      answer: "Yes, we are an authorized Xerox partner and offer a full range of Xerox printing solutions, from small office printers to enterprise-grade multifunction devices."
    },
    {
      id: 7,
      question: "Do you sell Xerox printers?",
      answer: "Yes, we are an authorized Xerox partner and offer a full range of Xerox printing solutions, from small office printers to enterprise-grade multifunction devices."
    },
    {
      id: 8,
      question: "Do you sell Xerox printers?",
      answer: "Yes, we are an authorized Xerox partner and offer a full range of Xerox printing solutions, from small office printers to enterprise-grade multifunction devices."
    },
    {
      id: 9,
      question: "Do you sell Xerox printers?",
      answer: "Yes, we are an authorized Xerox partner and offer a full range of Xerox printing solutions, from small office printers to enterprise-grade multifunction devices."
    }
  ];

  // State to track which FAQ is expanded
  const [expandedId, setExpandedId] = useState(null);

  // Toggle expand/collapse
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const answerRefs = useRef({});

  return (
    <div className="py-10 md:py-20 text-white">
      <div className="mx-auto md:ps-10 md:ml-0">
        <h2 className="text-4xl font-bold mb-12">FAQ's</h2>
        
        <div className="space-y-2 border-b border-gray-700">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border-t border-gray-700 ${index === faqData.length - 1 && expandedId !== faq.id ? 'pb-3' : ''}`}
            >
              <button
                className="w-full py-3 text-left flex justify-between items-center cursor-pointer hover:text-brand transition-colors duration-300"
                onClick={() => toggleExpand(faq.id)}
              >
                <span className="text-xl md:text-2xl">{faq.question}</span>
                <span className="text-xl md:text-2xl transform transition-transform duration-300">
                  {expandedId === faq.id ? '-' : '+'}
                </span>
              </button>
              
              <div
                ref={el => answerRefs[faq.id] = el}
                style={{
                  maxHeight: expandedId === faq.id
                    ? answerRefs[faq.id]?.scrollHeight + 'px'
                    : '0px',
                  transition: 'max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s',
                  opacity: expandedId === faq.id ? 1 : 0,
                  overflow: 'hidden',
                }}
              >
                <div className="pb-6 font-mono text-sm">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <a href="#" className="text-white underline underline-offset-3 hover:text-brand font-mono text-xs">View all FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default FAQs; 