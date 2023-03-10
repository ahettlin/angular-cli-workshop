import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListPageComponent } from './list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListItemComponent,
    ItemListComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
