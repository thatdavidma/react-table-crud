import React from 'react'
import UserElement from './UserElement'
import './../../scss/UserList.scss'

function UserList({ listOfUsers, adjustSelectedUsers, deleteSelectedUsers }) {
    const tableHeaders = ["", "EMAIL", "NAME", "ROLE"];

    return (
        <div>
            <header>
                <h1>Users</h1>
                <button id='deleteUserButton' onClick={() => deleteSelectedUsers()}>Delete</button>
            </header>
            <table className='table-container'>
                <thead>
                    <tr className='table-header'>
                        {tableHeaders.map(header => {
                            return <th key={header}>{header}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {listOfUsers.map(user => {
                        return <UserElement key={user.name} userDetails={user} adjustSelectedUsers={adjustSelectedUsers}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserList