import React, { useState } from "react";
import { Div, Overlay } from "../../styles/RegistrationModalStyles.ts/Style";
import { Link } from "react-router-dom";
import { UseLibrary } from "../../context/LibraryContext";

interface ReturnModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function ReturnModal({ open }: ReturnModalProps) {
  const { matchingBooks, setMatchingBooks, setReturnModal } = UseLibrary();

  const [returntarget, setReturnTarget] = useState("");
  const handleConfirm = () => {
    if (returntarget) {
      setMatchingBooks((prevMatchingBooks) =>
        prevMatchingBooks.filter((bookId) => bookId !== returntarget)
      );
      setReturnTarget("");
      setReturnModal(false);
    }
  };

  console.log(matchingBooks);

  if (!open) return null;
  return (
    <>
      <Overlay />
      <Div>
        <input
          type="text"
          placeholder="Book ID"
          value={returntarget}
          onChange={(e) => setReturnTarget(e.target.value)}
        />
        <Link to="/">
          <button onClick={handleConfirm}>Confirm</button>
        </Link>
      </Div>
    </>
  );
}
