import React from 'react';
import API from '../Utils/API';

class PersonList extends React.Component {
        state = {
            result: [],
            sortOrder: ""
        };

        componentDidMount() {
            this.resultEmployees("")
        }

        resultEmployees = query => {
            API.search(query)
            .then(res => this.setState({result: res.data.results}))
            .catch(err => console.log(err))
        }

        // handleSort = () => {
        //                 let newSort
        //                     if (this.state.sortOrder !== "des") {
        //                        newSort = this.state.result.sort((a, b) => {
        //                         return a.id.value - b.id.value;
        //                     }) 
        //                 } else {
        //                     newSort = this.state.result.sort((a, b) => {
        //                         return b.id.value - a.id.value;
        //                     }) 
        //                 }
        //                 console.log(newSort)
        //                 const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des"
        //                 this.setState({result: newSort, sortOrder: newSortOrder})
        //             }

                    handleStringSort = () => {
                        const newSort = this.state.result.sort((a, b) => {
                            var nameA = a.name.first.toUpperCase();
                            var nameB = b.name.first.toUpperCase();
                            if (this.state.sortOrder === "des") {
                
                                if (nameA < nameB) {
                                    return -1;
                                }
                                if (nameA > nameB) {
                                    return 1;
                                }
                
                                // strings must be equal
                                return 0;
                            } else {
                                if (nameA < nameB) {
                                    return 1;
                                }
                                if (nameA > nameB) {
                                    return -1;
                                }
                
                                // strings must be equal
                                return 0;
                            }
                        });
                        const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des";
                        this.setState({ result: newSort, sortOrder: newSortOrder })
                    }
                    handleStringSort2 = () => {
                        const newSort = this.state.result.sort((a, b) => {
                            var nameA = a.name.last.toUpperCase();
                            var nameB = b.name.last.toUpperCase();
                            if (this.state.sortOrder === "des") {
                
                                if (nameA < nameB) {
                                    return -1;
                                }
                                if (nameA > nameB) {
                                    return 1;
                                }
                
                                // strings must be equal
                                return 0;
                            } else {
                                if (nameA < nameB) {
                                    return 1;
                                }
                                if (nameA > nameB) {
                                    return -1;
                                }
                
                                // strings must be equal
                                return 0;
                            }
                        });
                        const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des";
                        this.setState({ result: newSort, sortOrder: newSortOrder })
                    }

render() {
    return (
        <div>
        <table className="table-container table is-fullwidth is-hoverable scheme-main-bis">
            <thead>
                <tr>
                    <th onClick={() => this.handleStringSort("first")}>First Name</th>
                    <th onClick={() => this.handleStringSort2("last")}>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th onClick={() => this.handleSort("id.value")}>Employee ID</th>
                </tr>
            </thead>
            <tbody>
                {this.state.result.map(result => {
                    return <tr>
                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                        <td>{result.email}</td>
                        <td>{result.phone}</td>
                        <td>{result.id.value}</td>
                    </tr>;
                })}
            </tbody>
        </table>
        </div>
    );
}
}

export default PersonList;