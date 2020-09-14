import { Reducer, combineReducers } from 'redux';
import { LoginState, LoginReducer } from './login.reducer';
export * from './login.reducer';
import { ToDosState, ToDosReducer } from './to-do-list.reducer';
export * from './to-do-list.reducer';




export interface AppState {
    login: LoginState;
    toDoList: ToDosState;

}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    login: LoginReducer,
    toDoList: ToDosReducer
});


