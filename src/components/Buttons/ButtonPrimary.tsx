import React, { MouseEventHandler, ReactNode } from "react";

import "./buttons.scss";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  enabled?: boolean;
}

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
