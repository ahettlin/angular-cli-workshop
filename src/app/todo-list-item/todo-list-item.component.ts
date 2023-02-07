import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input()
  public todo!: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
