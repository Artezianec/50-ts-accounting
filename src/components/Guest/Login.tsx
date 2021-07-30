import React, {useState} from 'react';
import {createToken} from "../../utils/constants";
import {useDispatch} from "react-redux";
import {getUser} from "../../actions/userActions";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleClickReset = () => {
        setLogin('');
        setPassword('');
    }
    const handleClickLogin = () => {
        const token = createToken(login, password);
        dispatch(getUser(token));
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
            <button onClick={handleClickLogin}>Login</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
    );
};

export default Login;