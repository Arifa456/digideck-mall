import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="overview" className="h-screen w-full relative overflow-hidden">

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-16">

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-bold leading-tight tracking-tight drop-shadow-2xl"
        >
          The Future <br /> of Retail
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg max-w-xl text-gray-300"
        >
          Where luxury brands, entertainment, and global experiences converge.
        </motion.p>

      </div>
    </div>
  );
} 