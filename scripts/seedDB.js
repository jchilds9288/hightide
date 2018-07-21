const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/hightidedb"
);

const hightideSeed = [
{
    firstName: "Whit",
    lastName: "Childs",
    address: "1234 race st",
    address2: "??",
    city: "Denver",
    state:"Colorado",
    zip: "88686",
    email:"hello@gmail.com",
    password:"test",
    score: 0,
    date: new Date(Date.now()),
  
},
{
    firstName: "Eliza",
    lastName: "Childs",
    address: "1234 race st",
    address2: "??",
    city: "Denver",
    state:"Colorado",
    zip: "88686",
    email:"hello@gmail.com",
    password:"test",
    score: 0,
    date: new Date(Date.now())
},
{
    firstName: "Julianna",
    lastName: "Childs",
    address: "1234 race st",
    address2: "??",
    city: "Denver",
    state:"Colorado",
    zip: "88686",
    email:"hello@gmail.com",
    password:"test",
    score: 0,
    date: new Date(Date.now())
},
{
    firstName: "Doug",
    lastName: "Childs",
    address: "1234 race st",
    address2: "??",
    city: "Denver",
    state:"Colorado",
    zip: "88686",
    email:"hello@gmail.com",
    password:"test",
    score: 0,
    date: new Date(Date.now())
},
{
    firstName: "Jocelyn",
    lastName: "Childs",
    address: "1234 race st",
    address2: "??",
    city: "Denver",
    state:"Colorado",
    zip: "88686",
    email:"hello@gmail.com",
    password:"test",
    score: 0,
    date: new Date(Date.now())
},
{
    firstName: "Ben",
    lastName: "Hock",
    address: "1234 race st",
    address2: "??",
    city: "Denver",
    state:"Colorado",
    zip: "88686",
    email:"hello@gmail.com",
    password:"test",
    score: 0,
    date: new Date(Date.now())
}

];

const taskSeed = [
{task: "Ball on the Haters",
points: 5,
}

]

db.Hightidedb
  .remove({})
  .then(() => db.Hightidedb.collection.insertMany(hightideSeed))
  .then(() => db.Taskdb.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 