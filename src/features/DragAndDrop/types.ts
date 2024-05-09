export interface Data {
  id: number;
  content: string;
  // status: Status;
  columnId: number;
}

export interface ColumnnType {
  id: number;
  label: string;
}

export type Status = "good" | "bad" | "normal";
