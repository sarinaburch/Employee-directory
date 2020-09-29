// import React from 'react';
// import Axios from 'axios';

// class Users extends React.Componenet {
//     state = {
//         userList: results,
//         sortOrder: ""
//     };

// componentDidMount() {
//     Axios.get('https://randomuser.me/api/?results=100&nat=us').then(res => {
//         var results = res.data.results;
//         this.setState({ results: results });
//         console.log(results)

//     })
// };

//     handleSort = () => {
//             console.log("test")
//             let newSort
//                 if (this.state.sortOrder !== "des") {
//                    newSort = this.state.results.sort((a, b) => {
//                     return a.id - b.id;
//                 }) 
//             } else {
//                 newSort = this.state.results.sort((a, b) => {
//                     return b.id - a.id;
//                 }) 
//             }
//             console.log(newSort)
//             const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des"
//             this.state({results: newSort, sortOrder: newSortOrder})
//         }
//     }; 
// export default Users;