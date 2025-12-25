import UserTable from "../../components/admin/UserTable";
import ServiceModeration from "../../components/admin/ServiceModeration";

const UserManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserTable />
        <ServiceModeration />
      </div>
    </div>
  );
};

export default UserManagement;




// export default function UserManagement() {
//   return (
//     <div>
//       <h1>User Management</h1>
//       {/* User management will go here */}
//     </div>
//   );
// }