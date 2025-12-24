import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/landing/hero1.jpg",
  "/assets/landing/hero2.jpg",
  "/assets/landing/hero3.jpg",
  "/assets/landing/hero7.jpg",
  "/assets/landing/hero5.jpg",
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-20 px-6 md:px-12 lg:px-20">
      <div className="relative h-[85vh] overflow-hidden rounded-2xl">

        {/* Animated Background Slider */}
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Work Your Way
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            You bring the skill. We’ll make earning easy.
          </p>

          {/* CTA Button */}
          <a
            href="/signup"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg transition"
          >
            Become a Seller
          </a>

          {/* Stats */}
          <div className="absolute bottom-8 w-full grid grid-cols-3 gap-6 text-center text-white px-6">
            <div>
              <p className="text-xs uppercase opacity-80">
                A Gig Bought Every
              </p>
              <p className="text-3xl font-bold">4 SEC</p>
            </div>

            <div>
              <p className="text-xs uppercase opacity-80">
                Transactions
              </p>
              <p className="text-3xl font-bold">50M+</p>
            </div>

            <div>
              <p className="text-xs uppercase opacity-80">
                Price Range
              </p>
              <p className="text-3xl font-bold">
                $5 – $10,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
