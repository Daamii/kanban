import React, { useState } from "react";
import { KanbanCard } from "./KanbanCard";
import { ColumnnType, TaskType } from "../../Types/kanbanTypes";
import { MdDensityMedium as Burger } from "react-icons/md";
import TextInput from "../../components/Inputs/TextInput";
import { useDispatch } from "react-redux";
import { removeColumn, updateColumn } from "../../store/kanbanSlice";
import {
  DestructiveButton,
  PrimaryButton,
} from "../../components/Buttons/ButtonPrimary";

interface ColumnProps {
  column: ColumnnType;
  items: TaskType[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: TaskType["uuid"], status: ColumnnType["uuid"]) => void;
  handleRemoveFromList: (id: TaskType["uuid"]) => void;
}

export const KanbanColumn = ({
  column,
  items,
  isDragging,
  handleDragging,
  handleUpdateList,
  handleRemoveFromList,
}: ColumnProps) => {
  const [editionModeActive, setEditionModeActive] = useState(false);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.debug("dropping: ", e.dataTransfer.getData("text"), " at ", column);
    const id = e.dataTransfer.getData("text");
    handleUpdateList(id, column.uuid);
    handleDragging(false);
  };

  const toggleEditionMode = () => setEditionModeActive((prev) => !prev);

  return (
    <div
      className={`kanban-column ${isDragging ? "kanban-column--dragging" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="kanban-column__header">
        <div className="kanban-column__header__title">{column.label}</div>
        <div
          className="kanban-column__header__burger"
          onClick={toggleEditionMode}
        >
          <Burger />
        </div>
      </div>
      {!editionModeActive ? (
        <div className="kanban-column__content">
          {items.map(
            (item) =>
              column.uuid === item.columnUuid && (
                <KanbanCard
                  data={item}
                  key={item.uuid}
                  handleDragging={handleDragging}
                  handleRemoveFromList={handleRemoveFromList}
                />
              )
          )}
        </div>
      ) : (
        <ColumnModifyForm
          value={column}
          hideForm={toggleEditionMode}
          itemsAttached={
            items.filter((f) => f.columnUuid == column.uuid).length
          }
        />
      )}
    </div>
  );
};

const ColumnModifyForm = ({
  value,
  hideForm,
  itemsAttached,
}: {
  value: ColumnnType;
  hideForm: () => void;
  itemsAttached: number;
}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>(value.label);

  return (
    <>
      <TextInput
        label="Column name"
        defaulValue={value.label}
        onInputChange={setInputValue}
      />
      <PrimaryButton
        onClick={() => {
          dispatch(updateColumn({ ...value, label: inputValue }));
          hideForm();
        }}
      >
        save
      </PrimaryButton>

      <DestructiveButton
        enabled={itemsAttached == 0}
        onClick={() => {
          if (itemsAttached !== 0) return;
          dispatch(removeColumn({ id: value.uuid }));
          hideForm();
        }}
      >
        remove column
      </DestructiveButton>
    </>
  );
};
