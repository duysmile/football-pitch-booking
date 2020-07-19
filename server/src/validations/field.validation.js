exports.createField = (req, res, next) => {
    const {
        name,
        address,
        parkingFee,
    } = req.body;

    if (!name) {
        return next(new Error('Name is required'));
    }
    if (!address) {
        return next(new Error('Address is required'));
    }
    if (parkingFee && Number.isNaN(parkingFee)) {
        return next(new Error('Parking fee must be a number'));
    }

    return next();
};
