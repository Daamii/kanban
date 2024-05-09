export interface Data {
  id: number;
  label: string;
  content: string;
  columnId: number;
}

export interface ColumnnType {
  id: number;
  label: string;
}

export type Status = "good" | "bad" | "normal";
