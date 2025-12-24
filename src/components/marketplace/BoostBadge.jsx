export default function BoostBadge({ isBoost = false }) {
  if (!isBoost) return null;
  
  return <span>🚀 Boost</span>;
}