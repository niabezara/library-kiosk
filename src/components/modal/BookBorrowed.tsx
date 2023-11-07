import React from "react";
import { Div, Overlay } from "../../styles/RegistrationModalStyles.ts/Style";
import { UseLibrary } from "../../context/LibraryContext";
import { Link } from "react-router-dom";

interface BorrowModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function BorrowModal({ open }: BorrowModalProps) {
  const { matchingBooks, setBorrowModalOpen } = UseLibrary();

  //NOte aq unda daimapos archeulebi

  if (!open) return null;
  return (
    <>
      <Overlay />
      <Div>
        <h1>Borrow Confirmation</h1>
        <h1>Keep Your Book ID</h1>

        <h1>
          {matchingBooks.map((item: any, id: number) => (
            <div key={id}>
              <div>{item}</div>
            </div>
          ))}
        </h1>
        <Link to="/" onClick={() => setBorrowModalOpen(false)}>
          <button>Back to home page</button>
        </Link>
      </Div>
    </>
  );
}
