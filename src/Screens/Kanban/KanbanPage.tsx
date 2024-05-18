import React from "react";
import { useSelector } from "react-redux";
import { KanbanGrid } from "../../features/Kanban/KanbanGrid";
import { selectKanban } from "../../store/kanbanSlice";

import "./kanban-page.scss";
import { KanbanControlPanel } from "./KanbanControlPanel";

export const KanbanPage = () => {
  const kanbanData = useSelector(selectKanban);

  return (
    <div className="kanban-page">
      <KanbanControlPanel />
      <KanbanGrid tasks={kanbanData.tasks} columns={kanbanData.columns} />
    </div>
  );
};
