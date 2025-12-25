const TrustScore = ({ score }) => {
  const getColor = (score) => {
    if (score <= 40) return 'text-red-600 stroke-red-600';
    if (score <= 70) return 'text-yellow-600 stroke-yellow-600';
    return 'text-green-600 stroke-green-600';
  };

  const colorClass = getColor(score);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-gray-900 text-lg font-semibold mb-4">Trust Score</h3>
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <path
              d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
              fill="none"
              strokeWidth="2"
              strokeDasharray={`${score}, 100`}
              className={colorClass.split(' ')[1]}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-sm font-bold ${colorClass.split(' ')[0]}`}>{score}</span>
          </div>
        </div>
        <div>
          <p className={`text-2xl font-bold ${colorClass.split(' ')[0]}`}>{score}/100</p>
          <p className="text-gray-600 text-sm">Trust Score</p>
        </div>
      </div>
      <p className="text-gray-500 text-xs mt-3">
        Based on completed projects, reviews, and platform activity
      </p>
    </div>
  );
};

export default TrustScore;