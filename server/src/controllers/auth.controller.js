const User = require('../models/User');

const { hashPassword, comparePassword } = require('../helpers/handle-password');
const { generateToken } = require('../helpers/handle-token');

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const existUser = await User.findOne({
            username,
            deletedAt: null,
        }).select('password');

        if (!existUser) {
            return next(new Error('Username is not existed'));
        }

        const isMatchPassword = comparePassword(password, existUser.password);
        if (!isMatchPassword) {
            return next(new Error('Password is incorrect'));
        }

        const token = generateToken({
            _id: existUser._id,
        });

        return res.json({ token });
    } catch (error) {
        next(error);
    }
};

exports.register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const existUser = await User.findOne({
            username,
        });
        if (existUser) {
            return next(new Error('Username exists'));
        }

        const hash = hashPassword(password);
        const newUser = await User.create({
            username,
            password: hash,
        });

        delete newUser.password;
        return res.json(newUser);
    } catch (error) {
        next(error);
    }
};
