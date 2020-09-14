import { Component, OnInit } from '@angular/core';
import { ITodoItem } from 'src/app/redux/reducers';
import { ReduxService } from 'src/app/redux/redux.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  list: ITodoItem[];
  allList: ITodoItem[];

  constructor(
    private reduxService: ReduxService
  ) {

   }

  ngOnInit(): void {
    this.readState();
    this.reduxService.subscribeStore(() => { this.readState(); });
  }

  readState() {
    this.getTodoLists();
  }

  getTodoLists() {
    this.allList = this.reduxService.getTodoList().todos;
    this.list = _.filter(this.allList, item => item.completed === true)
  }

  delete(item: ITodoItem) {
    this.reduxService.deleteTodo(item);

  }

  toggle(item: ITodoItem) {
    this.reduxService.toggleTodo(item);

  }

}
