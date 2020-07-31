const mongoose = require('mongoose');
const Constants = require('../common/constants');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        minlength: 2,
        maxlength: 1000,
        required: true,
    },
    phone: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true,
    },
    email: {
        type: String,
        min: 5,
        max: 1000,
    },
    bookedTime: {
        type: Date,
        required: true,
    },
    yard: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'Yard',
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User',
    },
    status: {
        type: String,
        enum: Object.values(Constants.STATUS),
        required: true,
        default: Constants.STATUS.PENDING,
    },
    deletedAt: {
        type: Date,
    },
}, {
    timestamps: true,
    collation: {
        locale: 'vi',
    },
});

const Field = mongoose.model('Field', orderSchema);
module.exports = Field;
