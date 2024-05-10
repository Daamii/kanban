import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { KanbanGrid } from "../../features/Kanban/Kanban";

import "./kanban-page.scss";

export const KanbanPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="kanban-page">
      <button onClick={handleOpenModal}>+</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        content
      </Modal>
      <KanbanGrid />
    </div>
  );
};
