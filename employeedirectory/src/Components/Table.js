import React from "react";


function Table() {
    return (
        <div>
            <table class="table-container table is-fullwidth is-hoverable">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                 {/*      {props.Employees.map((person) => {
                            return <td key={person.id} className="list-group-item">{person.props.first}</td>
                        })}
                        {props.Employees.map((person) => {
                            return <td key={person.id} className="list-group-item">{person.props.last}</td>
                        })}
                        {props.Employees.map((person) => {
                            return <td key={person.id} className="list-group-item">{person.props.email}</td>
                        })}
                        {props.Employees.map((person) => {
                            return <td key={person.id} className="list-group-item">{person.props.phone}</td>
                        })}
                        {props.Employees.map((person) => {
                            return <td key={person.id} className="list-group-item">{person.props.location}</td>
                        })} */}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;