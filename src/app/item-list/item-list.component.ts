import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  @Input()
  public items!: TodoItem[];

  @Input()
  public title!: string;

  @Input()
  public emptyMessage!: string;
}
