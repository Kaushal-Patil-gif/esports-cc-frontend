import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const communityCards = [
  {
    title: "I am a Designer",
    image: "/assets/community/designer.jpg",
    description:
      "ProConnect has allowed me to make connections to a wide variety of markets all over the globe. Fiverr has been by my side as what is felt like a guaranteed source of income through my entire graphic design career. Tom N. Guernsey, United KingdomDesigners create visual experiences including UI/UX, branding, graphics, and product designs.",
  },
  {
    title: "I am a Developer",
    image: "/assets/community/developer.jpg",
    description:
      "Fiverr has changed my life in ways i could only dream of. I’m extremely satisfied working on this platform while supporting my family and exploring the world with new opportunities",
  },
  {
    title: "I am a Writer",
    image: "/assets/community/writer.jpg",
    description:
      "Through Fiverr Pro, I have been able to help people tell their stories and get their messages out into the world. Without Fiverr, I never would have been able to make my passion into my living!"
  },
  {
    title: "I am a Video Editor",
    image: "/assets/community/editor.jpg",
    description:
      "Fiverr gave me the opportunity to connect with clients from all over the world; famous musicians, amazing speakers and business owners. I would not be where I am today without Fiverr!"
  },
  {
    title: "I am a Marketer",
    image: "/assets/community/marketer.jpg",
    description:
      "Marketers grow brands through digital campaigns, SEO, ads, and strategy.",
  },
  {
    title: "I am a Photographer",
    image: "/assets/community/photographer.jpg",
    description:
      "Photographers capture professional photos for events, products, and portfolios.",
  },
  {
    title: "I am a Consultant",
    image: "/assets/community/consultant.jpg",
    description:
      "Consultants provide expert advice to help businesses improve performance.",
  },
  {
    title: "What’s\nYour\nSkill?",
    image: "/assets/community/your-skill.jpg",
    description:
      "Join the community and showcase your unique skills to a global audience.",
  },
];

function Community() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Join our growing freelance{" "}
        <span className="text-green-600"> Community</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {communityCards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedCard(card)}
            className="relative group h-64 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

            <div className="absolute bottom-6 left-6 text-white text-xl font-bold leading-tight">
              {card.title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dialog / Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-md w-full p-6"
            >
              <h3 className="text-2xl font-bold mb-4">
                {selectedCard.title.replace(/\n/g, " ")}
              </h3>

              <p className="text-gray-600 mb-6">
                {selectedCard.description}
              </p>

              <button
                onClick={() => setSelectedCard(null)}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Community;
