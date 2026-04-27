import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-40 text-center bg-gradient-to-b from-black to-neutral-900">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6"
      >
        Join the Future of Retail
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-gray-400 mb-10"
      >
        Be part of a global destination shaping the next generation of experiences.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-8 py-4 rounded-full font-semibold"
      >
        Contact Us
      </motion.button>

    </section>
  );
}