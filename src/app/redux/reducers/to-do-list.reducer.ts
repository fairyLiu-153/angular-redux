import { Action } from 'redux';
import * as _ from 'lodash';
import { AddToDoAction, ToggleToDoAction, DeleteToDoAction } from '../actions/to-do-list.action';
export interface ITodoItem {
    text: string;
    completed: boolean;
}

export interface ToDosState {
    todos: ITodoItem[];

}
export const initialState: ToDosState = {
    todos: []
};

export const ToDosReducer = function (state: ToDosState = initialState, action: Action) {
    let todoList: ITodoItem[];
    let todoItem: ITodoItem = {
        text: '',
        completed: false
    };
    switch (action.type) {
        case 'ADD_TODO':
            todoList = state.todos;
            todoItem.text = (action as AddToDoAction).text;
            todoItem.completed = false;
            return Object.assign({todos: [...todoList, todoItem]});

        case 'TOGGLE_TODO': {
            todoList = state.todos;
            todoItem = (action as ToggleToDoAction).todoItem;
            todoItem.completed = !todoItem.completed;
            return Object.assign({todos: [...todoList]});
        }
        case 'DELETE_TODO': {
            todoList = state.todos;
            todoItem = (action as DeleteToDoAction).todoItem;
            return Object.assign({}, state, {
                todos: _.reject(todoList, todo => todo === todoItem)
            });
        }
        default:
            return state;
    }

};
