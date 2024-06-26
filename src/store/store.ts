import { configureStore } from "@reduxjs/toolkit";
import kanbanSlice from "./kanbanSlice";

const store = configureStore({
  reducer: {
    kanban: kanbanSlice,
  },
});

export default store;
