export interface TaskType {
  uuid: string;
  label: string;
  creationDate: string;
  columnUuid: string;
  content?: string;
  order?: number;
  isFinished?: boolean;
}

export interface ColumnnType {
  uuid: string;
  label: string;
  order?: number;
}
