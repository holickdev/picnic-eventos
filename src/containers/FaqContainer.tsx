import { useState } from "react";
import { FaqItem } from "@/components/FaqItem";

interface Faq {
  question: string;
  answer: string;
}

interface FaqContainerProps {
  faqs: Faq[];
}

export function FaqContainer({ faqs }: FaqContainerProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FaqItem
          faq={faq}
          index={index}
          openIndex={openIndex}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </div>
  );
}
