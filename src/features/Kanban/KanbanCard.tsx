import React, { useState } from "react";
import { MdEdit, MdDelete, MdCheck, MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { TaskForm } from "../../Screens/Kanban/TaskForm";
import { markTaskAsFinished } from "../../store/kanbanSlice";
import { TaskType } from "../../Types/kanbanTypes";

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
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [deleteConfirmed, setSeleteConfirmed] = useState(false);

  const markAsfinished = () => {
    dispatch(markTaskAsFinished(data.uuid));
  };
  const handleDelete = () => {
    deleteConfirmed && handleRemoveFromList(data.uuid);
  };
  const handleDragEnd = () => handleDragging(false);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.uuid}`);
    handleDragging(true);
  };

  return (
    <>
      <span
        className="kanban-card"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div
          className={`kanban-card__label ${
            data.isFinished ? "kanban-card__label--finished" : ""
          }`}
        >
          {data.label}
        </div>
        <div className="kanban-card__description">{data.content}</div>
        <div className="kanban-card__buttons">
          {deleteConfirmed ? (
            <>
              <div className="kanban-card__buttons__label">Confirm delete</div>
              <div
                className="kanban-card__buttons__button"
                onClick={handleDelete}
              >
                <MdCheck />
              </div>
              <div
                className="kanban-card__buttons__button"
                onClick={() => setSeleteConfirmed(false)}
              >
                <MdOutlineClose />
              </div>
            </>
          ) : (
            <>
              {!data.isFinished && (
                <div
                  className="kanban-card__buttons__button"
                  onClick={markAsfinished}
                >
                  <MdCheck />
                </div>
              )}
              <div
                className="kanban-card__buttons__button"
                onClick={() => setIsOpen(true)}
              >
                <MdEdit />
              </div>
              <div
                className="kanban-card__buttons__button"
                onClick={() => setSeleteConfirmed(true)}
              >
                <MdDelete />
              </div>
            </>
          )}
        </div>
      </span>
      <TaskForm
        currentValue={data}
        isModalOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
};
