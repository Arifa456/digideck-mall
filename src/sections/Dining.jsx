import { motion } from "framer-motion";

export default function Dining() {
  return (
    <section
      className="relative min-h-screen flex items-center px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1559339352-11d035aa65de)",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-4">
          Dining & Lifestyle
        </h2>

        <p className="text-gray-300">
          A global culinary destination blending luxury dining and vibrant street food.
        </p>
      </motion.div>
    </section>
  );
}