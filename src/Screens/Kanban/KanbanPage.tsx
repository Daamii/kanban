import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { PrimaryButton } from "../../components/Buttons/ButtonPrimary";
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
        <PrimaryButton onClick={() => setIsOpen(true)}>
          create task
        </PrimaryButton>
        <PrimaryButton
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
        </PrimaryButton>
      </div>
      <TaskForm isModalOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <KanbanGrid tasks={kanbanData.tasks} columns={kanbanData.columns} />
    </div>
  );
};
