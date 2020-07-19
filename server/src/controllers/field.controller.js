const Field = require('../models/Field');

exports.getFields = async (req, res, next) => {
    try {
        const fields = await Field.find({
            deletedAt: null,
        }).lean();

        return res.json(fields);
    } catch (error) {
        next(error);
    }
};

exports.createField = async(req, res, next) => {
    try {
        const {
            name,
            address,
            parkingFee,
        } = req.body;
        const { _id: owner } = req.user;

        const existField = await Field.findOne({
            name,
            owner,
        });
        if (existField) {
            return next(new Error('Field name existed'));
        }

        const newField = await Field.create({
            name,
            owner,
            address,
            parkingFee,
        });

        return res.json(newField);
    } catch (error) {
        next(error);
    }
};
