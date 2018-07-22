const db = require("../models");

module.exports = {
    create: function(req, res){
        console.log("creating")
        console.log(req.body)
        db.Hightidedb
        .create(req.body)
        .then(newUser => res.json(newUser))
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
        .then(newTask => res.json(newTask))
        .then(() => {console.log("controller")})
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        }
        )
    },

    findAllTasks: function(req,res){
        console.log("find all notes")
        db.Taskdb
        .find(req.query)
        .sort({ points:1 })
        .then(dbTask => res.josn(dbTask))
        .catch(err => res.status(422).json(err))
    }
}