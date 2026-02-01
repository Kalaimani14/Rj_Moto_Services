import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../Style/Hero.css";

export default function Hero() {

  const heroImg =
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80";

  const words = ["Procare", "Trusted", "Reliable", "Smoother", "Performance", "Journey"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="overlay">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why RJ MOTO SERVICES ?
        </motion.h1>

        <motion.p
          className="fade-text"
          key={wordIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {words[wordIndex]}
        </motion.p>

        
        <p className="location">
          Best Multi Brand Two Wheeler Service Center In Salem...
        </p>

        <div className="btn-group">
          <button className="btn call">CALL : +91 6381413566</button>
          <button className="btn query">Raise Your Query</button>
          <button className="btn book">Book a Service</button>
        </div>
        <p className="review">GOOGLE REVIEWS 4.8 out of 708 Reviews</p>
        <p className="stars">★★★★★</p>
      </div>
    </motion.section>
  );
}
