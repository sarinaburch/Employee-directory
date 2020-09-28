import React from 'react';

function Employees(props) {
    return (
        <tbody>
            <tr>
                
                <td>{props.first}</td>
                <td>{props.last}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
               <td>{props.id}</td>
            </tr>
        </tbody>
    )
}

export default Employees;