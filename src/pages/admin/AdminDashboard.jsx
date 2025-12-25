import AdminStats from "../../components/admin/AdminStats";
import UserTable from "../../components/admin/UserTable";
import ReportedIssues from "../../components/admin/ReportedIssues";

// Admin Dashboard page that will be rendered inside AdminLayout
const AdminDashboard = () => {
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AdminStats title="Total Users" value="2,450" color="text-blue-600" />
        <AdminStats title="Verified Creators" value="1,120" color="text-green-600" />
        <AdminStats title="Reports" value="34" color="text-red-600" />
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Table displaying users */}
          <h2 className="text-2xl font-semibold">User List</h2>
          <UserTable />

          {/* Reported Issues Section */}
          <h2 className="text-2xl font-semibold">Reported Issues</h2>
          <ReportedIssues />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


// export default function AdminDashboard() {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       {/* Admin dashboard will go here */}
//     </div>
//   );
// }