import { Action, ActionCreator } from 'redux';


export interface SetIsLoginAction extends Action {
    login: boolean;
}

export const SET_IS_LOGIN = 'SET_IS_LOGIN';
export const setIsLogin: ActionCreator<SetIsLoginAction> = (login: boolean) => ({
    type: SET_IS_LOGIN,
    login

});


