import { useState } from "react";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, it is adjustable and designed to fit different body types comfortably.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Yes, consistent use may help reduce strain and improve posture over time.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some advanced models include smart reminder features for posture correction.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can subscribe with your email to receive instant notifications.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Question (FAQ)
        </h2>

        <p className="text-gray-500 mb-10">
          Enhance posture, mobility, and well-being effortlessly.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`collapse collapse-arrow rounded-xl border ${
                openIndex === index
                  ? "collapse-open bg-base-100 border-primary"
                  : "bg-base-100"
              }`}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="collapse-title font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="btn btn-primary rounded-full px-8">
            See More FAQ’s →
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
