import { selectedCategory } from "../api/books";
import { useQuery } from "react-query";
import { UsePagination } from "../context/PaginationContext";
import { useLocation } from "react-router-dom";

export default function Selected() {
  const location = useLocation();
  const category = location.pathname.split("/category/")[1];
  const { currentPage, handlePrevPage, handleNextPage } = UsePagination();

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
        <h1 key={`${book.title}-${book.author}-${index}`}>
          {book.volumeInfo.title}
        </h1>
      ))}
      <button onClick={handlePrevPage}>Previous Page</button>
      <span>Page {currentPage}</span>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
