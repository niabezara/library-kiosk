import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCategories } from "../api/books";
import { UsePagination } from "../context/PaginationContext";

export default function Categories() {
  const { currentPage, handlePrevPage, handleNextPage } = UsePagination();
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery(["categories", currentPage], () =>
    getCategories(currentPage, 7)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <div>
        {categories?.map((category) => (
          <div key={category.id}>{category.title}</div>
        ))}
      </div>
      <button onClick={handlePrevPage}>Previous Page</button>
      <span>Page {currentPage}</span>
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}
