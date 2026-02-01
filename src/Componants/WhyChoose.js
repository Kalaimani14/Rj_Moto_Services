import { motion } from "framer-motion";
import "../Style/WhyChoose.css";

export default function WhyChoose() {
  const reasons = [
    {
      icon: "🛠️",
      title: "Expert Technicians",
      desc: "Certified and highly skilled mechanics with years of experience."
    },
    {
      icon: "⏱️",
      title: "Quick Service",
      desc: "Fast and efficient service without compromising quality."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc: "Transparent and budget-friendly service packages."
    },
    {
      icon: "🔧",
      title: "Genuine Spare Parts",
      desc: "We use only original and high-quality parts."
    },
    {
      icon: "📞",
      title: "24/7 Support",
      desc: "Always available for breakdown and emergency service."
    },
    {
      icon: "⭐",
      title: "Trusted by Customers",
      desc: "Highly rated service center with happy customers."
    }
  ];

  return (
    <section className="why-section">
      <h2 className="why-title">WHY CHOOSE US</h2>

      <div className="why-container">
        {reasons.map((item, i) => (
          <motion.div
            className="why-box"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="why-icon">{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
