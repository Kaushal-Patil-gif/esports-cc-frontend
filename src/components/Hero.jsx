import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-5xl mx-auto px-6 py-28"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Hire <span className="text-green-600">Top Professionals</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Verified experts for serious business needs
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
          Explore Services
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Become a Pro
        </button>
      </div>
    </motion.section>
  );
}

export default Hero;
