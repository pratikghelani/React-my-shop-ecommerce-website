const mongoose = require('mongoose');

const adminsSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    } ,
    password: {
        type: String,
        required: true
    }
});

const admins = mongoose.model('admins', adminsSchema);

module.exports = admins;