import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseLibrary } from "../../context/LibraryContext";
import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from "../../utils/InformartionMessages";
import { FaBook } from "react-icons/fa";
import {
  Button,
  InputSection,
  Modal,
  Overlay,
} from "../../styles/GeneralStyles";
import styled from "styled-components";

interface ReturnModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function ReturnModal({ open }: ReturnModalProps) {
  const { matchingBooks, setMatchingBooks, setReturnModal } = UseLibrary();
  const [returntarget, setReturnTarget] = useState("");

  // check return book input
  const handleConfirm = () => {
    if (returntarget) {
      if (matchingBooks.includes(returntarget)) {
        // Book found
        setMatchingBooks((prevMatchingBooks) =>
          prevMatchingBooks.filter((bookId) => bookId !== returntarget)
        );
        showSuccessMessage("Book Returned Successfully");
      } else {
        // Book not found
        showErrorMessage("Book ID not found");
      }
    } else {
      // Input is empty
      showWarningMessage("Please enter a Book ID");
    }
    setReturnModal(false);
    setReturnTarget("");
  };

  if (!open) return null;
  return (
    <>
      <Overlay />
      <RetModal>
        <InputSection>
          <div>
            <FaBook className="InputIcon" />
          </div>
          <input
            type="text"
            placeholder="Book ID"
            value={returntarget}
            onChange={(e) => setReturnTarget(e.target.value)}
          />
        </InputSection>
        <Link to="/">
          <Confirm onClick={handleConfirm}>Confirm</Confirm>
        </Link>
      </RetModal>
    </>
  );
}

const Confirm = styled(Button)`
  padding: 1rem 2rem;
`;

const RetModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
