exports.login = (req, res, next) => {
    const {username, password} = req.body;
    if (!username) {
        return next(new Error('Username is required'));
    }
    if (!password) {
        return next(new Error('Password is required'));
    }

    return next();
};

exports.register = (req, res, next) => {
    const {username, password, passwordConfirmation} = req.body;
    if (!username) {
        return next(new Error('Username is required'));
    }
    if (username.length < 5) {
        return next(new Error('Username must be at least 5 characters'));
    }
    if (!password) {
        return next(new Error('Password is required'));
    }
    if (password.length < 8) {
        return next(new Error('Password must be at least 8 characters'));
    }

    if (password !== passwordConfirmation) {
        return next(new Error('Password must match password confirmation'));
    }

    return next();
};
