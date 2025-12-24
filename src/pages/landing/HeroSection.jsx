import { motion } from "framer-motion";
import Button from "../../components/common/Button";

function HeroSection() {
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
        <Button variant="primary">
          Explore Services
        </Button>
        <Button variant="secondary">
          Become a Pro
        </Button>
      </div>
    </motion.section>
  );
}

export default HeroSection;