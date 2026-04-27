import { motion } from "framer-motion";

export default function Retail() {
  return (
    <section id="retail" className="py-32 px-16 bg-neutral-900">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-10"
      >
        Retail Experience
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">

        {[1,2,3].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative h-72 overflow-hidden rounded-2xl group"
          >
            <img
              src={`/images/retail${i}.jpg`}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-lg font-semibold">Premium Retail</p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}