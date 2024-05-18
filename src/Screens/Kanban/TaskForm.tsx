import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextArea from "../../components/Inputs/TextArea";
import TextInput from "../../components/Inputs/TextInput";
import Modal from "../../components/Modal/Modal";
import { editTask, pushTask } from "../../store/kanbanSlice";
import { TaskType } from "../../Types/kanbanTypes";
import { v4 as uuidv4 } from "uuid";
import { PrimaryButton } from "../../components/Buttons/ButtonPrimary";

interface Props {
  currentValue?: TaskType;
  isModalOpen: boolean;
  closeModal: () => void;
}

export const TaskForm = ({ currentValue, isModalOpen, closeModal }: Props) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>(
    currentValue?.label ?? ""
  );
  const [descriptionValue, setDescriptionValue] = useState<string>(
    currentValue?.content ?? ""
  );

  const saveTask = () => {
    const taskData: TaskType = {
      uuid: currentValue ? currentValue.uuid : uuidv4(),
      label: inputValue,
      content: descriptionValue,
      creationDate: currentValue
        ? currentValue.creationDate
        : new Date().toISOString(),
      columnUuid: currentValue ? currentValue.columnUuid : "1",
    };
    currentValue ? dispatch(editTask(taskData)) : dispatch(pushTask(taskData));
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={currentValue ? "Edit task" : "Create new Task"}
    >
      <TextInput
        defaulValue={currentValue?.label}
        label="Task name"
        placeholder=""
        onInputChange={setInputValue}
      />
      <TextArea
        defaultValue={currentValue?.content}
        placeholder="Task description"
        onInputChange={setDescriptionValue}
      />
      <PrimaryButton onClick={saveTask}>save</PrimaryButton>
    </Modal>
  );
};
