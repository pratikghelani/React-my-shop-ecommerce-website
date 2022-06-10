const jwt = require('jsonwebtoken');

const genreteToken = (_id, firstname, username, email, phone) => {
    return jwt.sign({_id, firstname, username, email, phone}, process.env.JWT_SECRET);
}
const adminToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_ADMIN_TOKEN );
}

module.exports = {genreteToken, adminToken};