import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getUser} from "./actions/userActions";
import Home from "./components/Home";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(getUser(token));
        }
    }, [])
    return (
      <Home/>
          );
}

export default App;
