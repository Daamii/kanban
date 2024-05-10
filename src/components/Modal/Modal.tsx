import React from "react";
import { MdOutlineClose } from "react-icons/md";

import "./modal.scss";

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ title, isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <button className="modal-close-btn" onClick={onClose}>
        <MdOutlineClose />
      </button>
      <div className="modal">
        <h1 className="modal__header">{title}</h1>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
