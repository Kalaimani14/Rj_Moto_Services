import { motion } from "framer-motion";
import "../Style/OurValues.css";

export default function OurValues() {
  const values = [
    {
      icon: "🤝",
      title: "Integrity",
      desc: "We are honest, transparent, and trustworthy in every service we provide."
    },
    {
      icon: "⚙️",
      title: "Excellence",
      desc: "We strive for perfection in every repair and maintenance job."
    },
    {
      icon: "👨‍🔧",
      title: "Customer First",
      desc: "Your satisfaction and safety are our top priority."
    },
    {
      icon: "🌱",
      title: "Responsibility",
      desc: "We care for your vehicle and the environment."
    }
  ];

  return (
    <section className="values-section max-w">
      <h2 className="values-title">OUR VALUES</h2>
      <p className="values-subtitle">
        The principles that drive ProMechanic every day
      </p>

      <div className="values-container">
        {values.map((item, index) => (
          <motion.div
            className="value-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <span className="value-icon">{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
