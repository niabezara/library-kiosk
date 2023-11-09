import React from "react";
import {
  Overlay,
  Modal,
  Button,
  Title,
  Keep,
  Id,
  Box,
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
      <Modal style={{ maxHeight: "400px", overflowY: "auto" }}>
        <Title>Borrow Confirmation</Title>
        <Keep>Keep Your Book ID 📚</Keep>
        {matchingBooks.map(
          (item: { itemId: string; title: string }, id: number) => (
            <Box key={id}>
              <p className="booktitle">
                {item.title.length > 20
                  ? item.title.slice(0, 15) + "..."
                  : item.title}
              </p>
              <Id>{item.itemId}</Id>
            </Box>
          )
        )}
        <Link to="/" onClick={() => setBorrowModalOpen(false)}>
          <Button>Back to home page</Button>
        </Link>
      </Modal>
    </>
  );
}
