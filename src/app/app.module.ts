import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DisplayComponent } from './components/display/display.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DoingComponent } from './to-do-list/doing/doing.component';
import { DoneComponent } from './to-do-list/done/done.component';
import { AddTodoComponent } from './to-do-list/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayComponent,
    ToDoListComponent,
    DoingComponent,
    DoneComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
