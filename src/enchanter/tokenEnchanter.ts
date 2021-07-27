import {Action, Dispatch, GetState} from "../types";
import {LOGOUT, PUT_TOKEN} from "../actions/userActions";

interface Store {
    dispatch: Dispatch,
    getState: GetState
}
export const tokenEnchanter = ({dispatch, getState}: Store) => (next: any) => (action: Action) => {
switch (action.type) {
    case LOGOUT:
        localStorage.removeItem('token');
        break;
    case PUT_TOKEN:
        localStorage.setItem('token', action.payload);
        break;
}
return next(action);
}