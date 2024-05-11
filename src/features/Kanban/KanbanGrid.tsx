import React from "react";
import "./kanban.scss";
import { TaskType, ColumnnType } from "../../Types/types";
import { useDragAndDrop } from "../../hooks/useDragAndDrops";
import { KanbanColumn } from "./KanbanColumn";
import { useDispatch } from "react-redux";
import { removeTaskById, updateList } from "../../store/kanbanSlice";

interface Props {
  tasks: TaskType[];
  columns: ColumnnType[];
}

export const KanbanGrid = ({ tasks, columns }: Props) => {
  const dispatch = useDispatch();
  const { isDragging, handleDragging } = useDragAndDrop();

  return (
    <div className="kanban-grid">
      {columns.map((container) => (
        <KanbanColumn
          status={container}
          key={container.uuid}
          items={tasks}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={(id, status) =>
            dispatch(updateList({ taskId: id, newColumnId: status }))
          }
          handleRemoveFromList={(id) => dispatch(removeTaskById({ id }))}
        />
      ))}
    </div>
  );
};
