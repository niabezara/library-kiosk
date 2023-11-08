import { selectedCategory } from "../api/books";
import { useQuery } from "react-query";
import { UsePagination } from "../context/PaginationContext";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Modal from "./modal/LoginModal";
import BorrowModal from "./modal/BookBorrowed";
import Register from "./Auth";
import { UseLibrary } from "../context/LibraryContext";
import styled from "styled-components";
import { Container } from "../styles/GeneralStyles";
import Rating from "./Rating";

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
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
              selectItem(book.id);
              openRegistration();
            }}
          >
            {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
              )}
            <div className="info">
              <Rating rating={book.volumeInfo.averageRating} />
              {book.volumeInfo.title && <h1>{book.volumeInfo.title}</h1>}

              {book.volumeInfo.authors && (
                <h1>
                  {book.volumeInfo.authors.length > 4
                    ? book.volumeInfo.authors.slice(0, 1) + "..."
                    : book.volumeInfo.authors}
                </h1>
              )}
            </div>
          </Wrapper>
        ))}
      </Card>
      {/* pagination */}
      <div>
        <button onClick={handlePrevPage}>Previous Page</button>
        <span>{seletedpage}</span>
        <button onClick={handleNextPage}>Next Page</button>
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

const Containerdiv = styled(Container)`
  flex-direction: column;
  gap: 20px;
  /* align-items: stretch;
  justify-content: flex-start;
  gap: 50px 0px; */
  @media screen and (min-width: 700px) {
    margin: 3rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  /* flex-flow: wrap;
  align-items: flex-start;
  justify-content: space-between;
   */

  @media screen and (min-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Wrapper = styled.div`
  border: 2px solid rgb(219, 219, 232);
  border-radius: 15px;
  transition: all 0.25s ease-in-out 0s;
  /* width: 23%; */
  cursor: pointer;
  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
`;
