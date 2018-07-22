const router = require("express").Router();
const passport = require("passport");

// youtube
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req,res) =>{
  res.send("logging out")
})

router.get("/google", passport.authenticate("google", {scope: ['profile']}))
//end youtube

// router.get('/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// router.get('/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/auth/loginFailure' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     console.log("authenticated")
//     res.json({message:"success"});
//   });

//   router.get("/loginFailure", (req,res) =>{
//       res.send("login failure")
//   })
  
  
  module.exports = router;