import React from 'react';
import Axios from 'axios';

class PersonList extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
    results: []
};
   }
componentDidMount() {
    Axios.get('https://randomuser.me/api/?results=100&nat=us').then(res => {
        const results = res.data.results;
        this.setState({ results: results });
        console.log(results)
    })
};


render() {
    return (
        <tbody>
            {this.state.results.map(result => {
                return <tr>
                    <td>{result.name.first}</td>
                    <td>{result.name.last}</td>
                    <td>{result.email}</td>
                    <td>{result.phone}</td>
                    <td>{result.id.value}</td>
                </tr>;
            })}
        </tbody>
    );
}
}
export default PersonList;