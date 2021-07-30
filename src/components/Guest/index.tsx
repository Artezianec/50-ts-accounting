import React, {useState} from 'react';
import Register from "./Register";
import Login from "./Login";

const Guest = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <React.Fragment>
            {isLogin ? <Login/> : <Register/>}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to register' : 'Switch to Login'}</button>
        </React.Fragment>
    );
};

export default Guest;