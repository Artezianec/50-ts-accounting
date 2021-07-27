export interface UserProfile {
    firstName: string;
    lastName: string;
    login: string;
    roles: Array<String>;
}

export interface State {
    user?: UserProfile;
    token?: string;
}

export interface UserRegister {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
}

export interface Action {
    type: string;
    payload: any;
}

export type Dispatch = (action: Action) => void
export type GetState = () => State