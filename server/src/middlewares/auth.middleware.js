const { verifyToken } = require('../helpers/handle-token');

exports.validateToken = (req, res, next) => {
    let token = req.headers.authorization || req.body.token || req.query.token;

    const prefix = 'Bearer ';
    if (!token.startsWith(prefix)) {
        return next(new Error('INVALID_TOKEN'));
    }

    token = token.slice(prefix.length);
    try {
        const verifiedData = verifyToken(token);
        req.user = verifiedData;
        return next();
    } catch (error) {
        next(error);
    }
};
