import { useState } from "react";
import { FaqItem } from "@/components/FaqItem";

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "¿Cómo reservo?",
    answer:
      "Para apartar tu fecha, solicitamos un 50% del costo total del evento como anticipo. El pago restante se realiza el día del evento. Aceptamos transferencias y efectivo como métodos de pago.",
  },
  {
    question: "¿Dónde ofrecen servicio?",
    answer:
      "Nuestra área de cobertura principal incluye Mariño y Maneiro. Si tu evento está fuera de estas zonas, podemos atenderlo con un costo adicional de transporte.",
  },
  {
    question: "¿Qué pasa si llueve o cancelo?",
    answer:
      "Las cancelaciones deben realizarse con mínimo 5 días de anticipación para poder reembolsar el anticipo. De lo contrario, no se reembolsa. Importante: el mobiliario no puede mojarse. Si los cojines se mojan, se realizará un cargo extra.",
  },
];

export function FaqContainer() {
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
