const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hightideSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    address2: { type: String},
    city: {type:String, required:true},
    state:{type:String, required:true},
    zip: {type: Number, required:true},
    email:{type: String, required:true},
    password:{type: String, required:true},
    score: {type:Number, default: 0},
    date: { type: Date, default: Date.now },
    task: {
        type: Schema.Types.ObjectId,
        ref:"Task"
    }
});

const Hightidedb = mongoose.model("Hightidedb", hightideSchema);

module.exports = Hightidedb