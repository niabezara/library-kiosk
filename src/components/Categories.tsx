import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCategories } from "../api/books";

export default function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery(
    "categories",
    () => getCategories(0, 10) // You can adjust the parameters as needed
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      {categories?.map((category) => (
        <div key={category.id}>{category.title}</div>
      ))}
    </div>
  );
}
