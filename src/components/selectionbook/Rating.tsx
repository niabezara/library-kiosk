import styled from "styled-components";
import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const renderRating = () => {
    const stars = [];

    // Loop for star elements
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<BiStar key={i} className="fullStar" />);
      } else if (i - 0.5 === Math.floor(rating)) {
        stars.push(<BiSolidStarHalf key={i} className="HalfStar" />);
      } else {
        stars.push(<BiSolidStar key={i} className="emptyStar" />);
      }
    }

    return stars;
  };

  return (
    <>
      <Star>
        {renderRating().map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </Star>
    </>
  );
};

export default Rating;

const Star = styled.div`
  .emptyStar,
  .HalfStar,
  .fullStar {
    fill: #f2b01e;
    width: 20px;
    height: 20px;
  }
`;
