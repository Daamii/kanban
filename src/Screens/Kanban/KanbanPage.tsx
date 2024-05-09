import React from "react";
import { KanbanGrid } from "../../features/Kanban/Kanban";

import "./kanban-page.scss";

export const KanbanPage = () => {
  return (
    <div className="kanban-page">
      {/* <div>KanbanPage</div> */}
      <KanbanGrid />
    </div>
  );
};
