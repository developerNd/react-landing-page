import React, { useState } from "react";
import underline from "../assets/images/underline.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Who is this for?",
      answer:
        "This is for anyone who wants to acquire more customers on the internet with REVERSE FUNNELS. Coaches, consultants, agency owners, artists, professional service providers, influencers, and content creators.",
    },
    {
      id: 2,
      question: "How is this different from other products?",
      answer:
        "It works. We have a proven track record of utilizing this for ourselves and our private clients. You don't need to be an expert to implement these strategies.",
    },
    {
      id: 3,
      question: "Is there a guarantee?",
      answer:
        "Yes, you get a 30-day no questions asked money-back guarantee in case it's not for you. You even get to keep the bonuses.",
    },
    {
      id: 4,
      question: "When can I access the bonuses?",
      answer:
        "You can access the bonuses after the 3 DAY LIVE event is finished!",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            <span className="bg-yellow-200 px-2">Frequently</span> Asked Questions
          </h2>
        </div>

        {/* Underline decoration */}
        <div className="flex justify-center mb-12">
          <img src={underline} alt="" className="h-1 w-32" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
              >
                <h3 className="text-sm md:text-base font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-900 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-900 text-sm md:text-base font-bold leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Section - Same background as section */}
        <div className="mt-16 text-center">
          {/* Copyright */}
          <p className="text-gray-900 font-semibold mb-4">
            Copyright © [2025],[Launch at scale]. All rights reserved.
          </p>

          {/* Disclaimer */}
          <p className="text-gray-600 text-sm">
            This site is not a part of the Meta™ Inc. Additionally, this site is
            not endorsed by Meta™ in any way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;