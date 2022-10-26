import React from 'react'
import { roleSelection } from './../../Utils/Variables'
import './../../scss/RoleSelection.scss'

import Role from './Role'

function RoleSelection() {
    return (
        <div className='role-selection-wrapper'>
            <div>Role</div>
            {roleSelection.map(role => {
                return <Role key={role} role={role}/>
            })}
        </div>
    )
}

export default RoleSelection