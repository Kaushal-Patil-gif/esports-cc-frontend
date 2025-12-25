import { useState } from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    id: 1,
    title: "Valorant Montage Edit",
    description: "High-energy gameplay compilation with sync effects",
    image: "https://via.placeholder.com/300x200/16a34a/ffffff?text=Valorant+Edit"
  },
  {
    id: 2,
    title: "CS2 Tournament Highlights",
    description: "Professional tournament coverage with cinematic transitions",
    image: "https://via.placeholder.com/300x200/16a34a/ffffff?text=CS2+Highlights"
  },
  {
    id: 3,
    title: "Apex Legends Thumbnail Pack",
    description: "Eye-catching thumbnails with dynamic character poses",
    image: "https://via.placeholder.com/300x200/16a34a/ffffff?text=Apex+Thumbnails"
  },
  {
    id: 4,
    title: "Fortnite Stream Overlay",
    description: "Custom overlay design with animated elements",
    image: "https://via.placeholder.com/300x200/16a34a/ffffff?text=Fortnite+Overlay"
  }
];

const PortfolioGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-gray-900 text-xl font-semibold mb-6">Portfolio</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -4 }}
            className="relative group cursor-pointer rounded-xl overflow-hidden border border-gray-200"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition">
                  View Project
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h4 className="text-white font-medium">{item.title}</h4>
              <p className="text-gray-200 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedItem(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-2xl mx-4 border border-gray-200" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-900 text-xl font-semibold">{selectedItem.title}</h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <p className="text-gray-600">{selectedItem.description}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;