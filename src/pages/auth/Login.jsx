import { motion } from "framer-motion";

function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
    >
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="button"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Register here
          </a>
        </p>
      </form>
    </motion.div>
  );
}

export default Login;
