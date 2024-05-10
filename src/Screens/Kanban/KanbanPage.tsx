import React, { useState } from "react";
import TextArea from "../../components/Inputs/TextArea";
import TextInput from "../../components/Inputs/TextInput";
import Modal from "../../components/Modal/Modal";
import { KanbanGrid } from "../../features/Kanban/Kanban";

import "./kanban-page.scss";

export const KanbanPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");

  return (
    <div className="kanban-page">
      <button onClick={() => setIsOpen(true)}>+</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(true)}
        title={"Create new Task"}
      >
        <TextInput placeholder="Task name" onInputChange={setInputValue} />
        <TextArea
          placeholder="Task description"
          onInputChange={setDescriptionValue}
        />
      </Modal>
      <KanbanGrid />
    </div>
  );
};
