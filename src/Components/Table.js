import React from "react";
import PersonList from "./EmployeeData";


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
                
                <PersonList />
            
            </table>
        </div>
    )
}

export default Table;