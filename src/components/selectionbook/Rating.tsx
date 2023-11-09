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
      if (i <= rating) {
        stars.push(<BiSolidStar key={i} className="emptyStar" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<BiSolidStarHalf key={i} className="HalfStar" />);
      } else {
        stars.push(<BiStar key={i} className="fullStar" />);
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
