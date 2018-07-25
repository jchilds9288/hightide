const db = require("../models");

module.exports = {
    create: function(req, res){
        console.log("creating")
        console.log(req.body)
        db.Hightidedb
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        // .then(() => {console.log("controller")})
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        },
    )
    },
    
    // findById: function(req,res){
    //     console.log("getting User")
    //     db.Hightidedb
    //     .findById({_id: req.params.id})
    //     .populate("task")
    //     .then(newUser => res.json(newUser))
    //     .catch(err => res.status(422).json(err))
    // },

    createTask: function(req, res){
        console.log("create Task")
        db.Taskdb
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .then(() => {console.log("controller")})
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        }
        )
    },

    findAllTasks: function(req,res){
        console.log("find all notes")
        db.hightidedb
        .find(req.params.id)
        // .sort({ points:1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}