import { selectedCategory } from "../../api/books";
import { useQuery } from "react-query";
import { UsePagination } from "../../context/PaginationContext";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Modal from "../modal/LoginModal";
import BorrowModal from "../modal/BookBorrowed";
import Register from "../Login/Auth";
import { UseLibrary } from "../../context/LibraryContext";
import Rating from "./Rating";
import { MdKeyboardArrowLeft, MdChevronRight } from "react-icons/md";
import LoadingSpinner from "../../utils/Spinner";
import { Card, Containerdiv, Wrapper } from "../../styles/CategoryDetail";
import { SelectButton } from "./SelectButton";
import Error from "../../utils/Error";

export default function CategoryDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");
  const { seletedpage, handlePrevPage, handleNextPage } = UsePagination();
  const { openRegistration, openModal, setOpenModal } = useAuth();
  const { BorrowModalOpen, selectItem } = UseLibrary();

  const {
    data: books,
    isLoading,
    isError,
  } = useQuery(
    ["books", seletedpage],
    () => selectedCategory(seletedpage, 9, categoryId),
    {
      keepPreviousData: true,
      staleTime: 300000,
      cacheTime: 3600000,
    }
  );

  if (isLoading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <Containerdiv>
      <h1>Select the Book</h1>
      {/* books */}
      <Card>
        {books?.map((book) => (
          <Wrapper
            key={book.id}
            onClick={() => {
              selectItem(book.id, book.volumeInfo.title);
              openRegistration();
            }}
          >
            {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
              )}
            <SelectButton />
            <div className="info">
              <Rating rating={book.volumeInfo.averageRating} />
              {book.volumeInfo.title && <h2>{book.volumeInfo.title}</h2>}

              {book.volumeInfo.authors && (
                <p>
                  {book.volumeInfo.authors.length > 4
                    ? book.volumeInfo.authors.slice(0, 4).join(", ") + "..."
                    : book.volumeInfo.authors.join(", ")}
                </p>
              )}
            </div>
          </Wrapper>
        ))}
      </Card>
      {/* pagination */}
      <div>
        <button onClick={handlePrevPage} className="carousel-control prev">
          <MdKeyboardArrowLeft />
        </button>
        <span className="page">{seletedpage}</span>
        <button onClick={handleNextPage} className="carousel-control next">
          <MdChevronRight />
        </button>
      </div>
      {/* modals */}
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
    </Containerdiv>
  );
}
