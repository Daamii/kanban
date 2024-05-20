import React from "react";
import "./kanban.scss";
import { TaskType, ColumnnType } from "../../Types/kanbanTypes";
import { useDragAndDrop } from "../../hooks/useDragAndDrops";
import { KanbanColumn } from "./KanbanColumn";
import { useDispatch } from "react-redux";
import { removeTaskById, moveTaskToColumn } from "../../store/kanbanSlice";

interface Props {
  tasks: TaskType[];
  columns: ColumnnType[];
}

export const KanbanGrid = ({ tasks, columns }: Props) => {
  const dispatch = useDispatch();
  const { isDragging, handleDragging } = useDragAndDrop();

  return (
    <div className="kanban-grid">
      {columns.map((column) => (
        <KanbanColumn
          column={column}
          key={column.uuid}
          items={tasks}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleMoveTaskToColumn={(taskId, columnId) =>
            dispatch(
              moveTaskToColumn({ taskId: taskId, newColumnId: columnId })
            )
          }
          handleRemoveFromList={(id) => dispatch(removeTaskById({ id }))}
        />
      ))}
    </div>
  );
};
