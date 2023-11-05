import React, { useEffect } from "react";
import { UseLibrary } from "../context/LibraryContext";
import { useQuery } from "react-query";
import { selectedCategory } from "../api/books";

export default function Borrow() {
  const { selectedItemId } = UseLibrary();

  return <div>{selectedItemId}</div>;
}
