const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hightideSchema = new Schema({
    firstName: { 
        type: String, 
    },
    lastName: { 
        type: String, 
    },
    address: { 
        type: String, 
    },
    address2: { 
        type: String
    },
    city: {
        type:String, 
    },
    state:{
        type:String, 
    },
    zip: {
        type: Number, 
    },
    email:{
        type: String, required: true,
        trim: true, unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password:{
        type: String, 
    },
    score: {
        type:Number, default: 0
    },
    date: { 
        type: Date, default: Date.now
     },
    task: {
        type: Schema.Types.ObjectId,
        ref:"Task"
    },
    googleProvider: {
        type: {
            id: String,
            token: String
        },
        select: false,
        // required: true
    }
});

hightideSchema.set('toJSON', {getters: true, virtuals: true});

hightideSchema.statics.upsertGoogleUser = function(accessToken, refreshToken, profile, cb) {
    var that = this;
    return this.findOne({
        'googleProvider.id': profile.id
    }, function(err, user) {
        // no user was found, lets create a new one
        if (!user) {
            var newUser = new that({
                fullName: profile.displayName,
                email: profile.emails[0].value,
                googleProvider: {
                    id: profile.id,
                    token: accessToken
                }
            });

            newUser.save(function(error, savedUser) {
                if (error) {
                    console.log(error);
                }
                return cb(error, savedUser);
            });
        } else {
            return cb(err, user);
        }
    });
};




const Hightidedb = mongoose.model("Hightidedb", hightideSchema);

module.exports = Hightidedb