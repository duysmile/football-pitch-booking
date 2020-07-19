const Yard = require('../models/Yard');
const Field = require('../models/Field');

exports.createYard = async (req, res, next) => {
    try {
        const {
            name,
            type,
            price,
            unit,
            field,
        } = req.body;
        const { _id: owner } = req.user;

        const existField = await Field.findOne({
            owner,
            _id: field,
        }).select('_id').lean();

        if (!existField) {
            return next(new Error('Field not exist.'));
        }

        const existYard = await Yard.findOne({
            field,
            owner,
            name,
        }).select('_id').lean();
        if (existYard) {
            return next(new Error('Yard\'s name exists.'));
        }

        const newYard = await Yard.create({
            name,
            type,
            price,
            unit,
            field,
            owner,
        });

        return res.json(newYard);
    } catch (error) {
        next(error);
    }
};

exports.getYards = async (req, res, next) => {
    try {
        const { field } = req.params;
        const yards = await Yard.findOne({
            field,
            deletedAt: null,
        });

        return res.json(yards);
    } catch (error) {
        next(error);
    }
};

exports.getNotBookedYardsByDate = async (req, res, next) => {

};
