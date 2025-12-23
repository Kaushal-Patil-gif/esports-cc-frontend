import { motion } from "framer-motion";
import PriceTag from "../marketplace/PriceTag";

export default function Card({ title, description, price }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        border
        border-gray-200
      "
    >
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      <div className="flex justify-between items-center">
        <PriceTag price={price} />

        <button className="text-sm text-green-600 font-medium hover:underline">
          View Details →
        </button>
      </div>
    </motion.div>
  );
}