import axios from "axios";


export default person = function() {
        return axios.get("https://randomuser.me/api/?results=100");
    };



