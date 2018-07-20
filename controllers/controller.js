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
    }   
}