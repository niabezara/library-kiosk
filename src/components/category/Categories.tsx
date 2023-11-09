import { useQuery } from "react-query";
import { getCategories } from "../../api/books";
import { UsePagination } from "../../context/PaginationContext";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../utils/Spinner";
import { MdKeyboardArrowLeft, MdChevronRight } from "react-icons/md";
import {
  CarouselItem,
  CarouselItems,
  CarouselWrapper,
} from "../../styles/Carousel";
import { Button, Card } from "../../styles/Categories";
import Error from "../../utils/Error";

export default function Categories() {
  const { currentPage, handlePrevPage, handleNextPage } = UsePagination();
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery(
    ["categories", currentPage],
    () => getCategories(currentPage, 10),
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
    <Card>
      <div className="SubCard">
        <h1>Select Category</h1>
        <CarouselWrapper>
          <CarouselItems className="carousel-items">
            {categories?.map((category) => (
              <CarouselItem key={category.id}>
                <Link to={`/category/?categoryId=${category.title}`}>
                  <Button
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.title}
                  </Button>
                </Link>
              </CarouselItem>
            ))}
          </CarouselItems>
        </CarouselWrapper>

        <button onClick={handlePrevPage} className="carousel-control prev">
          <MdKeyboardArrowLeft />
        </button>
        <span className="page"> {currentPage}</span>
        <button onClick={handleNextPage} className="carousel-control next">
          <MdChevronRight />
        </button>
      </div>
    </Card>
  );
}
