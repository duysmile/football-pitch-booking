const mongoose = require('mongoose');
const Constants = require('../common/constants');

const yardSchema = new mongoose.Schema({
    owner: {
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
    type: {
        type: Number,
        enum: Constants.YARD.TYPE,
        required: true,
    },
    price: {
        type: Number,
        min: 1,
        max: 1000,
        required: true,
    },
    field: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'Field',
    },
    unit: {
        type: Number,
        min: 1,
        max: 24,
        default: 1,
        required: true,
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

const Yard = mongoose.model('Yard', yardSchema);
module.exports = Yard;
