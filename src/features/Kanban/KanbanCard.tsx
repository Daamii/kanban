import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Data } from "../../Types/types";

interface CardProps {
  data: Data;
  handleDragging: (dragging: boolean) => void;
  handleRemoveFromList: (id: number) => void;
}

export const KanbanCard = ({
  data,
  handleDragging,
  handleRemoveFromList,
}: CardProps) => {
  const handleDragEnd = () => handleDragging(false);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
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
          onClick={() => handleRemoveFromList(data.id)}
        >
          <MdDelete />
        </div>
      </div>
    </span>
  );
};
