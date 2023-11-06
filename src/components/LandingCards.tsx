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
    <Cotainer>
      <h1>Library Kiosk</h1>
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
    </Cotainer>
  );
}

const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3.2rem;
  }
`;

const Wrap = styled.div`
  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    margin: 3rem;
  }
`;
