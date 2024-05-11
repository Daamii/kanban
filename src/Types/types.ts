export interface TaskType {
  uuid: string;
  label: string;
  creationDate: string;
  columnUuid: string;
  content?: string;
  order?: number;
}

export interface ColumnnType {
  uuid: string;
  label: string;
  order?: number;
}
