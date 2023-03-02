import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-item.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input()
  public todo!: TodoItem;

  constructor(public todoService: TodoService) { }

}
