import React from 'react';
import {useSelector} from "react-redux";
import {State} from "../types";
import {Switch, Route, Redirect} from "react-router-dom";
import Guest from "./Guest";

const Home = () => {
    const token = useSelector<State, string | undefined>(state => state.token);
    return (
        <Switch>
            <Route>
                <Route exact path='profile/' render={() => token?  <Profile/> : <Redirect to={'/home'}/>}/>
                <Route exact path={['/', '/home']} render={() => token ? <Redirect to={'/profile'}/> : <Guest/>}/>
            </Route>
        </Switch>
    );
};

export default Home;