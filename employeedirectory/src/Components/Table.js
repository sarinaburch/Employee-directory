import Reacht, { Component } from "react";



const Employees = (props) => {
    return (
        <div>
            <table className="empTable">
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
                      {props.Employees.map((person) => {
                          return <td key= {person.id} className="list-group-item">{person.first}</td>
                      })}
                      {props.Employees.map((person) => {
                          return <td key= {person.id} className="list-group-item">{person.last}</td>
                      })}
                      {props.Employees.map((person) => {
                          return <td key= {person.id} className="list-group-item">{person.email}</td>
                      })}
                      {props.Employees.map((person) => {
                          return <td key= {person.id} className="list-group-item">{person.phone}</td>
                      })}
                      {props.Employees.map((person) => {
                          return <td key= {person.id} className="list-group-item">{person.location}</td>
                      })}
                  </tr>  
                </tbody>
            </table>
        </div>
    );
};

export default Employees;