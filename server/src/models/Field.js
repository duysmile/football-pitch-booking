const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    name: {
        type: String,
        minlength: 2,
        maxlength: 1000,
        required: true,
    },
    address: {
        type: String,
        minlength: 2,
        maxlength: 1000,
        required: true,
    },
    parkingFee: {
        type: Number,
        min: 0,
        max: 100,
    },
}, {
    timestamps: true,
    collation: 'vn',
});

const Field = mongoose.Model('Field', fieldSchema);
module.exports = Field;
