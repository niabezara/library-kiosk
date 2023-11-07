import { useQuery } from "react-query";
import { getCategories } from "../api/books";
import { UsePagination } from "../context/PaginationContext";
import { Link } from "react-router-dom";
import LoadingSpinner from "../utils/Spinner";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdChevronRight } from "react-icons/md";

import {
  CarouselItem,
  CarouselItems,
  CarouselWrapper,
} from "../styles/Carousel";
import { useState } from "react";

export default function Categories() {
  const { currentPage, handlePrevPage, handleNextPage } = UsePagination();
  const [activeIndex, setActiveIndex] = useState(0);
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
    return <div>Error fetching data</div>;
  }
  const currentTransform = -activeIndex * 100;

  return (
    <>
      <Card>
        <CarouselWrapper>
          <CarouselItems
            className="carousel-items"
            style={{ transform: `translateX(${currentTransform}%)` }}
          >
            {categories?.map((category) => (
              <CarouselItem key={category.id}>
                <Link to={`/category/?categoryId=${category.title}`}>
                  <Button>{category.title}</Button>
                </Link>
              </CarouselItem>
            ))}
          </CarouselItems>
        </CarouselWrapper>

        <button onClick={handlePrevPage} className="carousel-control prev">
          <MdKeyboardArrowLeft />
        </button>

        <span> {currentPage}</span>
        <button onClick={handleNextPage} className="carousel-control next">
          <MdChevronRight />
        </button>
      </Card>
    </>
  );
}

const Card = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  .carousel-control {
    color: #ffffff;
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: #38add2;
    border: none;
    align-items: center;
    outline: none;
    display: flex;
    justify-content: center;
    border-radius: 100%;
    height: 35px;
    width: 35px;
    transition: 0.3s ease;
    cursor: pointer;
    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .carousel-control.prev {
    left: 1rem;
  }

  .carousel-control.next {
    right: 1rem;
  }
  /* span {
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin: 0 2px;
    background-color: #fff;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    display: inline-block;
  } */
`;

const Button = styled.button`
  background-color: transparent;
  color: #006595;
  border: 1px solid #006595;
  font-family: "LinetoBrown", "Helvetica Neue", Helvetica, Arial, Verdana,
    sans-serif;
  font-size: 1.3rem;
  display: inline-block;
  position: relative;
  padding: 3px 14px;
  margin-right: 6px;
  margin-bottom: 6px;
  line-height: 1.5;
  text-transform: uppercase;
  -moz-transition: all 50ms;
  -o-transition: all 50ms;
  transition: all 50ms;
  -moz-border-radius: 25px;
  border-radius: 25px;
`;
