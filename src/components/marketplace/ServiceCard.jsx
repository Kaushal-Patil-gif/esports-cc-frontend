import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col justify-between">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-1 text-sm text-yellow-500 font-medium">
          ⭐ {service.rating}
        </div>

        {service.boosted && (
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            BOOSTED
          </span>
        )}
      </div>

      <h2 className="text-lg font-semibold text-slate-800 mb-1">
        {service.title}
      </h2>

      <p className="text-sm text-slate-500 mb-6">by {service.freelancer}</p>

      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-slate-900">
          ₹{service.price}
          <span className="text-sm font-normal text-slate-400">
            {" "}
            / starting
          </span>
        </p>

        {/* ✅ SIMPLE STATIC ROUTE */}
        <Link
          to="/service"
          className="px-5 py-2 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition"
        >
          View
        </Link>
      </div>
    </div>
  );
}
