import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import NavBarComponent from "./routes/NavBarComponent";
import RouteError from "./routes/RouteError";
import { KanbanPage } from "./Screens/Kanban/KanbanPage";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavBarComponent>
        <KanbanPage />
      </NavBarComponent>
    ),
    errorElement: <RouteError />,
  },
  {
    path: "kanban",
    element: (
      <NavBarComponent>
        <KanbanPage />
      </NavBarComponent>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
