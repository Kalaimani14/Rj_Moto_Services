import { motion } from "framer-motion";
import "../Style/Reviews.css";

export default function CustomerReviews() {

  const reviews = [
    {
      name: "Arun Kumar",
      rating: 5,
      text: "Excellent service! My bike feels brand new after servicing. Highly recommended.",
      location: "attur"
    },
    {
      name: "Priya S",
      rating: 5,
      text: "Very professional team and quick delivery. Best multi-brand service center!",
      location: "Thalaivasal"
    },
    {
      name: "Ravi M",
      rating: 4,
      text: "Good experience, friendly staff, and transparent pricing.",
      location: "sarvoy"
    }
  ];

  return (
    <section className="reviews-section max-w">
      <h2 className="reviews-title">Customer Reviews</h2>
      <p className="reviews-subtitle">
        What our happy customers say about us
      </p>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <motion.div
            className="review-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stars">
              {"★".repeat(review.rating)}
            </div>

            <p className="review-text">"{review.text}"</p>

            <h4 className="review-name">{review.name}</h4>
            <span className="review-location">{review.location}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
