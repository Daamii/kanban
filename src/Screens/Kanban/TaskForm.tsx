import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextArea from "../../components/Inputs/TextArea";
import TextInput from "../../components/Inputs/TextInput";
import Modal from "../../components/Modal/Modal";
import { pushTask } from "../../store/kanbanSlice";
import { TaskType } from "../../Types/types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const TaskForm = ({ isModalOpen, setModalOpen }: Props) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");

  const saveTask = () => {
    const newTask: TaskType = {
      uuid: uuidv4(),
      label: inputValue,
      content: descriptionValue,
      creationDate: new Date().toISOString(),
      columnId: 1,
    };
    dispatch(pushTask(newTask));
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)}
      title={"Create new Task"}
    >
      <TextInput placeholder="Task name" onInputChange={setInputValue} />
      <TextArea
        placeholder="Task description"
        onInputChange={setDescriptionValue}
      />
      <button onClick={saveTask}>save</button>
    </Modal>
  );
};