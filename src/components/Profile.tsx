import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {State, UserProfile} from "../types";
import {logoutAction} from "../actions/userActions";
import UpdateUser from "./UpdateUser";

const Profile = () => {
    const user = useSelector<State, UserProfile>(state => state.user!);
    const dispatch = useDispatch();

    return (
        <div>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Roles: </p>
            <ul>
                {user.roles.map(r => <li>{r}</li>)}
            </ul>
            <button onClick={() => dispatch(logoutAction())}>Logout</button>
            <UpdateUser/>
        </div>
    );
};

export default Profile;