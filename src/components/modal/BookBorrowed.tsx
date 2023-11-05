import React from "react";
import ReactDom from "react-dom";
import { Div, Overlay } from "../../styles/RegistrationModalStyles.ts/Style";

interface BorrowModalProps {
  children: React.ReactNode;
}

export default function BorrowModal({ children }: BorrowModalProps) {
  const portalElement = document.getElementById("portal");

  if (!open || !portalElement) return null;
  return ReactDom.createPortal(
    <>
      <Overlay />
      <Div>{children}</Div>
    </>,
    portalElement
  );
}
