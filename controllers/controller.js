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
    
    findById: function(req,res){
        console.log("getting User")
        db.Hightidedb
        .findOne({_id: req.params.id})
        .populate("task")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    createTask: function(req, res){
        console.log("create Task")
        db.Taskdb
        .create({...req.body, users: req.params.id})
        .then(function(dbTask){
            return db.Hightidedb.findOneAndUpdate({_id: req.params.id}, {task: dbTask._id}, {new:true});
        })
        .then(function(dbArticle){
            res.json(dbArticle);
        })
        .catch(function(err){
            res.json(err)
        })
        
        // .then(dbModel => res.json(dbModel))
        // .then(() => {console.log("controller")})
        // .catch(err => {
        //     console.log(err)
        //     res.status(422).json(err)
        // }
        // )
    },

    findAllTasks: function(req,res){
        console.log("find all Tasks")
        db.Taskdb
        .find({user: req.user._id})
        // .sort({ points:1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}