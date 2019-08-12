const Rate = require('../types/rate');
const {	updateRateLimit } = require('../queries/rate');

module.exports = {
	rate: {
		type: Rate.type,
		args: {},
		resolve: async (parent, args) => {
			return await updateRateLimit(args);
		}
	}
};