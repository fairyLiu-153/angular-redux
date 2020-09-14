import { Action, ActionCreator } from 'redux';
import { ITodoItem } from '../reducers/to-do-list.reducer';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// add todo
export interface AddToDoAction extends Action {
    text: string;
}

export const addTodo: ActionCreator<AddToDoAction> = (text: string) => ({
    type: ADD_TODO,
    text
});

// toggle todo
export interface ToggleToDoAction extends Action {
    todoItem: ITodoItem;

}

export const toggleToDo: ActionCreator<ToggleToDoAction> = (todoItem: ITodoItem) => ({
    type: TOGGLE_TODO,
    todoItem
});

// delete todo
export interface DeleteToDoAction extends Action {
    todoItem: ITodoItem;
}

export const deleteToDo: ActionCreator<ToggleToDoAction> = (todoItem: ITodoItem) => ({
    type: DELETE_TODO,
    todoItem
});

// filter
export interface SetVisibilityFilterAction extends Action {
    filter: string;
}

export const setVisibilityFilter: ActionCreator<SetVisibilityFilterAction> = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});
