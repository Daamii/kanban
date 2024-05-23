import React from "react";

import "./buttons.scss";
import { CustomButtonProps } from "./types";

export const PrimaryButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  enabled = true,
}) => {
  return (
    <button
      disabled={!enabled}
      className={enabled ? "primary-button" : "disabled-button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
