import axios from "axios";

export default {
    // Save user to the database
    saveUser: function(userData){
        return axios.post("http://localhost:3001/api/users",userData)
    },

    saveTask: function(taskData){
        return axios.post("http://localhost:3001/api/users/:id",taskData)
    },
    // Get the user with given id
    getUser: function(id) {
        return axios.get("api/users/" + id)
    },
};