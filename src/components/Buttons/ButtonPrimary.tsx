import React, { MouseEventHandler, ReactNode } from "react";

import "./buttons.scss";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
