import AdminStats from "../../components/admin/AdminStats";

const PlatformAnalytics = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Platform Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdminStats title="Monthly Revenue" value="$12,400" color="text-purple-600" />
        <AdminStats title="Active Campaigns" value="87" color="text-blue-600" />
        <AdminStats title="Conversion Rate" value="4.6%" color="text-green-600" />
      </div>
    </div>
  );
};

export default PlatformAnalytics;




// export default function PlatformAnalytics() {
//   return (
//     <div>
//       <h1>Platform Analytics</h1>
//       {/* Platform analytics will go here */}
//     </div>
//   );
// }