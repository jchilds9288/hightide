import axios from "axios";

export default {
    saveUser: function(userData){
        return axios.post("http://localhost:3001/api/users",userData)
    }
};