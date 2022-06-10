// const catchAsyncError = require('../middleware/catchAsyncError');
const jwt = require('jsonwebtoken');

const userAuthication = async (req, res, next) => {
    try {
        // If have us Token
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];

                const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
                // If have a token but token is invalid
                if (decodedToken) {
                    next();
                } else {
                    res.json({
                        message: 'invalid token',
                    });
            };
        } else {
            res.json({
                message: 'token not found',
            })
        }
    } catch (e) {
        console.log(e.message);
        res.json({
            message: 'invalid token',
        })
    }
};

module.exports = {
    userAuthication,
}