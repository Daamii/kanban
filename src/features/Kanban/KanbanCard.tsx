import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { TaskType } from "../../Types/types";

interface CardProps {
  data: TaskType;
  handleDragging: (dragging: boolean) => void;
  handleRemoveFromList: (id: string) => void;
}

export const KanbanCard = ({
  data,
  handleDragging,
  handleRemoveFromList,
}: CardProps) => {
  const handleDragEnd = () => handleDragging(false);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.uuid}`);
    handleDragging(true);
  };
  return (
    <span
      className="kanban-card"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="kanban-card__label">{data.label}</div>
      <div className="kanban-card__description">{data.content}</div>
      <div className="kanban-card__buttons">
        <div className="kanban-card__buttons__button">
          <MdEdit />
        </div>
        <div
          className="kanban-card__buttons__button"
          onClick={() => handleRemoveFromList(data.uuid)}
        >
          <MdDelete />
        </div>
      </div>
    </span>
  );
};
