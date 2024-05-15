import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { ColumnnType, TaskType } from "../Types/types";

const sampleColumns: ColumnnType[] = [
  { uuid: "1", label: "Main Column", order: 1 },
  { uuid: "2", label: "Secondary Column", order: 2 },
  { uuid: "3", label: "Extra Column", order: 3 },
];

const sampleData: TaskType[] = [
  {
    uuid: v4(),
    label: "Item 1",
    content: "Item 1 description",
    columnUuid: "1",
    creationDate: new Date().toISOString(),
  },
  {
    uuid: v4(),
    label: "Item 2",
    content:
      "Item 2 description, extended with more description with more than 2 lines",
    columnUuid: "1",
    creationDate: new Date().toISOString(),
  },
  {
    uuid: v4(),
    label: "Item 3",
    content: "Item 3 description",
    columnUuid: "1",
    creationDate: new Date().toISOString(),
  },
  {
    uuid: v4(),
    label: "Item 4",
    content: "Item 4 description",
    columnUuid: "1",
    creationDate: new Date().toISOString(),
  },
  {
    uuid: v4(),
    label: "Item 5",
    content: "Item 5 description",
    columnUuid: "1",
    creationDate: new Date().toISOString(),
  },
  {
    uuid: v4(),
    label: "Item 6",
    content: "Item 6 description",
    columnUuid: "1",
    creationDate: new Date().toISOString(),
  },
];

interface KanbanState {
  tasks: TaskType[];
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

    updateList: (
      state,
      action: PayloadAction<{ taskId: string; newColumnId: string }>
    ) => {
      const { taskId, newColumnId } = action.payload;
      const cardIndex = state.tasks.findIndex((item) => item.uuid === taskId);

      if (
        cardIndex !== -1 &&
        state.tasks[cardIndex].columnUuid !== newColumnId
      ) {
        state.tasks[cardIndex].columnUuid = newColumnId;
      }
    },
    removeTaskById: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((t) => t.uuid != id);
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    updateColumn: (state, action: PayloadAction<ColumnnType>) => {
      const { payload: column } = action;

      const colIndex = state.columns.findIndex(
        (item) => item.uuid === column.uuid
      );
      state.columns[colIndex] = column;
    },
    removeColumn: (
      state,
      action: PayloadAction<{ id: ColumnnType["uuid"] }>
    ) => {
      const { id } = action.payload;
      state.columns = state.columns.filter((c) => c.uuid != id);
    },
  },
});

export const selectKanban = (state: { kanban: KanbanState }) => state.kanban;

export const selectTasks = createSelector(
  selectKanban,
  (kanban) => kanban.tasks
);

export const {
  setTasks,
  pushTask,
  updateList,
  removeTaskById,
  setColumns,
  updateColumn,
  removeColumn,
} = kanbanSlice.actions;
export default kanbanSlice.reducer;
