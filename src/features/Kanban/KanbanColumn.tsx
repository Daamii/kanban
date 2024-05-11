import React from "react";
import { KanbanCard } from "./KanbanCard";
import { ColumnnType, Data } from "../../Types/types";

interface ColumnProps {
  status: ColumnnType;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: ColumnnType["id"]) => void;
  handleRemoveFromList: (id: number) => void;
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
    console.debug(
      "dropping: ",
      +e.dataTransfer.getData("text"),
      " at ",
      status
    );
    const id = +e.dataTransfer.getData("text");
    handleUpdateList(id, status.id);
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
            status.id === item.columnId && (
              <KanbanCard
                data={item}
                key={item.id}
                handleDragging={handleDragging}
                handleRemoveFromList={handleRemoveFromList}
              />
            )
        )}
      </div>
    </div>
  );
};
