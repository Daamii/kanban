import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const NavBarComponent: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"}>/</Link>
        <Link to={"/kanban"}>kanban</Link>
        <Link to={"/error"}>error</Link>
      </nav>
      {children ?? null}
    </>
  );
};
export default NavBarComponent;
