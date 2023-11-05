import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { Div, Overlay } from "../../styles/RegistrationModalStyles.ts/Style";

interface OrderModalProps {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function OrderModal({
  open,
  children,
  setOpenModal,
}: OrderModalProps) {
  const portalElement = document.getElementById("portal");
  const AuthRef = useRef<HTMLDivElement>(null);

  // authomaticaly close the modal
  useEffect(() => {
    const handler = (event: any) => {
      if (AuthRef.current && !AuthRef.current.contains(event.target as Node)) {
        setOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  if (!open || !portalElement) return null;
  return ReactDom.createPortal(
    <>
      <Overlay />
      <Div ref={AuthRef}>{children}</Div>
    </>,
    portalElement
  );
}
