const ReportedIssues = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Reported Issues</h2>

      <ul className="space-y-3">
        <li className="border p-3 rounded-lg">
          <p className="font-semibold">Spam Content</p>
          <p className="text-sm text-gray-500">Reported by BrandX</p>
        </li>
        <li className="border p-3 rounded-lg">
          <p className="font-semibold">Fake Engagement</p>
          <p className="text-sm text-gray-500">Reported by Admin</p>
        </li>
      </ul>
    </div>
  );
};

export default ReportedIssues;



// export default function ReportedIssues() {
//   return <div>{/* Reported issues will go here */}</div>;
// }