import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbar.scss";

const computeClassName = (elementPaths: string[], currentPath: string) => {
  return `navbar__element ${
    elementPaths.includes(currentPath) ? "navbar__element--current" : ""
  }`;
};

const NavBarComponent: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="navbar">
        <Link
          className={computeClassName(["/kanban", "/"], pathname)}
          to={"/kanban"}
        >
          Kanban
        </Link>
        <Link
          className={computeClassName(["/settings"], pathname)}
          to={"/settings"}
        >
          Settings
        </Link>
      </nav>
      {children ?? null}
    </>
  );
};
export default NavBarComponent;
