import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import NavBarComponent from "./routes/NavBarComponent";
import RouteError from "./routes/RouteError";
import { KanbanPage } from "./Screens/KanbanPage";
import App from "./App";

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

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<RouterSidebar />} />
//       <Route path="/kanban" element={<KanbanPage />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
