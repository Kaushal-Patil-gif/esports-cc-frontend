import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const communityCards = [
  {
    title: "I am a Designer",
    image: "/assets/community/designer.jpg",
    description:
      "ProConnect has allowed me to make connections to a wide variety of markets all over the globe. It has been a guaranteed source of income throughout my design career.",
  },
  {
    title: "I am a Developer",
    image: "/assets/community/developer.jpg",
    description:
      "I’m extremely satisfied working on this platform while supporting my family and exploring global opportunities.",
  },
  {
    title: "I am a Writer",
    image: "/assets/community/writer.jpg",
    description:
      "This platform helped me turn my passion for storytelling into a full-time career.",
  },
  {
    title: "I am a Video Editor",
    image: "/assets/community/editor.jpg",
    description:
      "I’ve connected with musicians, speakers, and businesses worldwide.",
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
      "Photographers capture professional photos for events and brands.",
  },
  {
    title: "I am a Consultant",
    image: "/assets/community/consultant.jpg",
    description:
      "Consultants help businesses improve performance and decision-making.",
  },
  {
    title: "What’s\nYour\nSkill?",
    image: "/assets/community/your-skill.jpg",
    description:
      "Join the community and showcase your unique skills globally.",
  },
];

function Community() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      {/* ================= COMMUNITY SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Join our growing freelance{" "}
          <span className="text-green-600">Community</span>
        </h2>

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

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center leading-tight px-4">
                {card.title.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
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

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-gray-50 rounded-xl mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How it <span className="text-green-600">works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">1. Create a Gig</h3>
            <p className="text-gray-600">
              Sign up for free, set up your Gig, and offer your work to a global
              audience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              2. Deliver great work
            </h3>
            <p className="text-gray-600">
              Communicate with customers and deliver high-quality work on time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">3. Get paid</h3>
            <p className="text-gray-600">
              Get paid securely and withdraw earnings when cleared.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
