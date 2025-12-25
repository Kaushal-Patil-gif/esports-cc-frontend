import TrustScore from '../../components/profile/TrustScore';
import PortfolioGallery from '../../components/profile/PortfolioGallery';
import { motion } from 'framer-motion';

const freelancerData = {
  name: "Alex Chen",
  role: "Video Editor & Motion Graphics",
  avatar: "https://via.placeholder.com/120x120/16a34a/ffffff?text=AC",
  verified: true,
  trustScore: 87,
  bio: "Professional esports video editor with 5+ years of experience creating content for top streamers and tournament organizers. Specialized in Valorant, CS2, and Apex Legends content.",
  services: ["Video Editing", "Motion Graphics", "Color Grading", "Audio Mixing", "Thumbnail Design"],
  rating: 4.8,
  totalReviews: 156
};

const FreelancerProfile = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-6"
        >
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={freelancerData.avatar}
                alt={freelancerData.name}
                className="w-24 h-24 rounded-full border-4 border-green-600"
              />
              {freelancerData.verified && (
                <div className="absolute -bottom-1 -right-1 bg-green-600 rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{freelancerData.name}</h1>
              <p className="text-green-600 text-lg mb-2 font-medium">{freelancerData.role}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {renderStars(freelancerData.rating)}
                  <span className="ml-2 text-gray-600">
                    {freelancerData.rating} ({freelancerData.totalReviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About</h3>
              <p className="text-gray-600 leading-relaxed">{freelancerData.bio}</p>
            </motion.div>

            {/* Skills & Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Services</h3>
              <div className="flex flex-wrap gap-2">
                {freelancerData.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200 hover:bg-green-100 transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <PortfolioGallery />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TrustScore score={freelancerData.trustScore} />
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects Completed</span>
                  <span className="text-gray-900 font-medium">142</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="text-green-600 font-medium">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="text-gray-900 font-medium">Jan 2022</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;