import { Component } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public itemToAdd: string = '';

  private todos: TodoItem[] = [
    new TodoItem('Learn about Angular'),
    new TodoItem('Use the CLI'),
    new TodoItem('Profit!')
  ]

  public get thingsStillToDo(): TodoItem[] {
    return this.todos.filter(todo => !todo.isComplete);
  }

  public get thingsDone(): TodoItem[] {
    return this.todos.filter(todo => todo.isComplete);
  }

  public add() {
    if (this.itemToAdd) {
      this.todos.push(new TodoItem(this.itemToAdd));
      this.itemToAdd = '';
    }
  }
}
