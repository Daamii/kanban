import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "../../components/Inputs/TextArea";
import TextInput from "../../components/Inputs/TextInput";
import Modal from "../../components/Modal/Modal";
import {
  editTask,
  pushTask,
  selectKanbanColumns,
} from "../../store/kanbanSlice";
import { TaskType } from "../../Types/kanbanTypes";
import { v4 as uuidv4 } from "uuid";
import { PrimaryButton } from "../../components/Buttons/ButtonPrimary";
import SelectInput, { SelectOption } from "../../components/Inputs/SelectInput";

interface Props {
  currentValue?: TaskType;
  isModalOpen: boolean;
  closeModal: () => void;
}

export const TaskForm = ({ currentValue, isModalOpen, closeModal }: Props) => {
  // store
  const dispatch = useDispatch();
  const columns = useSelector(selectKanbanColumns);

  // use state
  const [inputValue, setInputValue] = useState<string>(
    currentValue?.label ?? ""
  );
  const [descriptionValue, setDescriptionValue] = useState<string>(
    currentValue?.content ?? ""
  );
  const [columnUuid, setColumnUuid] = useState<string>(
    currentValue?.columnUuid ?? ""
  );

  // form
  const options: SelectOption[] = columns.map((col) => {
    return { value: col.uuid, label: col.label } as SelectOption;
  });

  const saveTask = () => {
    const taskData: TaskType = {
      uuid: currentValue ? currentValue.uuid : uuidv4(),
      label: inputValue,
      content: descriptionValue,
      creationDate: currentValue
        ? currentValue.creationDate
        : new Date().toISOString(),
      columnUuid: columnUuid ?? currentValue?.columnUuid ?? "1",
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
      <div className="taskform">
        <div className="taskform__content">
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
          <SelectInput
            defaultValue={currentValue?.columnUuid}
            options={options}
            onChange={setColumnUuid}
          />
        </div>
        <div className="taskform__footer">
          <PrimaryButton onClick={saveTask}>save</PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};
