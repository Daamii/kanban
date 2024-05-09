import React from "react";
import "./kanban.scss";
import { Data, ColumnnType } from "./types";
import { useDragAndDrop } from "../../hooks/useDragAndDrops";
import { MdDelete, MdEdit } from "react-icons/md";

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

export const KanbanGrid = ({ initialData, columns }: DragAndDropProps) => {
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
      <div className="kanban-column__title">{status.label}</div>
      <div className="kanban-column__content">
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
        <div className="kanban-card__buttons__button">
          <MdDelete />
        </div>
      </div>
    </span>
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
  },
  {
    id: 2,
    label: "Item 2",
    content: "Item 2 description, extended with more description",
    columnId: 1,
  },
  {
    id: 3,
    label: "Item 3",
    content: "Item 3 description",
    columnId: 1,
  },
  {
    id: 4,
    label: "Item 4",
    content: "Item 4 description",
    columnId: 1,
  },
  {
    id: 5,
    label: "Item 5",
    content: "Item 5 description",
    columnId: 1,
  },
  {
    id: 6,
    label: "Item 6",
    content: "Item 6 description",
    columnId: 1,
  },
];
