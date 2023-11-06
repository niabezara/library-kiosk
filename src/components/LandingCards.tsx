import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
import { motion } from "framer-motion";
import { UseLibrary } from "../context/LibraryContext";
import { showInfoMessage } from "../utils/InformartionMessages";
import { useState } from "react";
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
      <ReturnModal open={returnModal} children={undefined} />
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
