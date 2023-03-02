export interface TodoItem {
  id: number
  task: string;
  createdOn: number;
  completedOn: number | null;
}
