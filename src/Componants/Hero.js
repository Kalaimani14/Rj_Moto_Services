import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../Style/Hero.css";

export default function Hero() {

  const heroImg =
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80";

  const text = "Procare • Trusted hands • Reliable checks • Smoother ride • Top performance • Better journey";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if(i < text.length){
        setDisplayText(prev => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="hero max-w"
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

        <motion.p className="typed-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {displayText}
        </motion.p>

        <p>GOOGLE REVIEWS 4.8 out of 708 Reviews</p>
        <p>★★★★★5/5</p>
        <p>Best Multi Brand Two Wheeler Service Center In Attur</p>

        <div className="btn-group">
          <button className="btn call">CALL : +91 9159456789</button>
          <button className="btn query">Raise Your Query</button>
          <button className="btn book">Book a Service</button>
        </div>
      </div>
    </motion.section>
  );
}
