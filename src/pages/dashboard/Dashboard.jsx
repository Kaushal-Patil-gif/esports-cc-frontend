import ProjectTimeline from '../../components/project/ProjectTimeline';
import { motion } from 'framer-motion';

const dashboardData = {
  user: {
    name: "Alex Chen",
    role: "Freelancer" // or "Creator"
  },
  stats: {
    activeProjects: 3,
    completedProjects: 142,
    pendingMilestones: 5,
    earnings: 12450
  },
  recentProjects: [
    {
      id: 1,
      name: "Valorant Tournament Highlights",
      status: "Active",
      deadline: "2024-01-30",
      client: "ProGaming Org"
    },
    {
      id: 2,
      name: "Stream Overlay Package",
      status: "Completed",
      deadline: "2024-01-15",
      client: "StreamerX"
    },
    {
      id: 3,
      name: "CS2 Montage Edit",
      status: "Pending",
      deadline: "2024-02-05",
      client: "EsportsTeam"
    },
    {
      id: 4,
      name: "Thumbnail Design Pack",
      status: "Active",
      deadline: "2024-01-28",
      client: "ContentCreator"
    }
  ]
};

const Dashboard = () => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Dashboard Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {dashboardData.user.name}!
          </h1>
          <div className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
              {dashboardData.user.role}
            </span>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-blue-600"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.activeProjects}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-green-600"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed Projects</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.completedProjects}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-yellow-600"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Milestones</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.stats.pendingMilestones}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-green-600"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">₹{dashboardData.stats.earnings.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Projects</h3>
            <div className="space-y-4">
              {dashboardData.recentProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  whileHover={{ y: -2 }}
                  className="bg-gray-50 p-4 rounded-xl hover:shadow-sm transition-all border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-900 font-medium">{project.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Client: {project.client}</span>
                    <span className="text-gray-600">Due: {project.deadline}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ProjectTimeline />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;