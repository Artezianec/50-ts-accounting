import {Action, Dispatch, GetState, UserProfile, UserRegister} from "../types";
import {base_url, createToken} from "../utils/constants";

export const PUT_USER = 'PUT_USER';
export const LOGOUT = 'LOGOUT';
export const PUT_TOKEN = 'PUT_TOKEN';


export const putTokenAction = (token: string) => {
    //localStorage.setItem('token', token);
    return {
        type: PUT_TOKEN,
        payload: token
    }
}

export const putUserAction = (userProfile: UserProfile): Action => (
    {
        type: PUT_USER,
        payload: userProfile
    }
);

export const registerUser = (user: UserRegister) => {
    return (dispatch: Dispatch) => {
        fetch(`${base_url}/account/user`, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status)
                }
            })
            .then(userProfile => {
                dispatch(putUserAction(userProfile));
                const token = createToken(user.login, user.password);
                dispatch(putTokenAction(token));
            })
            .catch(e => {
                console.log(e.message);
                //todo
            })
    }
}

export const logoutAction = () => {

    return {
        type: LOGOUT,
    }
}

export const getUser = (token: string) => {
    return (dispatch: Dispatch) => {
        fetch(`${base_url}/account/login`, {
            method: 'Post',
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status)
                }
            })
            .then(userProfile => {
                dispatch(putUserAction(userProfile));
                dispatch(putTokenAction(token));
            })
            .catch(e => {
                console.log(e.message);
                //todo
            })
    }
}

export const changePassword = (oldPassword: string, newPassword: string) => {
    return (dispatch: Dispatch, getState: GetState) => {
        fetch(`${base_url}/account/user/password`, {
            method: 'Put',
            headers: {
                Authorization: createToken(getState().user!.login, oldPassword),
                'X-Password': newPassword
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status)
                }
            })
            .then(response => {
                if (response.ok) {
                    const newToken = createToken(getState().user!.login, newPassword)
                    dispatch(putTokenAction(newToken));
                } else {
                    throw new Error('' + response.status);
                }
            })
            .catch(e => {
                console.log(e.message);
                //todo
            })
    }
}

export const updateUser = (firstName: string, lastName: string) => {
    return (dispatch: Dispatch, getState: GetState) => {
        fetch(`${base_url}/account/user`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getState().token!
            },
            body: JSON.stringify({firstName, lastName})
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status)
                }
            })
            .then(userProfile => {
                dispatch(putUserAction(userProfile));
            })
            .catch(e => {
                console.log(e.message);
                //todo
            })
    }
}