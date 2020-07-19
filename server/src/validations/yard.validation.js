exports.createYard = (req, res, next) => {
    const {
        name,
        type,
        price,
        unit,
        field,
    } = req.body;

    if (!name) {
        return next(new Error('Name is required'));
    }
    if (!type) {
        return next(new Error('Type is required'));
    }
    if (!price) {
        return next(new Error('Price is required'));
    }
    if (!unit) {
        return next(new Error('Unit is required'));
    }
    if (!field) {
        return next(new Error('Field is required'));
    }

    return next();
};
