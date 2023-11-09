import React from "react";
import {
  Overlay,
  Modal,
  Button,
  Title,
  Keep,
  Id,
} from "../../styles/GeneralStyles";
import { UseLibrary } from "../../context/LibraryContext";
import { Link } from "react-router-dom";

interface BorrowModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function BorrowModal({ open }: BorrowModalProps) {
  const { matchingBooks, setBorrowModalOpen } = UseLibrary();

  if (!open) return null;
  return (
    <>
      <Overlay />
      <Modal>
        <Title>Borrow Confirmation</Title>
        <Keep>Keep Your Book ID</Keep>
        {matchingBooks.map((item: any, id: number) => (
          <div key={id}>
            <Id>{item}</Id>
          </div>
        ))}
        <Link to="/" onClick={() => setBorrowModalOpen(false)}>
          <Button>Back to home page</Button>
        </Link>
      </Modal>
    </>
  );
}
