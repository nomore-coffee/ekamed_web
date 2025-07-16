// src/components/PricingCards.jsx
import { FaInfinity, FaCalendarAlt, FaCoins } from "react-icons/fa"; // or use your own icons

const cards = [
  {
    icon: <FaInfinity className="text-4xl text-[#2C69D1]" />,
    title: "Free Forever",
    bullets: [
      "Core mobile apps with unlimited patient and staff access",
      "Essential logging and access management - no expiration",
      "Perfect for starting your digital journey",
    ],
    link: "#",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-[#2C69D1]" />,
    title: "6 Months Free",
    bullets: [
      "Extended 6-month evaluation with dedicated implementation support",
      "Enterprise-grade features with priority technical assistance",
      "Exclusive for hospitals ready to commit to long-term digital transformation",
    ],
    link: "#",
  },
  {
    icon: <FaCoins className="text-4xl text-[#2C69D1]" />,
    title: "Free Trial",
    bullets: [
      "Complete 1-month trial of all clinical and administrative modules",
      "Unlimited transactions no usage caps +₹10K Credit on first billing",
      "Full feature access to evaluate fit for your hospital workflow",
    ],
    link: "#",
  },
];

export default function PricingCards() {
  return (
    <section className="bg-[#eaf2fc] py-16 px-4">
      <h2 className="mb-12 text-center text-3xl font-semibold text-[#2C69D1]">
        Start Simple, Scale Smart
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="mb-4 text-lg font-semibold text-[#2C69D1]">
              {card.title}
            </h3>
            <ul className="mb-6 list-disc space-y-2 pl-4 text-sm text-gray-700">
              {card.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a
              href={card.link}
              className="text-sm font-medium text-gray-500 underline-offset-2 hover:underline"
            >
              Learn More <span className="text-xs">ℹ️</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
