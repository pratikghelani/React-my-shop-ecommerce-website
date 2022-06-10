const { response } = require('express');
const userModel = require('../model/userSchema')
const { genreteToken } = require('../utils/genretToken')

 const userSingup = async (req, res) => {

        const {firstname,lastname,username,email,phone,password}= req.body;
       
    try{
        const exist = await userModel.findOne({ username });
        // const exist = userModel.findOne({ username: req.body.username });
        // console.log(exist)
        if(exist){
            return res.status(401).json(`Username already exist`);
        }
        let newUser;
        newUser = new userModel({
            firstname,
            lastname,
            username,
            email,
            phone,
            password,
        });
     
        await newUser.save();
        return res.status(200).json(`User is successfully registered`);

    } catch(error){
        console.log('Error:', error.message);
    }
}

const userLogin = async (req, res) => {
    const { firstname, lastname, username, email, phone, password, token } = req.body;
    try{
        console.log(username, password,"username, password");
        const user = await userModel.findOne({username, password});
        // const userData = { user._id, user.username, user.email, user.phone }
        // console.log('-=-=--=-=-=-=-', username, password);
        console.log(user, "user");
        if(user){

            return res.status(200).json({
                message: `${username} Login SuccessFull`,
                token: genreteToken(user._id ),
                _id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                user,
            });
        }else{
             res.status(401).json(`Invalid Login`);
        }
        
    }catch(error){
        console.log('Error :', error);
    }
}

// Get User all data
const userData = async (req, res) => {
}

module.exports = { userSingup, userLogin };