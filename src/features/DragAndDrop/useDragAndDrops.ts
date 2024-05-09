import { useState } from "react";
import { ColumnnType, Data } from "./types";

export const useDragAndDrop = (initialState: Data[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>(initialState);

  const handleUpdateList = (id: number, status: ColumnnType["id"]) => {
    let card = listItems.find((item) => item.id === id);

    if (card && card.columnId !== status) {
      card.columnId = status;

      setListItems((prev) => [card!, ...prev.filter((item) => item.id !== id)]);
    }
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    listItems,
    handleUpdateList,
    handleDragging,
  };
};
