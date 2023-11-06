import React from "react";
import { Div, Overlay } from "../../styles/RegistrationModalStyles.ts/Style";
import { UseLibrary } from "../../context/LibraryContext";
import { Link } from "react-router-dom";

interface BorrowModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function BorrowModal({ open }: BorrowModalProps) {
  // const portalElement = document.getElementById("portal");
  const { matchingBooks } = UseLibrary();

  //NOte aq unda daimapos archeulebi

  if (!open) return null;
  return (
    <>
      <Overlay />
      <Div>
        <h1>Keep Your Book ID</h1>
        <h1>
          {matchingBooks.map((item: any) => (
            <div key={item.id}>{item}</div>
          ))}
        </h1>
        <Link to="/">
          <button>Back to home page</button>
        </Link>
      </Div>
    </>
  );
}
