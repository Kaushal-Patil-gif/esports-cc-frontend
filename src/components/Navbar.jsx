function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-green-600">
          ProConnect
        </h1>

        <div className="flex items-center gap-6">
          <a className="text-gray-700 hover:text-green-600 cursor-pointer">
            Services
          </a>
          <a className="text-gray-700 hover:text-green-600 cursor-pointer">
            Become a Pro
          </a>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Sign In
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
