import React, { useEffect } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

interface OrderModalProps {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function OrderModal({ open, children }: OrderModalProps) {
  const portalElement = document.getElementById("portal");

  useEffect(() => {
    if (open) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }, [open]);

  if (!open || !portalElement) return null;
  return ReactDom.createPortal(
    <>
      <Overlay />
      <Div>{children}</Div>
    </>,
    portalElement
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  @media (min-width: 500px) {
    overflow-x: hidden;
  }
`;

const Div = styled.div`
  position: fixed;
  width: 100%;
  max-width: 40.5625rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media (min-width: 900px) {
    transform: translate(-50%, -50%);
  }
`;
