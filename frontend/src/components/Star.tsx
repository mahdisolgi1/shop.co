import { FC } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StarProps {
  rate: number;
}

const Star: FC<StarProps> = ({ rate }) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = Math.ceil(rate) > Math.floor(rate);

  return (
    <div className="flex gap-3  items-center" aria-label="rating">
      <div className="flex gap-1 items-center justify-center">
        {Array.from({ length: fullStars }, (_, index) => (
          <FaStar key={`full-${index}`} color="gold" aria-label="full star" />
        ))}
        {hasHalfStar && <FaStarHalfAlt color="gold" aria-label="half star" />}
      </div>
      <div>
        <span className="text-primary-dark">{rate.toFixed(1)}</span>
        <span className="text-primary-darkWithOpacity">/5</span>
      </div>
    </div>
  );
};

export default Star;
