import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextArea from "../../components/Inputs/TextArea";
import TextInput from "../../components/Inputs/TextInput";
import Modal from "../../components/Modal/Modal";
import { KanbanGrid } from "../../features/Kanban/KanbanGrid";
import { selectKanban } from "../../store/kanbanSlice";

import "./kanban-page.scss";

export const KanbanPage = () => {
  const tasks = useSelector(selectKanban);

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="kanban-page">
      <button onClick={() => setIsOpen(true)}>+</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={"Create new Task"}
      >
        <TextInput placeholder="Task name" onInputChange={setInputValue} />
        <TextArea
          placeholder="Task description"
          onInputChange={setDescriptionValue}
        />
      </Modal>
      <KanbanGrid tasks={tasks.tasks} columns={tasks.columns} />
    </div>
  );
};
