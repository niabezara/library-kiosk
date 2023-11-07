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
  returnModal: boolean;
  setReturnModal: Dispatch<SetStateAction<boolean>>;
  setMatchingBooks: Dispatch<SetStateAction<string[]>>;
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
  const [returnModal, setReturnModal] = useState(false);

  const selectItem = (itemId: string) => {
    console.log("item_id", itemId);
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
