import { selectedCategory } from "../api/books";
import { useQuery } from "react-query";
import { UsePagination } from "../context/PaginationContext";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Modal from "../components/modal/RegisterModal";
import Register from "./Register";

export default function Selected() {
  const location = useLocation();
  const category = location.pathname.split("/category/")[1];
  const { currentPage, handlePrevPage, handleNextPage } = UsePagination();
  const { openRegistration, openModal, setOpenModal } = useAuth();

  const {
    data: books,
    isLoading,
    isError,
  } = useQuery(["books", currentPage], () =>
    selectedCategory(currentPage, 7, category)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      {books?.map((book, index) => (
        <div
          key={`${book.title}-${book.author}-${index}`}
          onClick={openRegistration}
        >
          <h1>{book.volumeInfo.title}</h1>
        </div>
      ))}
      <button onClick={handlePrevPage}>Previous Page</button>
      <span>Page {currentPage}</span>
      <button onClick={handleNextPage}>Next Page</button>
      <Modal open={openModal} setOpenModal={setOpenModal}>
        <Register />
      </Modal>
    </div>
  );
}
