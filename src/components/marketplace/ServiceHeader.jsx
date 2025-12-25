export default function ServiceHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-slate-800">{title}</h1>
      <p className="text-slate-500 mt-1">{subtitle}</p>
    </div>
  );
}
