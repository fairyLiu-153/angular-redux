import { Component, OnInit } from '@angular/core';
import { ReduxService } from 'src/app/redux/redux.service';
import { ITodoItem } from 'src/app/redux/reducers';
import * as _ from 'lodash';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.scss']
})
export class DoingComponent implements OnInit {

  list: ITodoItem[];
  allList: ITodoItem[];


  constructor(
    private reduxService: ReduxService
  ) { }

  ngOnInit(): void {
    this.readState();
    this.reduxService.subscribeStore(() => { this.readState(); });
  }

  readState() {
    this.getTodoLists();
  }

  getTodoLists() {
    this.allList = this.reduxService.getTodoList().todos;
    this.list = _.filter(this.allList, item => item.completed === false);
  }

  delete(item: ITodoItem) {
    this.reduxService.deleteTodo(item);

  }

  toggle(item: ITodoItem) {
    this.reduxService.toggleTodo(item);

  }

}
