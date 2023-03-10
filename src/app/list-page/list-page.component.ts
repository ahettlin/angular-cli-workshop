import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {

  constructor(public todoService: TodoService) { }

  public itemToAdd: string = '';

  public add() {
    this.todoService.add(this.itemToAdd);
    this.itemToAdd = '';
  }
}
