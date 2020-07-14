const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const existUser = await User.findOne({
            username,
            deletedAt: null,
        }).select('password');

        if (!existUser) {
            throw new Error('Username is not existed');
        }

        const isMatchPassword = bcrypt.compareSync(password, existUser.password);
        if (!isMatchPassword) {
            throw new Error('Password is incorrect');
        }

        const token = jwt.sign({
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
            throw new Error('Username exists');
        }

        const hashPassword = bcrypt.hashSync(password, 2);
        const newUser = await User.create({
            username,
            password: hashPassword,
        });

        return res.json(newUser);
    } catch (error) {
        next(error);
    }
};
