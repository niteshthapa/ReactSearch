import React from 'react';
const Employee = (props) => {
   const {employees} =  props
    return (
        <ul className="list-group">
            {
                employees.map(user => {
                    return <li key={user.id} className="list-group-item">{user.employee}</li>
                })
            }
        </ul>
    )
}
export default Employee;
