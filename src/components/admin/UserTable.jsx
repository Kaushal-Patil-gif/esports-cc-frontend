const UserTable = () => {
  const users = [
    { id: 1, name: "Alex Gamer", email: "alex@gaming.com", role: "Creator", status: "Active" },
    { id: 2, name: "Sam Esports", email: "sam@esports.com", role: "Brand", status: "Inactive" },
    { id: 3, name: "Luna Plays", email: "luna@plays.com", role: "Creator", status: "Active" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Name</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Email</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Role</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-50">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.role}</td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;



// export default function UserTable() {
//   return <div>{/* User table will go here */}</div>;
// }