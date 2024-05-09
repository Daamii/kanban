import React from "react";
import "./kanban.scss";
import { Data, ColumnnType } from "./types";
import { useDragAndDrop } from "./useDragAndDrops";

interface DragAndDropProps {
  initialData?: Data[];
  columns?: ColumnnType[];
}

interface ColumnProps {
  status: ColumnnType;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: ColumnnType["id"]) => void;
}

interface CardProps {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

export const DragAndDrop = ({ initialData, columns }: DragAndDropProps) => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(initialData || sampleData);

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
        />
      ))}
    </div>
  );
};

export const KanbanColumn = ({
  status,
  items,
  isDragging,
  handleDragging,
  handleUpdateList,
}: ColumnProps) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.debug(
      "dropping: ",
      +e.dataTransfer.getData("text"),
      " at ",
      status
    );
    const id = +e.dataTransfer.getData("text");
    handleUpdateList(id, status.id);
    handleDragging(false);
  };
  return (
    <div
      className={`kanban-column ${isDragging ? "layout-dragging" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>{status.label}</p>
      {items.map(
        (item) =>
          status.id === item.columnId && (
            <KanbanCard
              data={item}
              key={item.id}
              handleDragging={handleDragging}
            />
          )
      )}
    </div>
  );
};

export const KanbanCard = ({ data, handleDragging }: CardProps) => {
  const handleDragEnd = () => handleDragging(false);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };
  return (
    <div
      className="kanban-card"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{data.content}</p>
    </div>
  );
};

const sampleColumns: ColumnnType[] = [
  { id: 1, label: "Main Column" },
  { id: 2, label: "Secondary Column" },
];

const sampleData: Data[] = [
  {
    id: 1,
    content: "Item 1",
    columnId: 1,
  },
  {
    id: 2,
    content: "Item 2",
    columnId: 1,
  },
  {
    id: 3,
    content: "Item 3",
    columnId: 1,
  },
  {
    id: 4,
    content: "Item 4",
    columnId: 1,
  },
];
