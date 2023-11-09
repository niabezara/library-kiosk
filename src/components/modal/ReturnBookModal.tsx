import React, { useEffect, useRef, useState } from "react";
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
  const RetRef = useRef<HTMLDivElement>(null);

  // authomaticaly close the modal
  useEffect(() => {
    const handler = (event: any) => {
      if (RetRef.current && !RetRef.current.contains(event.target as Node)) {
        setReturnModal(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // check return book input
  const handleConfirm = () => {
    if (returntarget) {
      if (
        matchingBooks.some(
          (item: { itemId: string }) => item.itemId === returntarget
        )
      ) {
        // Book found
        setMatchingBooks((prevMatchingBooks) =>
          prevMatchingBooks.filter((item) => item.itemId !== returntarget)
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
      <RetModal ref={RetRef}>
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
