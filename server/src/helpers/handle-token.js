const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secretkeyforfootballpitchbooking';

exports.generateToken = (data) => {
    return jwt.sign(data, SECRET_KEY);
};

exports.verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};
