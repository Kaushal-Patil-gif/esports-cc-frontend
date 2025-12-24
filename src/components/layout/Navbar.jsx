import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <Link to="/" className="text-2xl font-bold text-green-600">
          ProConnect
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/register" className="text-gray-700 hover:text-green-600">
            Become a Pro
          </Link>
          <Link
            to="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
