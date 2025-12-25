const timelineData = [
  {
    id: 1,
    title: "Project Kickoff",
    status: "completed",
    dueDate: "2024-01-15",
    description: "Initial briefing and requirements gathering"
  },
  {
    id: 2,
    title: "First Draft Delivery",
    status: "completed",
    dueDate: "2024-01-20",
    description: "Raw footage edit with basic transitions"
  },
  {
    id: 3,
    title: "Revision Round 1",
    status: "in-progress",
    dueDate: "2024-01-25",
    description: "Client feedback implementation"
  },
  {
    id: 4,
    title: "Final Delivery",
    status: "pending",
    dueDate: "2024-01-30",
    description: "Color graded final version with audio mix"
  }
];

const ProjectTimeline = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600 border-green-600 text-green-600';
      case 'in-progress':
        return 'bg-blue-600 border-blue-600 text-blue-600';
      case 'pending':
        return 'bg-gray-400 border-gray-400 text-gray-400';
      default:
        return 'bg-gray-400 border-gray-400 text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'in-progress':
        return (
          <svg className="w-4 h-4 text-white animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-gray-900 text-xl font-semibold mb-6">Project Timeline</h3>
      
      <div className="relative">
        {timelineData.map((milestone, index) => (
          <div key={milestone.id} className="relative flex items-start mb-8 last:mb-0">
            {/* Timeline Line */}
            {index < timelineData.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 h-16 bg-gray-200"></div>
            )}
            
            {/* Status Icon */}
            <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${getStatusColor(milestone.status).split(' ')[0]} ${getStatusColor(milestone.status).split(' ')[1]}`}>
              {getStatusIcon(milestone.status)}
            </div>
            
            {/* Content */}
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-gray-900 font-medium">{milestone.title}</h4>
                <span className="text-gray-500 text-sm">{milestone.dueDate}</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{milestone.description}</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${
                milestone.status === 'completed' ? 'bg-green-50 text-green-700 border border-green-200' :
                milestone.status === 'in-progress' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                'bg-gray-50 text-gray-600 border border-gray-200'
              }`}>
                {milestone.status.replace('-', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;