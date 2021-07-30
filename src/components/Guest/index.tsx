import React, {useState} from 'react';

const Guest = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <React.Fragment>
            {isLogin ? <Login/> : <Registration/>}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to register' : 'Switch to Login'}</button>
        </React.Fragment>
    );
};

export default Guest;