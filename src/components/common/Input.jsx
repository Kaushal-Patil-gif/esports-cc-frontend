export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className="px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        {...props}
      />
    </div>
  );
}
