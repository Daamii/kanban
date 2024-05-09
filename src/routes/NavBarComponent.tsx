import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const NavBarComponent: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar__element" to={"/"}>
          /
        </Link>
        <Link className="navbar__element" to={"/kanban"}>
          kanban
        </Link>
        <Link className="navbar__element" to={"/error"}>
          error
        </Link>
      </nav>
      {children ?? null}
    </>
  );
};
export default NavBarComponent;
