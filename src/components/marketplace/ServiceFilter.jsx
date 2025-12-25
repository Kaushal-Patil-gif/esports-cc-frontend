export default function ServiceFilter() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex flex-col gap-4 md:flex-row md:justify-between">
      <select className="border rounded-xl px-4 py-2 text-slate-700">
        <option>All Categories</option>
        <option>Video Editing</option>
        <option>Thumbnail</option>
        <option>SEO</option>
      </select>

      <select className="border rounded-xl px-4 py-2 text-slate-700">
        <option>Any Price</option>
        <option>Below ₹1000</option>
        <option>₹1000 - ₹2000</option>
      </select>

      <select className="border rounded-xl px-4 py-2 text-slate-700">
        <option>All Ratings</option>
        <option>⭐ 4+</option>
        <option>⭐ 4.5+</option>
      </select>
    </div>
  );
}
