import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public todoService: TodoService) { }

  public itemToAdd: string = '';

  public add() {
    this.todoService.add(this.itemToAdd);
    this.itemToAdd = '';
  }
}
