import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoItem } from '../todo-item.model';
import { TodoService } from '../todo.service';

@Component({
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  public item?: TodoItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    // Here's where we extract the id variable from the route that we defined earlier in the exercise
    const id = Number(this.route.snapshot.params['id']);
    this.item = this.todoService.get(id);
  }

  public get isComplete(): boolean {
    return this.todoService.isComplete(this.item!);
  }

  public toggleComplete() {
    (this.isComplete ? this.todoService.markIncomplete : this.todoService.complete)(this.item!);
  }

  public delete() {
    if (confirm(`Are you sure you want to delete "${this.item!.task}"?`)) {
      this.todoService.delete(this.item!);
      this.router.navigate(['/']);
    }
  }
}
