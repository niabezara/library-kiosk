import { createContext, useContext, useState } from "react";
import { LibraryContextProps } from "../interfaces/Library";

const LibraryContext = createContext<LibraryContextProps>(
  {} as LibraryContextProps
);

export function UseLibrary() {
  return useContext(LibraryContext);
}

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [BorrowModalOpen, setBorrowModalOpen] = useState(false);
  const [matchingBooks, setMatchingBooks] = useState<string[]>([]);
  const [returnModal, setReturnModal] = useState(false);

  const selectItem = (itemId: string) => {
    setMatchingBooks((prevMatchingBooks) => [...prevMatchingBooks, itemId]);
    setBorrowModalOpen((prevOpenModal) => !prevOpenModal);
  };

  return (
    <LibraryContext.Provider
      value={{
        selectItem,
        setMatchingBooks,
        matchingBooks,
        BorrowModalOpen,
        setBorrowModalOpen,
        setReturnModal,
        returnModal,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}
