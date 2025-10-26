import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, CaretUp } from "revoicons";

export type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'How does Singari personalize my investment portfolio?',
    answer: 'Singari uses advanced AI and behavioral insights to analyze your financial goals, risk tolerance, and life circumstances. Our platform continuously adapts your portfolio in real-time based on market trends, personal milestones, and cash flow changes to keep your investments aligned with your unique financial genome.'
  },
  {
    question: 'What makes us different from other investment apps?',
    answer: 'Unlike traditional investment apps, Singari combines behavioral finance with AI-driven insights to create truly personalized portfolios. We provide clear, plain-language explanations for every decision, gamified guidance to build confidence, and adaptive strategies that evolve with your life. Our focus is on empowering you with transparency and human-centric intelligence.'
  },
  {
    question: 'Is my financial and personal data safe with Singari?',
    answer: 'Absolutely. We use bank-level encryption and follow industry-leading security protocols to protect your data. Your information is anonymized and used solely to improve recommendations while maintaining your privacy. We are committed to ethical, community-driven practices and will never sell your personal data.'
  },
  {
    question: 'When will I be able to start using Singari after joining the waitlist?',
    answer: 'We\'re currently in our pre-launch phase and building our community of early adopters. Waitlist members will get priority access when we launch, along with exclusive benefits and early-bird features. We\'ll keep you updated via email on our progress and your access timeline.'
  },
  {
    question: 'Are there any fees or costs associated with Singari once it launches?',
    answer: 'We believe in transparent pricing. While we\'re still finalizing our fee structure, we\'re committed to keeping costs competitive and clear. Early waitlist members will receive special pricing benefits. We\'ll share detailed pricing information before launch, with no hidden fees or surprises.'
  }
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="border-b border-[#d5d5d5] py-4 cursor-pointer"
    >
      <div className="flex justify-between items-center w-full text-left font-normal text-black">
      <span className="flex items-start">
        <span className="w-6 md:w-12 font-satoshi">{index + 1}.</span>
        <span className="text-base md:text-lg pr-4 text-black font-satoshi">{faq.question}</span>
      </span>
        {open ? <CaretUp size={20} /> : <CaretDown size={20} />}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 font-light text-base md:text-lg pl-6 md:pl-12 pr-12 text-black/70"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="">
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </div>
      {visibleCount < faqs.length && (
        <div className="mt-6 flex justify-center md:justify-start">
          <button
            onClick={() => setVisibleCount(faqs.length)}
            className="w-[80%] md:w-fit text-sm px-8 py-2 rounded-md bg-black text-white border border-black hover:bg-white hover:text-black cursor-pointer transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}