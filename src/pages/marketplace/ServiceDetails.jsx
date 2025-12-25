import PriceTag from "../../components/marketplace/PriceTag";

export default function ServiceDetails() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-4xl font-bold text-slate-800">
            Professional Gaming Video Editing
          </h1>
          <PriceTag price={1500} />
        </div>

        <p className="text-slate-500 mb-6">
          High-quality esports video editing optimized for YouTube, reels, and
          shorts.
        </p>

        <div className="bg-slate-100 p-5 rounded-2xl mb-6">
          <p className="font-semibold text-slate-800">Freelancer</p>
          <p className="text-slate-600">AceEditor ⭐ 4.8</p>
          <p className="text-slate-600 mt-1">
            Delivery: <strong>3 Days</strong>
          </p>
        </div>

        <button
          disabled
          className="w-full py-4 rounded-2xl text-white text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 opacity-70"
        >
          Buy Service (Payment Coming Soon)
        </button>
      </div>
    </div>
  );
}
