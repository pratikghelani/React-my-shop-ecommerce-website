const adminsModel = require('../model/adminsSchema');
const { adminToken } = require('../utils/genretToken');

const adminsLogin = async (req, res) => {
    const {email, password} = req.body;
    try{
        const admins = await adminsModel.findOne({email, password});
        if(admins){
            // console.log('**********', admins);
            return res.status(200).json({
                message: `${ email } Admin Login SuccessFully`,
                token: adminToken(admins._id),
            });
        }else {
            return res.status(401).json('Invalid Login');
        }
    }   catch (error){
        console.log("Error : ", error);
    }

}

module.exports = { adminsLogin };