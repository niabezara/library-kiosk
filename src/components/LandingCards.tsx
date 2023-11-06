import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";

export default function LandingCards() {
  const navigate = useNavigate();

  const handleBorrowBook = () => {
    navigate("/categories");
  };
  const handleReturnBook = () => {};
  return (
    <Wrap>
      <Card
        title={"Borrow Book"}
        img="./assets/borrow-book.jpg"
        onClick={handleBorrowBook}
      />
      <Card
        title={"Return Book"}
        img="./assets/return-book.jpg"
        onClick={handleReturnBook}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
