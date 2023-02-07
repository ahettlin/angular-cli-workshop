# Angular CLI Workshop Exercise 3 - Services

As it stands, all the business logic and most of the state in our application is currently held in `app.component.ts`, with a bit of state also in `todo-item.model.ts`. This is ok for such a small application like this, but it quickly gets cumbersome when working with larger applications. That's where services come in. They are perfect for sharing state, business logic, or whatever else you want to make available to multiple components, or even other services, across your app.


## Create a service

Let's create a service to maintain the state of our application.

Run
```
ng generate service todo
```

> **Note:** like the command for generating components, this can be shortened to `ng g s [service name]`

The CLI will generate `todo.service.ts` as well as a corresponding spec file for tests. That's all there is to it. You now have a class `TodoService` that can be injected into other components and services.

`todo.service.ts`
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
}
```

Now we can move all the state and business logic from `app.component.ts` into our new service.
Make the following changes:

`todo.service.ts`
```typescript
import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

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

  public add(task: string) {
    if (task) {
      this.todos.push(new TodoItem(task));
    }
  }
}
```

`app.component.ts`
```typescript
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
```

`app.component.html`
```html
<h1>Todo List</h1>

<hr />

<div class="add-item">
  <input [(ngModel)]="itemToAdd" placeholder="Something new to do">
  <button type="button" (click)="add()">Add</button>
</div>

<app-item-list [items]="todoService.thingsStillToDo" title="Items to do" emptyMessage="Nothing to do!!"></app-item-list>
<app-item-list [items]="todoService.thingsDone" title="Completed Items" emptyMessage="Get to work!"></app-item-list>
```

If you don't still have `ng serve` running, start it up. You can check that everything still works the same as before in your browser.

## Making things more real-world

For this example, we've cheated a little bit until now regarding state information. For nearly all web applications, you will be fetching data from a back-end service. Presumably, that data will be in the form of JSON if your back-end is somewhat modern. The thing is, what you get from JSON is plain JavaScript objects and not class instances like we've been using. Lets convert our data structure to fit what we would get if our data came from a back-end that would serve us JSON.

First, convert the `TodoItem` from a class to an interface that will match our hypothetical JSON data structure. Note that the `Date` fields have changed to `number` and we've added an `id` field (which will come in handy in the subsequent exercises). We lose our helper methods because interfaces can't be intstantiated and therefore can't have methods.

`todo-item.model,ts`
```typescript
export interface TodoItem {
  id: number
  task: string;
  createdOn: number;
  completedOn: number | null;
}
```

Update `todo.service.ts` to conform to the interface instead of using a class. Because we have lost our helper functions that were in the model class, lets recreate them here.

```typescript
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
}
```

The `TodoListItemComponent` was relying on a couple of those helper functions we lost, so we need up update that as well to point to our new service instead.

`todo-list-item.component.ts`
```typescript
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
```

`todo-list-item.component.html`
```html
<span>
  {{(todo.completedOn ?? todo.createdOn) | date : 'medium'}} - <strong>{{todo.task}}</strong>
</span>
<button type="button" (click)="todoService.complete(todo)" *ngIf="!todoService.isComplete(todo)">Complete</button>
```

## Conclusion

We have now isolated our state management and business logic in a service that is shared across the application. It has also given us a single place for any related HTTP calls if this were an application with a back-end.
