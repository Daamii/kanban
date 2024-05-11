import { useState } from "react";

export const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    handleDragging,
  };
};
