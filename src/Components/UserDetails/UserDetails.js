import React, { useState } from 'react'
import RoleSelection from './RoleSelection'
import { useSelector } from 'react-redux';
import './../../scss/UserDetails.scss'

function UserDetails({ userDetails, saveUserDetails }) {
    let name = userDetails.name ? userDetails.name : "Name"
    let email = userDetails.email ? userDetails.email : "Username@ourbranch.com"
    let role = userDetails.role ? userDetails.role : "MARKETING"
    const user = useSelector((state) => state.currentUser);
    const [nameInput, setName] = useState(name)

    function onInputChange(e){
        setName(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className='container'>
            <div className='header-wrapper'>
                <h1>{email}</h1>
                <button onClick={() => saveUserDetails(nameInput, email, user.user.role)}>Save</button>
            </div>
            <div className='footer-wrapper'>
                <div className='name-input-wrapper'>
                    <label htmlFor='name-input'>Name</label>
                    <input id='name-input' value={nameInput} type={"text"} onChange={(e) => onInputChange(e)}/>
                </div>
                <RoleSelection role={role}/>
            </div>
        </div>
    )
}

export default UserDetails