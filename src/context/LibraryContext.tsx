import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { fetchAllBooks } from "../api/books";

interface LibraryContextProps {
  selectItem: (itemId: string) => void;
  selectedItemId: string;
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
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const [BorrowModalOpen, setBorrowModalOpen] = useState(false);
  const [matchingBooks, setMatchingBooks] = useState<{}[]>([]);

  const { data: bookdata } = useQuery("allBooks", fetchAllBooks);

  const selectItem = (itemId: string) => {
    console.log(bookdata);
    const bookIds = bookdata?.find((book) => book.id === selectedItemId);
    if (bookIds) {
      setMatchingBooks((prevMatchingBooks: any) => [
        ...prevMatchingBooks,
        bookIds,
      ]);
      console.log("match", matchingBooks);
    }
    console.log(bookIds);
    console.log("item_id", itemId);
    setSelectedItemId(itemId);
    // setBorrowModalOpen((prevOpenModal) => !prevOpenModal);
  };

  // useEffect(() => {}, [selectedItemId, bookIds]);

  return (
    <LibraryContext.Provider
      value={{
        selectItem,
        matchingBooks,
        selectedItemId,
        BorrowModalOpen,
        setBorrowModalOpen,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}
