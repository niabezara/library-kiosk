import React, { useEffect } from "react";
import { Overlay, Modal } from "../../styles/GeneralStyles";
import { UseLibrary } from "../../context/LibraryContext";
import { Link } from "react-router-dom";

interface BorrowModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function BorrowModal({ open }: BorrowModalProps) {
  const { matchingBooks, setBorrowModalOpen } = UseLibrary();

  //NOte aq unda daimapos archeulebi

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  if (!open) return null;
  return (
    <>
      <Overlay />
      <Modal>
        <h1 style={{ color: "black" }}>Borrow Confirmation</h1>
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
      </Modal>
    </>
  );
}
