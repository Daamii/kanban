import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ColumnnType, Data } from "../Types/types";

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

interface KanbanState {
  tasks: Data[];
  columns: ColumnnType[];
}

const initialState: KanbanState = {
  tasks: sampleData,
  columns: sampleColumns,
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

// Define un selector para obtener todo el slice
export const selectKanban = (state: { kanban: KanbanState }) => state.kanban;

// Opcional: Define un selector para obtener solo las tareas
export const selectTasks = createSelector(
  selectKanban,
  (kanban) => kanban.tasks
);

export const { setTasks } = kanbanSlice.actions;
export default kanbanSlice.reducer;
