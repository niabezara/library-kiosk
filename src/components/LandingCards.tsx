import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function LandingCards() {
  const navigate = useNavigate();

  const handleBorrowBook = () => {
    navigate("/categories");
  };
  const handleReturnBook = () => {};
  return (
    <Cotainer>
      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Library Kiosk
      </motion.h1>
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
  margin: 2rem;
  h1 {
    font-size: 3.6rem;
    color: #610c9f;
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
