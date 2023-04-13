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
             {employees.length == 0 && <li className="list-group-item">No user found</li>}
        </ul>
    )
}
export default Employee;
