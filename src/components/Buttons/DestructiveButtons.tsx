import React from "react";
import { CustomButtonProps } from "./types";

import "./buttons.scss";

export const DestructiveButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  enabled,
}) => {
  return (
    <button
      className={`destructive-button${!enabled ? " button-disabled" : ""}`}
      disabled={!enabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
