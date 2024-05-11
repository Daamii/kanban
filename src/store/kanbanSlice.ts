import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    creationDate: new Date().toISOString(),
  },
  {
    id: 2,
    label: "Item 2",
    content:
      "Item 2 description, extended with more description with more than 2 lines",
    columnId: 1,
    creationDate: new Date().toISOString(),
  },
  {
    id: 3,
    label: "Item 3",
    content: "Item 3 description",
    columnId: 1,
    creationDate: new Date().toISOString(),
  },
  {
    id: 4,
    label: "Item 4",
    content: "Item 4 description",
    columnId: 1,
    creationDate: new Date().toISOString(),
  },
  {
    id: 5,
    label: "Item 5",
    content: "Item 5 description",
    columnId: 1,
    creationDate: new Date().toISOString(),
  },
  {
    id: 6,
    label: "Item 6",
    content: "Item 6 description",
    columnId: 1,
    creationDate: new Date().toISOString(),
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
    pushTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    updateList: (
      state,
      action: PayloadAction<{ id: number; status: number }>
    ) => {
      const { id, status } = action.payload;
      const cardIndex = state.tasks.findIndex((item) => item.id === id);

      if (cardIndex !== -1 && state.tasks[cardIndex].columnId !== status) {
        state.tasks[cardIndex].columnId = status;
      }
    },
    removeTaskById: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((t) => t.id != id);
    },
  },
});

export const selectKanban = (state: { kanban: KanbanState }) => state.kanban;

export const selectTasks = createSelector(
  selectKanban,
  (kanban) => kanban.tasks
);

export const { setTasks, pushTask, setColumns, updateList, removeTaskById } =
  kanbanSlice.actions;
export default kanbanSlice.reducer;
