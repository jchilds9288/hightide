require("dotenv").config()
const cors = require('cors')
const createError = require('http-errors');
const express = require('express');
const session = require("express-session");
const passport = require("passport");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({

  callbackURL: "http://localhost:3000/auth/google/callback",  
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hightidedb");

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + 'public/index.html'));
// });
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

var port = process.env.PORT || '3001';

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

module.exports = app;
