import { motion } from "framer-motion";

export default function Events() {
  return (
    <section
      id="events"
      className="relative min-h-screen flex items-center px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30)",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-6">
          Events & Platform
        </h2>

        <p className="text-gray-300 mb-6">
          Host global events, concerts, and brand activations.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold"
        >
          Book an Event
        </motion.button>
      </motion.div>
    </section>
  );
}