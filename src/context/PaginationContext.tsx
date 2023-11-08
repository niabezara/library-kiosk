import { createContext, useContext, useState } from "react";
import { PaginationContextProps } from "../interfaces/Pagination";

const PaginationContext = createContext<PaginationContextProps>(
  {} as PaginationContextProps
);

export function UsePagination() {
  return useContext(PaginationContext);
}

export function PaginationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [seletedpage, setSelectedPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setSelectedPage(seletedpage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectedPage(seletedpage - 1);
    }
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        handleNextPage,
        handlePrevPage,
        seletedpage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
