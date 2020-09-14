import { Injectable } from '@angular/core';
import { createStore, Store, Unsubscribe } from 'redux';
import { AppState, rootReducer} from './reducers';
import { LoginState } from './reducers/login.reducer';
import { ITodoItem, ToDosState } from './reducers/to-do-list.reducer';
import { TodoListActions, LoginActions } from './actions';


@Injectable({
  providedIn: 'root'
})
export class ReduxService {
  private store: Store<AppState>;
  private unsubscribe: Unsubscribe;
  constructor() {
    // 创建redux store 来存放应用的状态
    this.store = createStore(
      rootReducer
    );
  }

  // 读取状态
  getIsLogin(): boolean {
    const state: LoginState = this.store.getState().login;
    return state.login;

  }

  // 改变内部state -> dispatch一个action
  setIsLogin(login: boolean) {
    this.store.dispatch(LoginActions.setIsLogin(login));
  }

  // 订阅更新
  subscribeStore(readStateFun: () => void) {
    this.unsubscribe = this.store.subscribe(readStateFun);
  }

  getTodoList() {
    const todoState: ToDosState = this.store.getState().toDoList;
    return todoState;
  }

  addTodo(text: string) {
    this.store.dispatch((TodoListActions.addTodo(text)));
  }

  deleteTodo(todoItem: ITodoItem) {
    this.store.dispatch(TodoListActions.deleteToDo(todoItem));
  }

  toggleTodo(todoItem: ITodoItem) {
    this.store.dispatch(TodoListActions.toggleToDo(todoItem));
  }
}
