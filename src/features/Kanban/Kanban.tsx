import React from "react";
import "./kanban.scss";
import { Data, ColumnnType } from "./types";
import { useDragAndDrop } from "../../hooks/useDragAndDrops";
import { KanbanColumn } from "./KanbanColumn";

interface Props {
  initialData?: Data[];
  columns?: ColumnnType[];
}

export const KanbanGrid = ({ initialData, columns }: Props) => {
  const {
    isDragging,
    listItems,
    handleDragging,
    handleUpdateList,
    handleRemoveFromList,
  } = useDragAndDrop(initialData || sampleData);

  return (
    <div className="kanban-grid">
      {(columns || sampleColumns).map((container) => (
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

const sampleColumns: ColumnnType[] = [
  { id: 1, label: "Main Column" },
  { id: 2, label: "Secondary Column" },
  { id: 3, label: "Extra Column" },
];

const sampleData: Data[] = [
  {
    id: 1,
    label: "Item 1",
    content: "Item 1 description",
    columnId: 1,
    creationDate: new Date(),
  },
  {
    id: 2,
    label: "Item 2",
    content:
      "Item 2 description, extended with more description with more than 2 lines",
    columnId: 1,
    creationDate: new Date(),
  },
  {
    id: 3,
    label: "Item 3",
    content: "Item 3 description",
    columnId: 1,
    creationDate: new Date(),
  },
  {
    id: 4,
    label: "Item 4",
    content: "Item 4 description",
    columnId: 1,
    creationDate: new Date(),
  },
  {
    id: 5,
    label: "Item 5",
    content: "Item 5 description",
    columnId: 1,
    creationDate: new Date(),
  },
  {
    id: 6,
    label: "Item 6",
    content: "Item 6 description",
    columnId: 1,
    creationDate: new Date(),
  },
];
