import React from 'react';
import API from '../Utils/API';

class PersonList extends React.Component {
    state = {
        result: [],
        sortOrder: "",
        searchInput: ""
    };

    componentDidMount() {
        this.resultEmployees("")
    }

    resultEmployees = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err))
    }

   editSearchTerm = (e) => {
       this.setState({searchInput: e.target.value})
   }

   dynamicSearch = () => {
       return this.state.result.last.filter(results => results.toLowerCase().includes(this.state.searchInput.toLowerCase()))
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
                return 0;
            } else {
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
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
                return 0;
            } else {
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            }
        });
        const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des";
        this.setState({ result: newSort, sortOrder: newSortOrder })
    }

  

    render() {
        return (
            <div>
                <section className="hero is-light">
                    <div className="hero-body ">
                        <div className="container has-text-centered ">
                            <h1 className="title">
                                Employee Directory
                            </h1>
                            <h4>*Click First or Last Name to sort alphabetically or search by name in search bar.</h4>
                            <input className="input is-rounded is-normal" type="text" placeholder="Search Employee By Name" value={this.state.searchInput} onChange= {this.editSearchTerm} />
                        </div>
                    </div>
                </section>
                <table className="table-container table is-fullwidth is-hoverable scheme-main-bis">
                    <thead>
                        <tr>
                            <th onClick={() => this.handleStringSort("first")}>First Name</th>
                            <th onClick={() => this.handleStringSort2("last")}>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Employee ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.result.map(result => {
                            return <tr > 
                                <td>{result.name.first}</td>
                                <td result={this.dynamicSearch}>{result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.phone}</td>
                                <td>{result.location.city}</td>
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