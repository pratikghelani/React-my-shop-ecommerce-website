const jwt = require('jsonwebtoken');

const adminAuthocation = (async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_ADMIN_TOKEN);
        next();

    } catch(error){
        console.log('Error',error.message);
    }
});

module.exports = { adminAuthocation }