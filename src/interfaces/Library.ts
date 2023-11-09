import { Dispatch, SetStateAction } from "react";

export interface LibraryContextProps {
  selectItem: (itemId: string, title: string) => void;
  BorrowModalOpen: boolean;
  matchingBooks: any;
  setBorrowModalOpen: Dispatch<SetStateAction<boolean>>;
  returnModal: boolean;
  setReturnModal: Dispatch<SetStateAction<boolean>>;
  setMatchingBooks: Dispatch<
    SetStateAction<{ itemId: string; title: string }[]>
  >;
}
