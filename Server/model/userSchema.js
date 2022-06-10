const mongoose= require('mongoose');

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required : true,
        trim: true,
        min: 1,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 1,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unoque: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    phone:{
        type: String,
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;