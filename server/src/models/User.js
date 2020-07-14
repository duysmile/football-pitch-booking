const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        maxlength: 200,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength:8,
        maxlength: 1000,
        required: true,
    },
    deletedAt: {
        type: Date,
    },
}, {
    timestamps: true,
    collation: 'vn',
});

const User = mongoose.model('User', userSchema);
module.exports = User;
