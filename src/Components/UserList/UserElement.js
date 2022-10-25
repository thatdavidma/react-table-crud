import React from 'react'
import { useDispatch } from 'react-redux';
import { removeSelectedUser, addSelectedUser} from '../../Redux/SelectionUsers'
import {setCurrentUser } from '../../Redux/CurrentUser'

function UserElement({ userDetails }) {
    const dispatch = useDispatch();
    const name = userDetails.name;
    const email = userDetails.email;
    const role = userDetails.role;

    const handleChange = (e) => {
        e.target.checked ? dispatch(addSelectedUser({ name: name, email: email, role: role })) : dispatch(removeSelectedUser({ email: email }))
    };

    return (
        <tr>
            <td>
                <input type={"checkbox"} id={"user-select-" + email} onChange={(e) => handleChange(e)}/>
            </td>
            <td onClick={() => dispatch(setCurrentUser({ name: name, email: email, role: role }))}>{email}</td>
            <td onClick={() => dispatch(setCurrentUser({ name: name, email: email, role: role }))}>{name}</td>
            <td>{role}</td>
        </tr>
    )
}

export default UserElement