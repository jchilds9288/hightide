import axios from "axios";

export default {
    // Save user to the database
    saveUser: function(userData){
        return axios.post("http://localhost:3001/api/users",userData)
    },

    saveTask: function(id){
        return axios.post("/api/users/" + id)
    },
    // Get the user with given id
    getUserData: function(id) {
        return axios.get("/api/users/" + id)
    },

    getTasks: function(id){
        return axios.get("/api/users/" + id)
    }
};