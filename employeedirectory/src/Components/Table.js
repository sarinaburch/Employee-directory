import React from "react";
import Employees from "./EmployeeData";
import persons from "../persons.json"

function Table(props) {
    return (
        <div>
            <table className="table-container table is-fullwidth is-hoverable scheme-main-bis">
                <thead>
                    <tr>
                        
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                {persons.map(person => (
                    <Employees
                    first={person.first}
                    last={person.last}
                    email={person.email}
                    phone={person.phone} 
                    id={person.id} />
                ))}
            </table>
        </div>
    )
}

export default Table;