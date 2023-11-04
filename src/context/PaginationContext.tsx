import { createContext, useContext, useState } from "react";

interface PaginationContextProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

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

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, handleNextPage, handlePrevPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
