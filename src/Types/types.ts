export interface TaskType {
  uuid: string;
  label: string;
  creationDate: string;
  columnId: number;
  content?: string;
}

export interface ColumnnType {
  id: number;
  label: string;
}
