import { motion } from "framer-motion";
import "../Style/Brands.css";

export default function BrandsWeServe() {

  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Hero_MotoCorp_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/TVS_Motor_Company_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Bajaj_Auto_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/32/Honda_Motorcycle_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7e/Yamaha_Motor_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/Royal_Enfield_logo.svg"
  ];

  return (
    <section className="brands-section max-w">
      <h2 className="brands-title">BRANDS WE SERVE</h2>
      <p className="brands-subtitle">
        We service all major two-wheeler brands with expert care
      </p>

      <div className="brands-grid">
        {brands.map((logo, index) => (
          <motion.div
            className="brand-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="Brand logo" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
