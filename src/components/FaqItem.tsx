import { motion } from "motion/react";
import { ArrowLeft, ChevronDown, HelpCircle } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

interface FaqItemProps {
  faq: Faq;
  index: number;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
}

export function FaqItem({
  faq,
  index,
  openIndex,
  toggleFAQ
}: FaqItemProps) {
  const isOpen = openIndex === index;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[var(--color-dusty-rose)]/10"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-6 md:px-8 py-6 md:py-8 flex items-center justify-between gap-4 hover:bg-[var(--color-soft-sand)]/20 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-[var(--color-graphite)] flex-1 text-left">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-[var(--color-dusty-rose)]" />
        </motion.div>
      </button>

      {/* Siempre renderizado server-side - visibilidad controlada por CSS */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
          <div className="p-6 md:p-8 bg-gradient-to-br from-[var(--color-dusty-rose)]/5 to-[var(--color-dusty-rose)]/10 rounded-2xl border border-[var(--color-dusty-rose)]/10">
            <p className="text-[var(--color-graphite)]/80 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
