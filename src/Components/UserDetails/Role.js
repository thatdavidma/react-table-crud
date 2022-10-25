import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../Redux/CurrentUser';

function Role({ role }) {
    const user = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    let userObj = user.user;

    function handleRoleChange(){
        dispatch(setCurrentUser({name: userObj.name, email: userObj.email, role: role.toUpperCase()}));
    }
    return (
        <div key={role}>
            <input id={role} checked={userObj.role === role.toUpperCase()} onChange={() => handleRoleChange()} type="radio"/>
            <label htmlFor={role}>{role}</label>
        </div>
    )
}

export default Role

