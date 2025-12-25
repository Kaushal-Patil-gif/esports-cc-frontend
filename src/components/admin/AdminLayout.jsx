import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block hover:text-blue-400 py-2 px-3 rounded ${isActive ? 'bg-blue-600' : ''}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `block hover:text-blue-400 py-2 px-3 rounded ${isActive ? 'bg-blue-600' : ''}`
            }
          >
            User Management
          </NavLink>
          <NavLink
            to="/kyc"
            className={({ isActive }) =>
              `block hover:text-blue-400 py-2 px-3 rounded ${isActive ? 'bg-blue-600' : ''}`
            }
          >
            KYC Management
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `block hover:text-blue-400 py-2 px-3 rounded ${isActive ? 'bg-blue-600' : ''}`
            }
          >
            Platform Analytics
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Outlet renders the nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;




