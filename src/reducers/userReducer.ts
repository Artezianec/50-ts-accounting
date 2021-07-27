import {Action, State} from "../types";
import {LOGOUT, PUT_TOKEN, PUT_USER} from "../actions/userActions";

const initialState = {}

export const userReducer = (state: State = initialState, action: Action) => {
switch (action.type) {
    case PUT_USER:
        return {...state, user: action.payload}
    case LOGOUT:
        return initialState
    case PUT_TOKEN:
        return {...state, token: action.payload}
    default:
        return state;
}
}