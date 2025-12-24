import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is ProConnect?",
    answer:
      "ProConnect is a freelance marketplace that helps skilled professionals connect with clients and earn by offering services.",
  },
  {
    question: "How do I become a seller?",
    answer:
      "Simply click on the 'Become a Seller' button, register your account, and start listing your services.",
  },
  {
    question: "Is joining ProConnect free?",
    answer:
      "Yes, creating an account and browsing services on ProConnect is completely free.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are handled securely through the platform. Funds are released once the service is successfully delivered.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked <span className="text-green-600">Questions</span>
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              <span className="text-green-600 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer (Animated) */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 overflow-hidden"
                >
                  <p className="py-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
