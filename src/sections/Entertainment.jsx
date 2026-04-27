import { motion } from "framer-motion";

export default function Entertainment() {
  return (
    <section
      className="relative min-h-screen flex items-center px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2)",
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
          Entertainment
        </h2>

        <p className="text-gray-300">
          Attractions and immersive experiences driving engagement.
        </p>
      </motion.div>
    </section>
  );
}