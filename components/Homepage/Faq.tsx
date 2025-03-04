'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    }


const FAQItem : React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-[0.1px] border-white/45">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="outline-none w-full py-6 flex items-center justify-between text-left"
      >
        <span className="outline-none text-[16px] font-bold tracking-wide">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="outline-none flex items-center justify-center"
        >
          {/* <Plus className="outline-none w-6 h-6 " /> */}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden outline-none"
          >
            <div className="outline-none pb-6 text-[15px] md:text-[17px] font-bold text-[#7b7b7b]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "Where are we located?",
      answer: "Our real estate activities are located in Europe and the United States."
    },
    {
      question: "What activities do we partake in?",
      answer: "Our activities range from Investment, advisory and proptech."
    },
    {
      question: "What is Proptech?",
      answer: "Proptech is a combination of technological advancements to enhance the way properties are bought, sold, managed, and experienced through cutting-edge software."
    },
    {
      question: "Do we invest in startups?",
      answer: "Yes we do."
    },
  ];

  return (
    <div className="outline-none">
      <h1 className="outline-none text-4xl font-bold mb-12 ">Learn more</h1>
      <div className="outline-none space-y-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;