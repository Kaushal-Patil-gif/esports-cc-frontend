export default function RatingStars({ rating = 0, maxRating = 5 }) {
  return (
    <div>
      {/* Rating stars will go here */}
      Rating: {rating}/{maxRating}
    </div>
  );
}