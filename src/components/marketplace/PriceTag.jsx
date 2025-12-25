export default function PriceTag({ price }) {
  return (
    <div className="text-right">
      <p className="text-2xl font-bold text-slate-800">₹{price}</p>
      <p className="text-sm text-slate-500">starting price</p>
    </div>
  );
}
