import { motion } from "framer-motion";

export default function Why() {
  return (
    <section className="py-32 px-16 bg-black">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16"
        >
          Why This Property
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[ 
            { title: "100M+", sub: "Annual Visitors" },
            { title: "1,200+", sub: "Retail Stores" },
            { title: "Global", sub: "200+ Countries" }
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-neutral-800 p-12 rounded-2xl text-center cursor-pointer"
            >
              <h3 className="text-4xl font-bold">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.sub}</p>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}