const path = require('path');

exports.setView = (page) => {
	return path.join(__dirname, '..', 'views', page);
};
