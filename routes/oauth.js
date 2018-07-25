const router = require("express").Router();
const passport = require("passport");
var { generateToken, sendToken } = require('../utils/token.utils');
require('../passport')();


// // router.get('/google',
// //   passport.authenticate('google', { scope: ['profile'] }));

// // router.get('/google/callback', 
// //   passport.authenticate('google', { failureRedirect: '/auth/loginFailure' }),
// //   function(req, res) {
// //     // Successful authentication, redirect home.
// //     console.log("authenticated")
// //     res.json({message:"success"});
// //   });

// //   router.get("/loginFailure", (req,res) =>{
// //       res.send("login failure")
// //   })
  
router.route('/users')
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