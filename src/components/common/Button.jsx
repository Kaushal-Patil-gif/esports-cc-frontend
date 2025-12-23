export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition";
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    outline: "border border-green-600 text-green-600 hover:bg-green-50"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}