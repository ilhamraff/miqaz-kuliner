import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What makes Miqaz products different from other frozen foods?",
    answer:
      "Our products are crafted exclusively from 100% fresh fish using authentic Indonesian recipes passed down through generations. We use advanced flash-freezing technology that locks in nutrients and flavor at peak freshness, ensuring restaurant-quality taste in every bite. Our facility is halal-certified and meets strict hygiene standards.",
  },
  {
    question: "How should I store the products after delivery?",
    answer:
      "All Miqaz products should be stored in your freezer at -18°C or below immediately upon delivery. Our vacuum-sealed packaging preserves freshness for up to 3 months when stored properly. Once thawed, products should be consumed within 24 hours for the best taste experience.",
  },
  {
    question: "Are your products halal certified?",
    answer:
      "Yes, all Miqaz Nusantara Kuliner products are halal certified. Our entire production process — from ingredient sourcing to packaging — adheres to strict halal standards. We are committed to providing products that meet the dietary requirements of our customers.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We currently deliver across major cities in Indonesia using cold-chain logistics to ensure products arrive in perfect frozen condition. For specific delivery areas and shipping options, please contact us via WhatsApp and our team will be happy to assist you.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Ordering is easy! Simply click the 'Order Now' button or contact us directly via WhatsApp. Our friendly team will guide you through the product selection, confirm your order details, and arrange delivery to your preferred address.",
  },
];

export function Faq() {
  return (
    <section
      className="bg-white py-24 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            Everything you need to know about our products and ordering process.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12">
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                className="border-b border-border py-1"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-dark-green hover:no-underline [&>svg]:text-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-dark-green/70">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
