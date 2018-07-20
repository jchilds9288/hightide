const router = require("express").Router();
const passport = require("passport");

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/loginFailure' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log("authenticated")
    res.json({message:"success"});
  });

  router.get("/loginFailure", (req,res) =>{
      res.send("login failure")
  })
  
  
  module.exports = router;