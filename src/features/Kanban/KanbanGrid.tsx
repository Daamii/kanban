import React from "react";
import "./kanban.scss";
import { Data, ColumnnType } from "../../Types/types";
import { useDragAndDrop } from "../../hooks/useDragAndDrops";
import { KanbanColumn } from "./KanbanColumn";

interface Props {
  tasks: Data[];
  columns: ColumnnType[];
}

export const KanbanGrid = ({ tasks, columns }: Props) => {
  const {
    isDragging,
    listItems,
    handleDragging,
    handleUpdateList,
    handleRemoveFromList,
  } = useDragAndDrop(tasks);

  return (
    <div className="kanban-grid">
      {columns.map((container) => (
        <KanbanColumn
          status={container}
          key={container.id}
          items={listItems}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
          handleRemoveFromList={handleRemoveFromList}
        />
      ))}
    </div>
  );
};
