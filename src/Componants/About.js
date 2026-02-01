import { motion } from "framer-motion";
import "../Style/About.css";

export default function About() {
  const services = [
    "General Service",
    "Vehicle Breakdown",
    "Engine Repair",
    "Tyre Service",
    "Battery Check",
    "Spare Parts"
  ];

  return (
    <section className="about-section max-w">
      <h2 className="about-title">About Rj Moto Services</h2>

      <div className="about-container">

        {/* LEFT: Logo + Description */}
        <motion.div
          className="about-left"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Hero_MotoCorp_Logo.svg" 
            alt="ProMechanic Logo" 
            className="about-logo"
          />
          <p>
            Rj Moto Services is Attur top multi-brand two-wheeler service center.
            We deliver fast, reliable, and high-quality service for all types of bikes.
          </p>
        </motion.div>

        {/* CENTER: Services List */}
        <motion.div
          className="about-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Our Services</h3>
          <ul>
            {services.map((service, i) => (
              <li key={i}>✅ {service}</li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT: Contact Details */}
        <motion.div
          className="about-right"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Contact Us</h3>
          <p>📞 Phone: +91 **********</p>
          <p>📧 Email: contact@promechanic.com</p>
          <p>📍 Address: 123 Main St,Attur, TN</p>
          <button className="about-btn">Book a Service</button>
        </motion.div>

      </div>
    </section>
  );
}
