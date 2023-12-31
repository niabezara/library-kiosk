import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";
import { UseLibrary } from "../../context/LibraryContext";
import { showInfoMessage } from "../../utils/InformartionMessages";
import ReturnModal from "../modal/ReturnBookModal";
import { Container } from "../../styles/GeneralStyles";
import borrowBook from "../../assets/book.png";
import returnBook from "../../assets/return.png";

export default function LandingCards() {
  const navigate = useNavigate();
  const { matchingBooks, setReturnModal, returnModal } = UseLibrary();

  // Return book
  const handleReturnBook = () => {
    if (matchingBooks.length === 0) {
      return showInfoMessage(
        "No books have been borrowed yet. Borrow a book to return."
      );
    } else {
      setReturnModal(true);
    }
  };

  // borrow book
  const handleBorrowBook = () => {
    navigate("/categories");
  };

  return (
    <Container>
      <Wrap>
        <Card
          title={"Borrow Book"}
          img={borrowBook}
          onClick={handleBorrowBook}
        />
        <Card
          title={"Return Book"}
          img={returnBook}
          onClick={handleReturnBook}
        />
      </Wrap>
      <ReturnModal open={returnModal} children={undefined} />
    </Container>
  );
}

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
  }
`;
