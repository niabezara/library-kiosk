import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
import { Div, Overlay } from "../../styles/RegistrationModalStyles.ts/Style";
import { UseLibrary } from "../../context/LibraryContext";

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
        <h1>
          {/* {matchingBooks.map((book: any) => (
            <div key={book.id}>{book.id}</div>
          ))} */}
        </h1>
      </Div>
    </>
  );
}
