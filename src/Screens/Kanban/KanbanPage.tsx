import React, { useState } from "react";
import TextInput from "../../components/Inputs/TextInput";
import Modal from "../../components/Modal/Modal";
import { KanbanGrid } from "../../features/Kanban/Kanban";

import "./kanban-page.scss";

export const KanbanPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="kanban-page">
      <button onClick={handleOpenModal}>+</button>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={"Create new Task"}
      >
        <TextInput placeholder="Task name" onInputChange={handleInputChange} />
      </Modal>
      <KanbanGrid />
    </div>
  );
};
