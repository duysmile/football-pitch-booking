const bcrypt = require('bcrypt');

const SALT_ROUND = 2;

exports.hashPassword = (password) => {
    return bcrypt.hashSync(password, SALT_ROUND);
};

exports.comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};
