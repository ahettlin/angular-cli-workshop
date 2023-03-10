import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // This would be a call to your back-end to get the list of items,
  // possibly on construction of this service, or as a function call to fetch on demand.
  private todos: TodoItem[] = [{
    id: 1,
    task: 'Learn about Angular',
    createdOn: new Date().getTime(),
    completedOn: null
  }, {
    id: 2,
    task: 'Use the CLI',
    createdOn: new Date().getTime(),
    completedOn: null
  }, {
    id: 3,
    task: 'Profit!',
    createdOn: new Date().getTime(),
    completedOn: null
  }];

  public get thingsStillToDo(): TodoItem[] {
    return this.todos.filter(todo => !this.isComplete(todo));
  }

  public get thingsDone(): TodoItem[] {
    return this.todos.filter(this.isComplete, this);
  }

  public add(task: string) {
    if (task) {
      // This would typically be a call to the back-end to create the new entity and return the object with an ID
      // For now, we'll just compute the next highest ID and use that.
      const nextId = this.todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
      this.todos.push({
        id: nextId,
        task: task,
        createdOn: new Date().getTime(),
        completedOn: null
      });
    }
  }

  public isComplete(todo: TodoItem): boolean {
    return !!todo.completedOn;
  }

  public complete(todo: TodoItem) {
    // This would typically be a call to the back-end to update the entity and return the object with the updated date
    todo.completedOn = new Date().getTime();
  }

  public get(id: number): TodoItem | undefined {
    // This would typically be a call to the back-end to fetch the entity
    // For now, we'll just find the item in the array
    return this.todos.find(todo => todo.id === id);
  }

  public markIncomplete(todo: TodoItem) {
    // This would typically be a call to the back-end to update the entity and return the object with the updated date
    todo.completedOn = null;
  }

  public delete(item: TodoItem) {
    // This would typically be a call to the back-end to delete the entity
    const index = this.todos.indexOf(item);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
