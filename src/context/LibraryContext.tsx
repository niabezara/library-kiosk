import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface LibraryContextProps {
  selectItem: (itemId: string) => void;
  BorrowModalOpen: boolean;
  matchingBooks: any;
  setBorrowModalOpen: Dispatch<SetStateAction<boolean>>;
}

const LibraryContext = createContext<LibraryContextProps>(
  {} as LibraryContextProps
);

export function UseLibrary() {
  return useContext(LibraryContext);
}

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [BorrowModalOpen, setBorrowModalOpen] = useState(false);
  const [matchingBooks, setMatchingBooks] = useState<string[]>([]);

  const selectItem = (itemId: string) => {
    console.log("item_id", itemId);
    setMatchingBooks((prevMatchingBooks) => [...prevMatchingBooks, itemId]);
  };

  return (
    <LibraryContext.Provider
      value={{
        selectItem,
        matchingBooks,
        BorrowModalOpen,
        setBorrowModalOpen,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}
