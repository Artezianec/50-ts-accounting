import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getUser, registerUser} from "../../actions/userActions";
import {UserRegister} from "../../types";

const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();
    const handleClickReset = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
    const handleClickRegister = () => {
        const user: UserRegister = {login, password, firstName, lastName};
        dispatch(registerUser(user));
    }
    return (
        <div>
            <label>Login:
                <input
                    type='text'
                    value={login}
                    onChange={e => setLogin(e.target.value.trim())}
                />
            </label>
            <label>Password:
                <input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value.trim())}
                />
            </label>
            <label>First name:
                <input
                    type='text'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value.trim())}
                />
            </label>
            <label>Last name:
                <input
                    type='text'
                    value={lastName}
                    onChange={e => setLastName(e.target.value.trim())}
                />
            </label>
            <button onClick={handleClickRegister}>Register</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
    );
};

export default Register;