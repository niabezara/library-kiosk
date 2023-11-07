import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
import { motion } from "framer-motion";
import { UseLibrary } from "../context/LibraryContext";
import { showInfoMessage } from "../utils/InformartionMessages";
import ReturnModal from "./modal/ReturnBookModal";

export default function LandingCards() {
  const navigate = useNavigate();
  const { matchingBooks, HandleReturnModal, returnModal } = UseLibrary();

  const handleReturnBook = () => {
    if (matchingBooks.length === 0) {
      return showInfoMessage(
        "No books have been borrowed yet. Borrow a book to return."
      );
    } else {
      HandleReturnModal();
    }
  };

  const handleBorrowBook = () => {
    navigate("/categories");
  };

  return (
    <Container>
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
      <ReturnModal open={returnModal} children={undefined} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin: 2rem;
  h1 {
    font-size: 3.6rem;
    color: #610c9f;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    margin: 3rem;
  }
`;
