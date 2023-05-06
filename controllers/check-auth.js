const { verify } = require('jsonwebtoken');
const { secret_key } = require('../config/env');

const checkAuth = (req, res, next) => {
	try {
		const header = req.headers.authorization;
		const token = header.replace('Bearer ', '');
		const decoded = verify(token, secret_key);
		req.userId = decoded.id;
		next();
	} catch (err) {
		res.json({ success: 0, message: 'Auth failed' });
	}
};

module.exports = {
	checkAuth,
};
