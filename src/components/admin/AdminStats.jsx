const AdminStats = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-gray-500 text-sm uppercase">{title}</h3>
      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
};

export default AdminStats;




// export default function AdminStats() {
//   return <div>{/* Admin stats will go here */}</div>;
// }