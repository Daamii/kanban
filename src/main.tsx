import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import NavBarComponent from "./routes/NavBarComponent";
import RouteError from "./routes/RouteError";
import { KanbanPage } from "./Screens/Kanban/KanbanPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarComponent />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
