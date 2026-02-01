import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../Style/Services.css";

export default function Services() {

  const images = [
    "https://images.unsplash.com/photo-1625047504248-ec4c2f64d5b6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1625047504236-ec4c2f64d5b6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&q=80"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-section max-w">
      <h2 className="services-title">Our Services</h2>

      <div className="services-container">

        {/* LEFT SIDE - IMAGE SLIDER */}
        <div className="services-left">
          <motion.img
            key={index}
            src={images[index]}
            alt="Service"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* RIGHT SIDE - ICONS WITH TEXT */}
        <div className="services-right">

          <div className="service-box">
            <span>🛠️</span>
            <h4>General Service</h4>
          </div>

          <div className="service-box">
            <span>🚨</span>
            <h4>Vehicle Breakdown</h4>
          </div>

          <div className="service-box">
            <span>🔧</span>
            <h4>Engine Repair</h4>
          </div>

          <div className="service-box">
            <span>🛞</span>
            <h4>Tyre Service</h4>
          </div>

          <div className="service-box">
            <span>🔋</span>
            <h4>Battery Check</h4>
          </div>

          <div className="service-box">
            <span>🧰</span>
            <h4>Spare Parts</h4>
          </div>

        </div>

      </div>
    </section>
  );
}
