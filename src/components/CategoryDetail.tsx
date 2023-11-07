import { selectedCategory } from "../api/books";
import { useQuery } from "react-query";
import { UsePagination } from "../context/PaginationContext";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Modal from "./modal/LoginModal";
import BorrowModal from "./modal/BookBorrowed";
import Register from "./Auth";
import { UseLibrary } from "../context/LibraryContext";

export default function CategoryDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");
  const { currentPage, handlePrevPage, handleNextPage } = UsePagination();
  const { openRegistration, openModal, setOpenModal } = useAuth();
  const { BorrowModalOpen, selectItem } = UseLibrary();

  const {
    data: books,
    isLoading,
    isError,
  } = useQuery(
    ["books", currentPage],
    () => selectedCategory(currentPage, 7, categoryId),
    {
      keepPreviousData: true,
      staleTime: 300000,
      cacheTime: 3600000,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      {books?.map((book) => (
        <div
          key={book.id}
          onClick={() => {
            selectItem(book.id);
            openRegistration();
          }}
        >
          <h1>{book.volumeInfo.title}</h1>
        </div>
      ))}
      <button onClick={handlePrevPage}>Previous Page</button>
      <span>Page {currentPage}</span>
      <button onClick={handleNextPage}>Next Page</button>
      {localStorage.getItem("token") ? (
        <>
          {BorrowModalOpen && (
            <BorrowModal open={BorrowModalOpen} children={undefined} />
          )}
        </>
      ) : (
        <Modal open={openModal} setOpenModal={setOpenModal}>
          <Register />
        </Modal>
      )}
    </div>
  );
}
