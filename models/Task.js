const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {type: String},
    points: {type: Number},
    user: {
        type: Schema.Types.ObjectId,
        ref:"Hightidedb"
    },
});

const Taskdb = mongoose.model("Task", taskSchema)

module.exports = Taskdb