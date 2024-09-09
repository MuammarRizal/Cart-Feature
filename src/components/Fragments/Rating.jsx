import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rate, count }) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={i} className="text-yellow-500" />
        ))}
      <span className="ml-2 text-gray-700">({count})</span>
    </div>
  );
};

export default Rating;
