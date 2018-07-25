


var express = require('express');
var router = express.Router();
const controller = require("../controllers/controller")
var { generateToken, sendToken } = require('../utils/token.utils');
var passport = require('passport');
var config = require('../config');
var request = require('request');
require('../passport')();

/* GET users listing. */
router.route('/') 
.post(controller.create)
.get(controller.findAllTasks)


// Matches with "api/users/:id"
router.route("/:id")
.get(controller.findById)
.post(controller.createTask)
// .get(controller.findAllTasks)


// Matches with "api/users/auth/:id"
router.route('/auth/google')
    .post(passport.authenticate('google-token', {session: false}), function(req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };

        next();
    }, generateToken, sendToken);





module.exports = router;
