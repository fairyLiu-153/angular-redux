import { SET_IS_LOGIN, SetIsLoginAction } from '../actions/login.action';
import { Reducer, Action } from 'redux';


export interface LoginState {
    login: boolean;
}

const initialState: LoginState = {
    login: false,
};

/*  reducer改变状态树: 接收旧的state和action，返回新的state
   （state, action）=> state
    当state变化时，需要返回全新的对象，而不是修改传入的参数
*/
export const LoginReducer = function (state = initialState, action: Action) {
    switch (action.type) {
        case SET_IS_LOGIN:
            const login = (action as SetIsLoginAction).login;
            return Object.assign({}, state, { login });
        default:
            return state;
    }
};
