import React from "react";

import "./buttons.scss";
import { CustomButtonProps } from "./types";

export const PrimaryButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
};
