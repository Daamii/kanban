import { ReactNode, MouseEventHandler } from "react";

export interface CustomButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  enabled?: boolean;
}
