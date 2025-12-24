export default function PriceTag({ price, currency = "₹" }) {
  return (
    <span className="font-bold text-green-600">
      {currency}{price}+
    </span>
  );
}