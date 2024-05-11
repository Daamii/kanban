import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { KanbanGrid } from "../../features/Kanban/KanbanGrid";
import { selectKanban, setColumns } from "../../store/kanbanSlice";
import { ColumnnType } from "../../Types/types";

import "./kanban-page.scss";
import { TaskForm } from "./TaskForm";

export const KanbanPage = () => {
  const dispatch = useDispatch();

  const kanbanData = useSelector(selectKanban);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="kanban-page">
      <div>
        <button onClick={() => setIsOpen(true)}>create task</button>
        <button
          onClick={() => {
            kanbanData.columns.length <= 4 &&
              dispatch(
                setColumns([
                  ...kanbanData.columns,
                  {
                    uuid: v4(),
                    label: "new",
                  } as ColumnnType,
                ])
              );
          }}
        >
          add column
        </button>
      </div>
      <TaskForm isModalOpen={isOpen} setModalOpen={setIsOpen} />
      <KanbanGrid tasks={kanbanData.tasks} columns={kanbanData.columns} />
    </div>
  );
};
