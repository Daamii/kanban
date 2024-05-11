import React from "react";
import { KanbanCard } from "./KanbanCard";
import { ColumnnType, TaskType } from "../../Types/types";

interface ColumnProps {
  status: ColumnnType;
  items: TaskType[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: TaskType["uuid"], status: ColumnnType["uuid"]) => void;
  handleRemoveFromList: (id: TaskType["uuid"]) => void;
}

export const KanbanColumn = ({
  status,
  items,
  isDragging,
  handleDragging,
  handleUpdateList,
  handleRemoveFromList,
}: ColumnProps) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.debug("dropping: ", e.dataTransfer.getData("text"), " at ", status);
    const id = e.dataTransfer.getData("text");
    handleUpdateList(id, status.uuid);
    handleDragging(false);
  };

  return (
    <div
      className={`kanban-column ${isDragging ? "kanban-column--dragging" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="kanban-column__title">{status.label}</div>
      <div className="kanban-column__content">
        {items.map(
          (item) =>
            status.uuid === item.columnUuid && (
              <KanbanCard
                data={item}
                key={item.uuid}
                handleDragging={handleDragging}
                handleRemoveFromList={handleRemoveFromList}
              />
            )
        )}
      </div>
    </div>
  );
};
