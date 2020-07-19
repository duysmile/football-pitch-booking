const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
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
    deletedAt: {
        type: Date,
    },
}, {
    timestamps: true,
    collation: 'vn',
});

const Field = mongoose.model('Field', fieldSchema);
module.exports = Field;
