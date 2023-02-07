export class TodoItem {
  public createdOn: Date = new Date();
  public completedOn: Date | null = null;

  constructor(public task: string) { }

  public get actionDate(): Date {
    return this.completedOn ?? this.createdOn;
  }

  public get isComplete(): boolean {
    return !!this.completedOn;
  }

  public complete() {
    this.completedOn = new Date();
  }
}
